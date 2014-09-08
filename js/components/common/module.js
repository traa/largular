define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'common.providers', [] );

	var module = angular.module('common', [
		'common.providers'
	]);


	module.config(['$routeProvider', '$locationProvider', 'TemplateProvider', function($routeProvider, $locationProvider, TemplateProvider) {
 			   $routeProvider
			      .when( '/404', {
			        templateUrl: TemplateProvider.view( 'common', '404' ),
			        // controller: 'NotFoundController',
			        public: true
			    });
	}]);



	return module;
});