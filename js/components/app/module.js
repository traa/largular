define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'app.controllers', [] );
	angular.module( 'app.directives', [] );

	var module = angular.module('app', [
		'ngRoute',
		'app.controllers',
		'app.directives',
		'common',
		'mymodule'
	]);


	module.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 			$locationProvider.html5Mode( true );	
	}]);


	return module;
});