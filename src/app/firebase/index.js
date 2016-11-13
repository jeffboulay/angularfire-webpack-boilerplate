'use strict';

module.exports = require('angular').module('boilerplate-app.firebase', [])
    .constant('firebaseURL', 'https://tic-tac-to-c8f08.firebaseio.com')
    .factory('firebaseFactory', require('./firebase-factory'));
