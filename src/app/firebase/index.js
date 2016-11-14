'use strict';

module.exports = require('angular').module('boilerplate-app.firebase', [])
    .constant('fbConfig', require('./fbConfig'))
    .factory('firebaseFactory', require('./firebase-factory'));
