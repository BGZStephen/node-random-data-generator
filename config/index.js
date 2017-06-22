const env = process.env.NODE_ENV || 'development';

const configs = {
  development: {
    database: "mongodb://stephen:klapaucius@ds127802.mlab.com:27802/bgzstephen-node-random-data-generator",
    secret: "node-random-data-generator",
    apiUrl: "http://localhost:3000/"
  },
  staging: {

  },
  production: {

  }
}

if (!configs[env]) {
  throw new Error('Invalid environment: ' + env);
}

module.exports = configs[env];
