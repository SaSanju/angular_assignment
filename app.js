var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider) {
  
$routeProvider

  
.when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/new', {
    templateUrl : 'pages/new.html',
    controller  : 'NewController'
  })

  
.when('/all', {
    templateUrl : 'pages/all.html',
    controller  : 'AllController'
  })

  
.otherwise({redirectTo: '/'});
});



app.controller('HomeController', function($scope) {
  
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
},
{ title: 'CD4',
  language: 'Eng',
  price: '$100'
},
{ title: 'CD5',
  language: 'Ger',
  price: '$50'
}
];
});



app.controller('NewController', function($scope) {

  $scope.cdArry = [
{ title: 'CD4',
  language: 'Eng',
  price: '$100'
},
{ title: 'CD6',
  language: 'Ger',
  price: '$50'
},
{ title: 'CD8',
  language: 'Eng',
  price: '$100'
}
];
});



app.controller('AllController', function($scope) {
 
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
},
{ title: 'CD4',
  language: 'Eng',
  price: '$100'
},
{ title: 'CD5',
  language: 'Ger',
  price: '$50'
},
{ title: 'CD6',
  language: 'Eng',
  price: '$100'
},
{ title: 'CD7',
  language: 'Ger',
  price: '$50'
},
{ title: 'CD8',
  language: 'Eng',
  price: '$100'
},
{ title: 'CD9',
  language: 'Ger',
  price: '$50'
}
];
});
