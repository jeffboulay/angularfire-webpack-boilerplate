'use strict';

module.exports = require('angular').module('boilerplate-app.firebase', [])
    .factory('firebaseFactory', require('./firebase-factory'));
