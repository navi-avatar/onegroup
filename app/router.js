'use strict';
const db_secret = require('./mock/db_secret');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  let jwt = app.middleware.koajwt({secret:db_secret.jwtSecret});
   
  router.get('/', jwt,controller.home.index);
  // router.get('/login', controller.login.index);
  // router.post('/login', controller.login.index);
};
