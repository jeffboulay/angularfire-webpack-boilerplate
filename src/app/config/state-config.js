'use strict';

/* @ngInject */
var StateConfig = function ($locationProvider, $urlRouterProvider) {

    // Html5 mode requires server-side configuration. See http://bit.ly/1qLuJ0v
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!');

    // For any unmatched url, redirect to /
    // see https://github.com/angular-ui/ui-router/issues/1403
    $urlRouterProvider.otherwise(function($injector) {
        $injector.get('$state').go('home');
        return true;
    });
};
module.exports = StateConfig;
