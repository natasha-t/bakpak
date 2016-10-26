angular.module('bakpak.trips', [])

.controller('tripsController', ['$scope', 'Trips', function($scope, Trips){

  $scope.city = '';
  $scope.tripTitle = '';

  $scope.saveTrip = function() {
    Trips.saveTrip($scope.city, $scope.tripTitle);
  }


}])