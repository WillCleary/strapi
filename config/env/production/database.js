// path: ./config/env/production/database.js

const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    filename: path.join(__dirname, '..', env('DATABASE_FILENAME')),
  },
  useNullAsDefault: true,
});
