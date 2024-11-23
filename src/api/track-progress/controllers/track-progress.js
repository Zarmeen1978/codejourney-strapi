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

  async setUserSkill(ctx) {
    try {
      const { option, type } = ctx.request.body;

      if (!option || !type) {
        return ctx.badRequest("Option and type are required.");
      }

      // Fetch the profile question with the given type
      const [profileQuestion] = await strapi.entityService.findMany(
        "api::profile-question.profile-question",
        {
          filters: { type: { $eq: type } },
        }
      );

      console.log(profileQuestion);

      if (!profileQuestion) {
        return ctx.notFound("No matching question type found.");
      }

      // Verify if the option exists in the fetched profile question
      const options = [
        profileQuestion.option1,
        profileQuestion.option2,
        profileQuestion.option3,
        profileQuestion.option4,
      ];

      if (!options.includes(option)) {
        return ctx.badRequest("Invalid option for the given question type.");
      }

      // Get the authenticated user
      const userId = ctx.state.user?.id;
      console.log(userId);

      if (!userId) {
        return ctx.unauthorized(
          "You must be logged in to perform this action."
        );
      }

      // Update the user's ratedSkill field
      const updatedUser = await strapi.entityService.update(
        "plugin::users-permissions.user",
        userId,
        {
          data: {
            [type]: option, // Update the field with the selected option
          },
        }
      );

      return ctx.send({
        message: "User skill updated successfully.",
        data: updatedUser,
      });
    } catch (err) {
      console.error("Error in setUserSkill:", err);
      return ctx.internalServerError(
        "An error occurred while updating the skill."
      );
    }
  },
};
