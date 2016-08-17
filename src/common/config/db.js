'use strict';
/**
 * db config
 * @type {Object}
 */

export default {
  type: 'mongo',
  
  log_sql: true,
  log_connect: true,

  user: 'root',
  password: 'root',
  host: 'ds011452.mlab.com',
  port: '11452',
  database: 'manitas',

  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: '',
      user: '',
      password: '',
      prefix: 'think_',
      encoding: 'utf8'
    },
    mongo: {
     // options: {
        //user: 'root',
        //password: 'root',
        //host: 'ds011452.mlab.com',
        //port: '11452',
        //database: 'manitas',
        //authSource: "admin",
        //replicaSet: "xxx"
      //}
    }
  }
};