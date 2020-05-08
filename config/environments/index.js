require("dotenv").config();

const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');
const QA = require('./qa');
const { NODE_ENV } = process.env;

const currentEnv = DEVELOPMENT;

if (NODE_ENV === "production") {
  currentEnv = PRODUCTION;
} else if(NODE_ENV === "qa") {
  currentEnv = QA;
}

module.exports = currentEnv;