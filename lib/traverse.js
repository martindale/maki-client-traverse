module.exports = {
  extends: {
    services: {
      http: {
        client: __dirname + '/client.js',
      }
    }
  }
};
