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
      var project, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              project = data.url_data;
              _context.prev = 1;
              result = 'undefined';
              _context.t0 = upstream;
              _context.next = _context.t0 === 'github' ? 6 : _context.t0 === 'coding' ? 10 : 14;
              break;

            case 6:
              _context.next = 8;
              return _fpm.doCommand('yfcode pull -' + type + ' ' + project);

            case 8:
              result = _context.sent;
              return _context.abrupt('break', 15);

            case 10:
              _context.next = 12;
              return _fpm.doCommand('yfcode pull -' + type + ' ' + project);

            case 12:
              result = _context.sent;
              return _context.abrupt('break', 15);

            case 14:
              result = 'unknow upstream';

            case 15:
              console.log(result);
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t1 = _context['catch'](1);

              console.log(_context.t1);

            case 21:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 18]]);
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