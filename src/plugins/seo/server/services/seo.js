"use strict";

// ./server/services/seo.js
module.exports = ({ strapi }) => ({
  getContentTypes() {
    return strapi.contentTypes;
  },
});
