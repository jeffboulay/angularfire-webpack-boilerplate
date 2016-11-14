'use strict';
/* @ngInject */
var HomeStates = function ($stateProvider) {
    var states = [{
        url: '/',
        name: 'home',
        controller: 'homeController',
        template: require('./home.html'),
        data: {
            pageTitle: 'home'
        }
    }];

    states.forEach(function (state) {
        $stateProvider.state(state);
    });

};
module.exports = HomeStates;
