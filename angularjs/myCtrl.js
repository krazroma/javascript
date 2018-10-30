app.controller("myCtrl", function ($scope, $http)
{
  $scope.firstName = "Roman";
  $scope.lastName = "Nekrasov";


  $http.get("json_sample.html")
    .then(function (response)
    {
        $scope.myData = response.data.records;
    });
});
