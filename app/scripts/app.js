'use strict';

angular.module('briefhackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .state('signIn', {
        url: '/signin',
        templateUrl: 'partials/signin',
        controller: 'SigninCtrl'
      })
      .state('client', {
        url: '/client',
        templateUrl: 'partials/client',
        controller: 'ClientCtrl'
      })
      .state('desktop', {
        url: '/desktop',
        templateUrl: 'partials/desktop',
        controller: 'DesktopCtrl',
        resolve: {tabs: function(Bucket){
          return Bucket.queryAll();
        }}
      })

      .state('categories', {
        url: '/categories/',
        templateUrl: 'partials/categories',
        controller: 'CategoriesCtrl'
      })
      .state('tabs', {
        parent: 'desktop',
        url: '/bucket/:id',
        templateUrl: 'partials/graph',
        controller: 'DesktopCtrl'
      })
      .state('bucket', {
        url: '/bucket/:id',
        templateUrl: 'partials/bucket',
        controller: 'BucketCtrl'
      })
      .state('graph', {
        url: '/graph',
        templateUrl: 'partials/graph',
        controller: 'GraphCtrl'
      });

    $locationProvider.html5Mode(true);
  });