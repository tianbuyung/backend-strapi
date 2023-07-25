"use strict";

module.exports = ({ strapi }) => ({
  findContentTypes(ctx) {
    ctx.body = strapi.plugin("seo").service("seo").getContentTypes();
  },
});
