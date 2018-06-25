'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateOne = function generateOne(fields) {
    var generators = getGenerators(fields);
    var one = {};
    _lodash2.default.map(generators, function (generator, name) {
        one[name] = generator();
    });
    return one;
};

var generateList = function generateList(fields, size) {
    var generators = getGenerators(fields);
    console.info(generators);
    var list = [];
    var one = void 0;
    for (var i = 0; i < size; i++) {
        one = {};
        _lodash2.default.map(generators, function (generator, name) {
            one[name] = generator();
        });
        list.push(one);
    }
    return list;
};

var getGenerators = function getGenerators(fields) {
    var paths = void 0;
    var list = _lodash2.default.map(fields, function (field, name) {
        paths = field.split('.');
        return { name: name, generator: _faker2.default[paths[0]][paths[1]] };
    });
    var generators = {};
    _lodash2.default.map(list, function (item) {
        generators[item.name] = item.generator;
    });
    return generators;
};

exports.default = function (fpm) {

    return {
        getOne: function getOne(args) {
            var data = generateOne(_lodash2.default.assign({}, args.fields || {
                name: 'name.findName',
                email: 'internet.email',
                ip: 'internet.ip',
                website: 'internet.url'
            }));
            return _promise2.default.resolve({ data: data });
        },
        getList: function getList(args) {
            var list = generateList(_lodash2.default.assign({}, args.fields || {
                name: 'name.findName',
                email: 'internet.email',
                ip: 'internet.ip',
                website: 'internet.url'
            }), args.size || 20);
            return _promise2.default.resolve({ data: list });
        }
    };
};