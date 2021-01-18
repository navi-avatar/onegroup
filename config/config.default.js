/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609652366262_7199';

  config.security = {
    csrf:{
      ignore: '/one/api/'
    }
  }

  // config.rest = {
  //   urlprefix: '/one/api/', // Prefix of rest api url. Default to /api/
  //   authRequest: null,
    
    // authRequest: async ctx => {
    //   // A truthy value must be returned when authentication succeeds.
    //   // Otherwise the client will be responded with `401 Unauthorized`
    //   return accessToken;
    // }
  
    // Specify the APIs for which authentication can be ignored.
    // If authRequest is configured, authentication for all APIs is required by default.
    authIgnores: null,
    // authIgnores: {
    //   users: {
    //     show: true, // allow GET /api/users/:id to ignore authentication
    //     index: true,
    //   }
    // }
  };

  // add your middleware config here
  // config.middleware = ['koajwt'];

  // config.koajwt = {secret:'abcdef'};
   // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
