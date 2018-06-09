'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _application = require('./application');

var _application2 = _interopRequireDefault(_application);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _system = require('./system');

var _system2 = _interopRequireDefault(_system);

var _faker = require('./faker');

var _faker2 = _interopRequireDefault(_faker);

var _webhook = require('./webhook');

var _webhook2 = _interopRequireDefault(_webhook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fpm) {
  var biz = new fpm.createBiz('0.0.1');
  biz.addSubModules('user', _user2.default);
  biz.addSubModules('application', _application2.default);
  biz.addSubModules('system', _system2.default);
  biz.addSubModules('faker', _faker2.default);
  (0, _webhook2.default)(fpm);
  return biz;
};