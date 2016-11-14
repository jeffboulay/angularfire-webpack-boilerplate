'use strict';

var Firebase = require('firebase');

/* @ngInject */
function FirebaseFactory() {
    var firebase = require('firebase');
    const config = {
        apiKey: 'AIzaSyCo1scurrvS_AKF9RGpoLq7DIqVoTgGHTk',
        authDomain: 'tic-tac-to-c8f08.firebaseapp.com',
        databaseURL: 'https//tic-tac-to-c8f08.firebaseio.com',
        storageBucket: 'tic-tac-to-c8f08.appspot.com'
    };

    firebase.initializeApp(config);

    return firebase;
}

module.exports = FirebaseFactory;