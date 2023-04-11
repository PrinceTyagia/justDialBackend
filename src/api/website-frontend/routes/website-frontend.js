'use strict';

/**
 * website-frontend router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::website-frontend.website-frontend');
