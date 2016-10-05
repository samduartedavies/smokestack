'use strict';

angular.module('museumApp', ['ui.bootstrap'])
/**
 * @ngdoc overview
 * @name museumApp
 * @description
 * # museumApp
 *
 * Main module of the application.
 */
angular
  .module('museumApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ]) 
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html'
		})
      .when('/articles', {
        templateUrl: 'views/articles.html',
      })		  
      .when('/contact', {
        templateUrl: 'views/contact.html',
      })	
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/clients', {
        templateUrl: 'views/clients.html'
      })      
	  .when('/films', {
        templateUrl: 'views/films.html'
      })	  
      .when('/', {
        templateUrl: 'views/home.html'
      })	  
      .otherwise({
        redirectTo: '/'
      });
  });
