import Hapi from '@hapi/hapi'; // Updated for newer versions
import Joi from '@hapi/joi';  // Import Joi for validation

const server = new Hapi.Server({
  host: '127.0.0.1',
  port: '8080',
  routes: {
    cors: { origin: ['*'] },
  },
});
server.validator(Joi);

async function main() {
  await server.register([{
    plugin: require('./shifts-mock-api'),
    routes: { prefix: '/shifts' },
  }]);

  await server.start();

  console.info(`✅  API server is listening at ${server.info.uri.toLowerCase()}`);
}

main();
