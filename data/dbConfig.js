const knex = require("knex")("production")
const config = require("../knexfile.js");

const database = process.env.NODE_ENV || "development";

module.exports = knex(config[database]);
