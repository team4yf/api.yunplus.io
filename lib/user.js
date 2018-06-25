'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fpm) {
	return {
		login: function login(args) {
			return new _promise2.default(function (resolve, reject) {
				resolve({
					data: {
						device: '12312312312312',
						domain: 'http://www.hchome.net'
					}
				});
			});
		},
		logout: function logout(args) {
			return new _promise2.default(function (resolve, reject) {
				reject({ errno: 1003 });
			});
		}
	};
};