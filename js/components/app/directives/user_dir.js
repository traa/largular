define( [ 'angular', '../module' ], function( angular ) {
  'use strict';

  angular
    .module( 'app.directives' )
    .directive( 'user', ['Template', function UserDir(Template) {
      console.log(Template.view('app', 'user' ));
        return {
            restrict: 'E',
            link: function ($scope, element, attrs) {

            },
            // templateUrl: Template.view( 'app', 'user' )
            templateUrl: Template.view('user' )
        };
    }]);

});