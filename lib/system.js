'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readFileAsync = _bluebird2.default.promisify(_fs2.default.readFile);

exports.default = function (fpm) {
	var mailSend = _bluebird2.default.promisify(fpm.emailer.send);
	return {
		sendMail: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(args) {
				var arg, data, error;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								arg = {
									table: "fpm_template",
									id: args.templateId
								};
								data = void 0, error = void 0;
								_context.prev = 2;
								_context.next = 5;
								return fpm.M.getAsync(arg);

							case 5:
								data = _context.sent;

								args.template = data.content;
								_context.next = 9;
								return mailSend(args);

							case 9:
								data = _context.sent;
								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](2);

								error = _context.t0;

							case 15:
								return _context.abrupt('return', new _promise2.default(function (rs, rj) {
									if (error) {
										rj(error);
									} else {
										rs({ data: data });
									}
								}));

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, undefined, [[2, 12]]);
			}));

			return function sendMail(_x) {
				return _ref.apply(this, arguments);
			};
		}(),

		sms: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(args) {
				var APPKEY, tpl_id, tpl_value, mobiles, body, result;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								APPKEY = '1a6c0e78e6ce02680e1d92b40181d3dc';
								tpl_id = args.tpl_id || false;
								tpl_value = args.tpl_value || {};
								mobiles = args.mobiles;

								tpl_value = _lodash2.default.map(tpl_value, function (v, k) {
									return '#' + k + '#=' + v;
								}).join('&');
								tpl_value = encodeURIComponent(tpl_value);
								body = _lodash2.default.map({
									tpl_id: tpl_id,
									key: APPKEY,
									mobile: mobiles,
									tpl_value: tpl_value
								}, function (v, k) {
									return k + '=' + v;
								}).join('&');
								_context2.next = 9;
								return (0, _nodeFetch2.default)('http://v.juhe.cn/sms/send?' + body).then(function (res) {
									return res.json();
								});

							case 9:
								result = _context2.sent;
								return _context2.abrupt('return', new _promise2.default(function (resolve, reject) {
									resolve({ data: result });
								}));

							case 11:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, undefined);
			}));

			return function sms(_x2) {
				return _ref2.apply(this, arguments);
			};
		}(),
		show: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(args) {
				var data, info;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								data = {};
								_context3.prev = 1;
								_context3.t0 = JSON;
								_context3.next = 5;
								return readFileAsync(_path2.default.join(__dirname, '../package.json'), 'utf-8');

							case 5:
								_context3.t1 = _context3.sent;
								info = _context3.t0.parse.call(_context3.t0, _context3.t1);

								data = {
									arch: _os2.default.arch(),
									cpus: _os2.default.cpus(),
									hostname: _os2.default.hostname(),
									platform: _os2.default.platform(),
									type: _os2.default.type(),
									release: _os2.default.release(),
									freemem: Math.ceil(_os2.default.freemem() / 1024 / 1024),
									totalmem: Math.ceil(_os2.default.totalmem() / 1024 / 1024),
									uptime: _os2.default.uptime(),
									server: info,
									startTime: fpm._start_time
								};
								_context3.next = 12;
								break;

							case 10:
								_context3.prev = 10;
								_context3.t2 = _context3['catch'](1);

							case 12:
								return _context3.abrupt('return', new _promise2.default(function (resolve, reject) {
									if (_lodash2.default.isEmpty(data)) {
										reject({ errno: -9998 });
									} else {

										resolve({ data: data });
									}
								}));

							case 13:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, undefined, [[1, 10]]);
			}));

			return function show(_x3) {
				return _ref3.apply(this, arguments);
			};
		}()
	};
};