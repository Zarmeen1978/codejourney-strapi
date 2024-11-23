"use strict";

/**
 * track-progress controller
 */

module.exports = {
  async trackProgress(ctx) {
    try {
      const { uid, subModuleId, subModuleType, mainModuleId } =
        ctx.request.body;

      // Dynamically determine the keys
      const mainModuleKey = subModuleType; // e.g., pythonMainModule
      const subModuleKey = subModuleType.replace("MainModule", "SubModule"); // e.g., pythonSubModule

      // Fetch the course progress record for the given UID
      const [courseProgress] = await strapi.entityService.findMany(
        "api::course-progress.course-progress",
        {
          filters: { uid: { $eq: uid } },
          populate: {
            [mainModuleKey]: {
              populate: subModuleKey,
            },
          },
        }
      );

      if (!courseProgress) {
        return ctx.badRequest("No progress record found for the given UID.");
      }

      // Find the specific main module to update
      let mainModuleToUpdate = courseProgress[mainModuleKey].find(
        (module) => module[`${mainModuleKey}Id`] === mainModuleId
      );

      // If the main module doesn't exist, create a new one
      if (!mainModuleToUpdate) {
        mainModuleToUpdate = {
          [`${mainModuleKey}Id`]: mainModuleId,
          [subModuleKey]: [{ [`${subModuleKey}Id`]: subModuleId }],
        };

        // Add the new main module to the array
        const updatedMainModules = [
          ...courseProgress[mainModuleKey],
          mainModuleToUpdate,
        ];

        const updatedRecord = await strapi.entityService.update(
          "api::course-progress.course-progress",
          courseProgress.id,
          {
            data: {
              [mainModuleKey]: updatedMainModules,
            },
          }
        );

        return ctx.send({
          message: "Main module created and progress updated successfully.",
          data: updatedRecord,
        });
      }

      // Check if the subModule already exists
      const subModuleExists = mainModuleToUpdate[subModuleKey].some(
        (subModule) => subModule[`${subModuleKey}Id`] === subModuleId
      );

      if (subModuleExists) {
        return ctx.send({ message: "Submodule already exists." });
      }

      // Append the new subModuleId to the subModule array
      const updatedSubModules = [
        ...mainModuleToUpdate[subModuleKey],
        { [`${subModuleKey}Id`]: subModuleId },
      ];

      // Update the course progress record with the updated submodules
      const updatedRecord = await strapi.entityService.update(
        "api::course-progress.course-progress",
        courseProgress.id,
        {
          data: {
            [mainModuleKey]: courseProgress[mainModuleKey].map((module) =>
              module.id === mainModuleToUpdate.id
                ? { ...module, [subModuleKey]: updatedSubModules }
                : module
            ),
          },
        }
      );

      return ctx.send({
        message: "Progress updated successfully.",
        data: updatedRecord,
      });
    } catch (err) {
      console.error(err);
      return ctx.internalServerError(
        "An error occurred while updating progress."
      );
    }
  },
};