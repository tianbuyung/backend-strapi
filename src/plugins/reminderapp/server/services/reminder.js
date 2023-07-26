"use strict";
module.exports = ({ strapi }) => ({
  async getall(query) {
    strapi.db.query("plugin::reminderapp.todo").updateMany({
      where: {
        datetime: {
          $lt: new Date(),
        },
      },
      data: {
        isdatepassed: true,
      },
    });
    const q = strapi.entityService.findMany("plugin::reminderapp.todo", {
      filters: {
        isdatepassed: {
          $eq: false,
        },
      },
    });
    return await q;
  },
  async deleteReminder(id) {
    return await strapi.entityService.delete("plugin::reminderapp.todo", id);
  },

  async createReminder(data) {
    return await strapi.entityService.create("plugin::reminderapp.todo", data);
  },

  async updateReminder(id, data) {
    return await strapi.entityService.update(
      "plugin::reminderapp.todo",
      id,
      data
    );
  },
});
