define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'common.providers', [] );

	return angular.module('common', [
		'common.providers'
	])
	.config(['$routeProvider', '$locationProvider', 'TemplateProvider', function CommonModuleConfig($routeProvider, $locationProvider, TemplateProvider) {
 			   $routeProvider
			      .when( '/404', {
			        templateUrl: TemplateProvider.view( 'common', '404' ),
			        // controller: 'NotFoundController',
			        public: true
			    });
	}]);

});