angular.module('cdApp', []).controller('CDController', function($scope) {

$scope.cdDetails = { parlorName: 'Barista Shop', address: '2/N Elgin Road, Kolkata' }

$scope.cdArry = [
{ title: 'CD1',
  language: 'Eng',
  price: '$20'
},
{ title: 'CD2',
  language: 'Eng',
  price: '$100'
},
{ title: 'CD3',
  language: 'Ger',
  price: '$50'
}
];

});