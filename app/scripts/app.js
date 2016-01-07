'use strict';

/**
 * @ngdoc overview
 * @name sharcnet2016App
 * @description
 * # sharcnet2016App
 *
 * Main module of the application.
 */
angular.module('sharcnet2016App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]).config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/programme', {
                templateUrl: 'views/programme.html',
                controller: 'ProgrammeCtrl',
                controllerAs: 'programme'
            })
            .when('/organization', {
                templateUrl: 'views/organization.html',
                controller: 'OrganizationCtrl',
                controllerAs: 'organization'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register'
            })
            .otherwise({
                redirectTo: '/'
            });
});
