define( [ 'angular', 'app' ], function( angular ) {
  'use strict';


  angular
  .module( 'app.controllers' )
  .controller( 'AppCtrl', ['$scope', function($scope) {
     

      $scope.currentUser  = 'HelloUser!';


    }]
  );

});