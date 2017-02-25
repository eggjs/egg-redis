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
  // client: {
  //   cluster: true,
  //   nodes: [{
  //     host: 'host',
  //     port: 'port',
  //     family: 'user',
  //     password: 'password',
  //     db: 'db',
  // },{
  //   host: 'host',
  //   port: 'port',
  //   family: 'user',
  //   password: 'password',
  //   db: 'db',
  // }]},

  // Multi Redis
  // clients: {
  //   instance1: {
    //   host: 'host',
    //   port: 'port',
    //   family: 'user',
    //   password: 'password',
    //   db: 'db',
  //   },
  //   instance2: {
    //   host: 'host',
    //   port: 'port',
    //   family: 'user',
    //   password: 'password',
    //   db: 'db',
  //   },
  // },
};
