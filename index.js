const { get, has } = require('lodash');
const { MongoClient } = require('mongodb');

module.exports = (options) => {
  const MongoClientInstance = get(options, 'MongoClient') || MongoClient;
  let client;
  let config;
  let logger;

  const start = async (dependencies) => {
    config = { ...dependencies.config };
    logger = ({ ...dependencies.logger }) || console;

    if (!dependencies.logger) {
      logger.info = console.log;
    }

    if (!has(config, 'url')) {
      throw new Error('config.url is required');
    }

    logger.info(`Connecting to ${config.url}`);
    try {
      client = await MongoClientInstance.connect(config.url, config.options || {});

      return client;
    } catch (error) {
      throw new Error(error);
    }
  };

  const stop = async () => {
    if (!client) {
      logger.info('No database has been opened.');
      return;
    }

    logger.info(`Disconnecting from ${config.url}`);
    await client.close();
  };

  return {
    start,
    stop,
  };
};
