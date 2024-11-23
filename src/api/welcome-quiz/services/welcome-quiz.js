'use strict';

/**
 * welcome-quiz service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcome-quiz.welcome-quiz');
