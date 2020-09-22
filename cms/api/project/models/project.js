'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    afterCreate: async entry => {
        axios
            .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, {})
            .catch(() => {

            });
    },
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
