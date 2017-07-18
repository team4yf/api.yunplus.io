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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fpm) {
	var functions = {};
	_lodash2.default.forEach(fpm.M, function (fun, key) {
		if (!_lodash2.default.isFunction(fun)) {
			return;
		}
		if (_lodash2.default.endsWith(key, 'Async')) {
			return;
		}
		functions[key] = function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(args) {
				var data;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return fpm.M[key + 'Async'](args);

							case 3:
								data = _context.sent;
								return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
									resolve({ data: data });
								}));

							case 7:
								_context.prev = 7;
								_context.t0 = _context['catch'](0);
								return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
									reject(_context.t0);
								}));

							case 10:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, undefined, [[0, 7]]);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}();
	});
	return functions;
};