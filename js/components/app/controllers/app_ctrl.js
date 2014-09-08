define( [ 'angular', 'app' ], function( angular ) {
  'use strict';


  angular
  .module( 'app.controllers' )
  .controller( 'AppCtrl', ['$scope', function AppCtrl($scope) {
     

      $scope.currentUser  = 'HelloUser!';


    }]
  );

});