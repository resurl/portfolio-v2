'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    afterUpdate: async entry => {
        axios
          .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
          .catch(() => {
              // Ignore
          })
    },

    afterDestroy: async entry => {
        axios
          .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
          .catch(() => {
              // Ignore
          })
    }
};
