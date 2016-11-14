'use strict';

var Firebase = require('firebase');

/* @ngInject */
function FirebaseFactory(fbConfig) {
    var firebase = require('firebase');

    firebase.initializeApp(fbConfig);

    return firebase;
}

module.exports = FirebaseFactory;