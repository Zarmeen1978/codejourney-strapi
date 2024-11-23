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
  ],
};
