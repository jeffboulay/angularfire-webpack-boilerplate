'use strict';

/* @ngInject */
function HomeController($scope, $firebaseObject) {
    var firebase = require('firebase');
    var config = {
        apiKey: 'AIzaSyCo1scurrvS_AKF9RGpoLq7DIqVoTgGHTk',
        authDomain: 'tic-tac-to-c8f08.firebaseapp.com',
        databaseURL: 'https//tic-tac-to-c8f08.firebaseio.com',
        storageBucket: 'tic-tac-to-c8f08.appspot.com'
    };

    firebase.initializeApp(config);
    const rootRef = firebase.database().ref().child('angular');
    const ref = rootRef.child('object');
    $scope.object = $firebaseObject(ref);
}

module.exports = HomeController;