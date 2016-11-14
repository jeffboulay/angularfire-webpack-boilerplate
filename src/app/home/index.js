'use strict';

require('./home.scss');

module.exports = angular.module('boilerplate-app.home',[])
    .controller('homeController', require('./home-controller'))
    .config(require('./home-states'));
