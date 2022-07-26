const { Pool } = require('pg');
const credentials = require('../secrets');
const { ModuleFilenameHelpers } = require('webpack');

// create a new pool here using the connection string above
const pool = new Pool(credentials);

// FIXME: this is just a test and doesn't do anything
const query = (text, params, callback) => {
  console.log('executed query', text);
  return pool.query("SELECT NOW()");
};

module.exports = { query };