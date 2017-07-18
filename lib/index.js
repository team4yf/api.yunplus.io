'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _yfFpmServer = require('yf-fpm-server');

var _common = require('./common');

var _common2 = _interopRequireDefault(_common);

var _application = require('./application');

var _application2 = _interopRequireDefault(_application);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _system = require('./system');

var _system2 = _interopRequireDefault(_system);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fpm) {
  var biz = new _yfFpmServer.Biz('0.0.1', fpm);
  biz.addSubModules('common', _common2.default);
  biz.addSubModules('user', _user2.default);
  biz.addSubModules('application', _application2.default);
  biz.addSubModules('system', _system2.default);
  biz.addSubModules('table', _table2.default);
  return biz;
};