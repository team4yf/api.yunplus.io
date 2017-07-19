'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fpm = undefined;
var generate = function generate(upstream, type) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(message, data) {
      var project;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              project = data.url_data;
              _context.prev = 1;
              _context.t0 = upstream;
              _context.next = _context.t0 === 'github' ? 5 : _context.t0 === 'coding' ? 9 : 13;
              break;

            case 5:
              _context.next = 7;
              return _fpm.doCommand('yfcode pull -' + type + ' ' + project);

            case 7:
              result = _context.sent;
              return _context.abrupt('break', 14);

            case 9:
              _context.next = 11;
              return _fpm.doCommand('yfcode pull -' + type + ' ' + project);

            case 11:
              result = _context.sent;
              return _context.abrupt('break', 14);

            case 13:
              result = 'unknow upstream';

            case 14:
              console.log(result);
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t1 = _context['catch'](1);

              console.log(_context.t1);

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 17]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = function (fpm) {
  _fpm = fpm;
  fpm.subscribe('github/p', generate('github', 'p'));
  fpm.subscribe('github/w', generate('github', 'w'));
  fpm.subscribe('coding/p', generate('coding', 'p'));
  fpm.subscribe('coding/w', generate('coding', 'w'));
};