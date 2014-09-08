define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'mymodule.directives', [] );

	var module = angular.module('mymodule', [
		'mymodule.directives'
	]);


	module.config(['$routeProvider', '$locationProvider', 'TemplateProvider', function($routeProvider, $locationProvider, TemplateProvider) {
		//some module config actions here
	}]);



	return module;
});