import Promise from 'bluebird';
import DBM from 'yf-fpm-dbm';
import mysqlOptions from './mysqlOptions.js'
let M = Promise.promisifyAll(DBM(mysqlOptions));
export default M;
