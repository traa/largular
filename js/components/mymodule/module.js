define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'mymodule.directives', [] );

	return angular.module('mymodule', [
		'mymodule.directives'
	])
	.config(['$routeProvider', '$locationProvider', 'TemplateProvider', function MyModuleConfig($routeProvider, $locationProvider, TemplateProvider) {
		//some module config actions here
	}]);

});