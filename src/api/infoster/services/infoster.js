'use strict';

/**
 * infoster service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::infoster.infoster');
