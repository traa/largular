define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'app.controllers', [] );
	angular.module( 'app.directives', [] );

	return angular.module('app', [
		'ngRoute',
		'app.controllers',
		'app.directives',
		'common',
		'mymodule'
	])
	.config(['$routeProvider', '$locationProvider', function AppModuleConfig($routeProvider, $locationProvider) {
 			$locationProvider.html5Mode( true );	
	}]);

});