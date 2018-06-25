"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = function (fpm) {
	var _this = this;

	return {
		checkVersion: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(args) {
				var arg, data;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								arg = {
									table: "cm_version",
									condition: "delflag = 0 and app = '" + args.app + "'",
									fields: "id,version,download,app,autorun"
								};
								_context.next = 3;
								return fpm.M.firstAsync(arg);

							case 3:
								data = _context.sent;
								return _context.abrupt("return", new _promise2.default(function (resolve, reject) {
									if (_lodash2.default.isEmpty(data)) {
										reject({ errno: -9998 });
									} else {
										resolve({ data: data });
									}
								}));

							case 5:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function checkVersion(_x) {
				return _ref.apply(this, arguments);
			}

			return checkVersion;
		}(),

		validate: function () {
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(args) {
				var arg, count;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								arg = {
									table: "fpm_device",
									condition: "domain = 'game-plugin' and activeflag = 1 and bin = '" + args.bin + "'"
								};
								_context2.next = 3;
								return fpm.M.countAsync(arg);

							case 3:
								count = _context2.sent;
								return _context2.abrupt("return", new _promise2.default(function (resolve, reject) {
									if (count !== 1) {
										reject({ errno: -9998, message: 'Not Granted' });
										return;
									}
									resolve({ errno: 0, data: {} });
								}));

							case 5:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, _this);
			}));

			function validate(_x2) {
				return _ref2.apply(this, arguments);
			}

			return validate;
		}(),

		register: function () {
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(args) {
				var arg, count;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								arg = {
									table: "fpm_reg_code",
									condition: "delflag = 0 and status = 0 and code = '" + args.code + "'",
									row: { status: 1, bind_id: args.bind_id }
								};
								_context3.next = 3;
								return fpm.M.countAsync(arg);

							case 3:
								count = _context3.sent;
								return _context3.abrupt("return", new _promise2.default(function (resolve, reject) {
									if (count !== 1) {
										reject({ errno: -9997, message: 'No Reg Code' });
										return;
									}

									fpm.M.transation(function (err, atom) {
										var _now = _lodash2.default.now();
										atom.update({
											table: "fpm_reg_code",
											condition: "delflag = 0 and status = 0 and code = '" + args.code + "'",
											row: { status: 1, bind_id: args.bind_id, updateAt: _now }
										}, function (err, result1) {
											if (err) {
												atom.rollback();
												reject(err);
												return;
											}
											var obj = {
												table: "fpm_device",
												row: { bin: args.bind_id, createAt: _now, updateAt: _now, domain: 'game-plugin', activeAt: _now, activeflag: 1 }
											};
											atom.create(obj, function (err, result2) {
												if (err) {
													atom.rollback(function () {
														reject(err);
													});
												} else {
													atom.commit(function (err) {
														resolve({ errno: 0, data: result2 });
													});
												}
											});
										});
									});
								}));

							case 5:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, _this);
			}));

			function register(_x3) {
				return _ref3.apply(this, arguments);
			}

			return register;
		}()
	};
};

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }