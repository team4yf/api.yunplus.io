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

exports.default = function (fpm) {
  var _this = this;

  return {
    drop: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(args) {
        var name, dropSql, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = args.name;
                dropSql = 'drop table if exists ' + args.name;
                _context.next = 4;
                return fpm.M.commandAsync({ sql: dropSql });

              case 4:
                data = _context.sent;
                return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                  if (_lodash2.default.isEmpty(data)) {
                    reject({ errno: -9998 });
                  } else {
                    resolve({ data: data });
                  }
                }));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function drop(_x) {
        return _ref.apply(this, arguments);
      };
    }(),

    create: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(args) {
        var name, colsSql, command, data;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = args.name;
                colsSql = _lodash2.default.map(args.cols, function (col) {
                  var s_isNull = col.isNull === false ? ' NOT NULL' : ' NULL';
                  var s_default = _lodash2.default.isEmpty(col.default) ? '' : ' DEFAULT \'' + col.default + '\'';
                  var s_comment = _lodash2.default.isEmpty(col.comment) ? '' : ' COMMENT \'' + col.comment + '\'';
                  return col.name + ' ' + col.type + s_isNull + s_default + s_comment + ',\n';
                }).join('');
                command = 'CREATE TABLE ' + name + ' \n        ( id INT NOT NULL AUTO_INCREMENT COMMENT \'id\', \n        ' + colsSql + '\n        delflag TINYINT NOT NULL DEFAULT \'0\' COMMENT \'delete flag\', \n        createAt BIGINT NOT NULL COMMENT \'create time\', \n        updateAt BIGINT NOT NULL COMMENT \'update time\', \n        PRIMARY KEY (id) ) \n        ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 \n        COMMENT = \'' + name + '\'';
                _context2.next = 5;
                return fpm.M.commandAsync({ sql: command });

              case 5:
                data = _context2.sent;
                return _context2.abrupt('return', new _promise2.default(function (resolve, reject) {
                  if (_lodash2.default.isEmpty(data)) {
                    reject({ errno: -9998 });
                  } else {
                    resolve({ data: data });
                  }
                }));

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x2) {
        return _ref2.apply(this, arguments);
      }

      return create;
    }()
  };
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }