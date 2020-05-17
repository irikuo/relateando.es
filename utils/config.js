const getConfig = async () => {
  const config = require('../config.json');
  return config;
};

exports.getConfig = getConfig;
