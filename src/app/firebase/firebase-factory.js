'use strict';

var Firebase = require('firebase');

/* @ngInject */
function FirebaseFactory() {
    return new Firebase('https://tic-tac-to-c8f08.firebaseio.com');
}

module.exports = FirebaseFactory;