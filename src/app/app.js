'use strict';
require('./app.scss');
// require('./mock');  // generates mock data
//@require "./**/*.html"


module.exports = angular.module('boilerplate-app', [
    'ui.router',
    'firebase',
    require('./firebase/index').name,
    require('./config/index').name,
    require('./home/index').name
]);