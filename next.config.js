require('dotenv').config();

module.exports = {
    env: {
        SENTRY_DSN: process.env.SENTRY_DSN,
    },
};
