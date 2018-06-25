'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readFileAsync = _bluebird2.default.promisify(_fs2.default.readFile);

exports.default = function (fpm) {
	return {
		doCommand: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(args) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt('return', fpm.doCommand(args.command));

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, undefined);
			}));

			function doCommand(_x) {
				return _ref.apply(this, arguments);
			}

			return doCommand;
		}(),
		show: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(args) {
				var data, info;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								data = {};

								try {
									info = require(_path2.default.join(__dirname, '../package.json'));

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
										counter: fpm._counter,
										startTime: fpm._start_time
									};
								} catch (e) {}
								return _context2.abrupt('return', new _promise2.default(function (resolve, reject) {
									if (_lodash2.default.isEmpty(data)) {
										reject({ errno: -9998 });
									} else {

										resolve({ data: data });
									}
								}));

							case 3:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, undefined);
			}));

			function show(_x2) {
				return _ref2.apply(this, arguments);
			}

			return show;
		}()
	};
};