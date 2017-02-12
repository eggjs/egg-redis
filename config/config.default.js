'use strict';

exports.redis = {
  default: {
  },
  app: true,
  agent: false,

  // Single Redis
  // client: {
  //   host: 'host',
  //   port: 'port',
  //   family: 'user',
  //   password: 'password',
  //   db: 'db',
  // },

  // Cluster Redis
  // cluster: [{
  //   host: 'host',
  //   port: 'port',
  //   family: 'user',
  //   password: 'password',
  //   db: 'db',
  // },{
  //   host: 'host',
  //   port: 'port',
  //   family: 'user',
  //   password: 'password',
  //   db: 'db',
  // }],

  // Multi Redis
  // clients: {
  //   db1: {
    //   host: 'host',
    //   port: 'port',
    //   family: 'user',
    //   password: 'password',
    //   db: 'db',
  //   },
  //   db2: {
    //   host: 'host',
    //   port: 'port',
    //   family: 'user',
    //   password: 'password',
    //   db: 'db',
  //   },
  // },
};
