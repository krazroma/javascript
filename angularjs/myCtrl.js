app.controller("myCtrl", function ($scope, $http)
{
  $scope.firstName = "Roman";
  $scope.lastName = "Nekrasov";


  $http.get("getUsers.php")
    .then(function (response)
    {
        $scope.myData = response.data.records;
    });
});
