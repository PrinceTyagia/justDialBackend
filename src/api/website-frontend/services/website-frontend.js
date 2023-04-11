'use strict';

/**
 * website-frontend service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-frontend.website-frontend');
