'use strict';

/**
 * @ngdoc overview
 * @name novusApp
 * @description
 * # novusApp
 *
 * Main module of the application.
 */
angular
  .module('novusApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'angular-md5',
    'countrySelect',
    'ngFileUpload'
  ])

  .constant("requrl","http://mynovus.xyz/app")
  .constant("phpurl","http://mynovus.xyz")
  
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/calender', {
        templateUrl: 'views/calender.html',
        controller: 'calender',
        controllerAs: 'calender'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/emailactivate', {
        templateUrl: 'views/emailactivate.html',
        controller: 'EmailactivateCtrl',
        controllerAs: 'emailactivate'
      })
      .when('/forgotpassword', {
        templateUrl: 'views/forgotpassword.html',
        controller: 'ForgotpasswordCtrl',
        controllerAs: 'forgotpassword'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/addcase', {
        templateUrl: 'views/addcase.html',
        controller: 'AddcaseCtrl',
        controllerAs: 'addcase'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix('');
  });

