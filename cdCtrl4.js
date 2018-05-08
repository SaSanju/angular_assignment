angular.module('cdApp', []).controller('CDController', function($scope) {

$scope.cdDetails = { 
	CDId: '',
	CDTitle: '',
	CDPrice : ''
}

 function getAllDetails() {
   return $scope.cdDetails;
 }

});