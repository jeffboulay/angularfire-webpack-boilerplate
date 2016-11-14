'use strict';

/* @ngInject */
function HomeController($scope, firebaseFactory, $firebaseObject) {
    const rootRef = firebaseFactory.database().ref().child('angular');
    const ref = rootRef.child('object');
    $scope.object = $firebaseObject(ref);
}

module.exports = HomeController;