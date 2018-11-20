var app = angular.module("app", []);



app.controller('Ctrl', function($scope, $filter, $http) {
 $scope.users = [
    {id: 1, name: 'awesome user1'}
  ];


  $scope.saveUser = function(data, id) {
    //$scope.user not updated yet
    angular.extend(data, {id: id});
    return $http.post('/saveUser', data);
  };

  // add user
  $scope.addUser = function() {
    $scope.inserted = {
      id: $scope.users.length+1,
      name: ''
    };
    $scope.users.push($scope.inserted);
  };
});

// --------------- mock $http requests ----------------------
app.run(function($httpBackend) {
  $httpBackend.whenGET('/groups').respond([
    {id: 1, text: 'user'}
  ]);

  $httpBackend.whenPOST(/\/saveUser/).respond(function(method, url, data) {
    data = angular.fromJson(data);
    return [200, {status: 'ok'}];
  });
});
