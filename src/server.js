/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
const Hapi = require('@hapi/hapi');
const routes = require('./routes');
// eslint-disable-next-line spaced-comment
//aa
const init = async () => {
  const server = Hapi.server({
    // eslint-disable-next-line linebreak-style
    port: 5000,
    // eslint-disable-next-line linebreak-style
    host: 'localhost',
  // eslint-disable-next-line linebreak-style
  });
  server.route(routes);
  // eslint-disable-next-line linebreak-style
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
