define( [ 'angular', '../module' ], function( angular ) {
  'use strict';

  angular
    .module( 'mymodule.directives' )
    .directive( 'just', ['Template', function(Template) {

        return {
            restrict: 'E',
            link: function ($scope, element, attrs) {

            },
            // templateUrl: Template.view( 'app', 'user' )
            templateUrl: Template.view('mymodule', 'justtpl' )
        };
    }]);

});