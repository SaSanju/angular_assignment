angular.module('tableApp', []).controller('tableController', function($scope) {

$scope.tableArry = [];
var a = 1;

$scope.addTable = function() {
   var exp = '5 X ' + a + '=' + 5*a
   var item = { number: exp };
   if(a == 11)
      return;
   
   $scope.tableArry.push(item);
   a++;	
}

});