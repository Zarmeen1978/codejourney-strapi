"use strict";

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/track-progress",
      handler: "track-progress.trackProgress",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/set-user-skill",
      handler: "track-progress.setUserSkill",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
