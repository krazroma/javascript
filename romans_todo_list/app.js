//Define an angular module for our app
var app = angular.module('shopApp', []);

app.controller('shopController', function($scope, $http) {

  getItem(); // Load all available items
  function getItem(){
  $http.post("getItem.php").success(function(data){
        $scope.items = data;
       });
  };

  $scope.addItem = function (item) {
    $http.post("addItem.php?item="+item).success(function(data){
        getItem();
        $scope.itemInput = "";
      });
  };

//////////////////////////////////////////////////////////////////////
  // $scope.EditedItem = function(item) {
  //     $http.post("EditedItem.php?itemID="+item).success(function(data){
  //       getItem();
  //       $scope.itemInput = "";
  //     });
  // };

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


  // $scope.getTemplate = function (item) {
  //         if (item.id === $scope.model.selected.id) return 'edit';
  //         else return 'display';
  //     };
  //
  //     $scope.editContact = function (item) {
  //         $scope.model.selected = angular.copy(item);
  //     };
  //
  //     $scope.saveContact = function (idx) {
  //         console.log("Saving contact");
  //         $scope.model.contacts[idx] = angular.copy($scope.model.selected);
  //         $scope.reset();
  //     };
  //
  //     $scope.reset = function () {
  //         $scope.model.selected = {};
  //     };

      $scope.model = {
          contacts: [{
              id: 1,
              name: "Ben"
          }],
          selected: {}
      };

      // gets the template to ng-include for a table row / item
      $scope.getTemplate = function (contact) {
          if (contact.id === $scope.model.selected.id) return 'edit';
          else return 'display';
      };

      $scope.editContact = function (contact) {
          $scope.model.selected = angular.copy(contact);
      };

      $scope.saveContact = function (idx) {
          console.log("Saving contact");
          $scope.model.contacts[idx] = angular.copy($scope.model.selected);
          $scope.reset();
      };

      $scope.reset = function () {
          $scope.model.selected = {};
      };



//////////////////////////////////////////////////////////////////////


  $scope.deleteItem = function (item) {
    if(confirm("Are you sure to delete this item?")){
    $http.post("deleteItem.php?itemID="+item).success(function(data){
        getItem();
      });
    }
  };

  $scope.clearItem = function () {
    if(confirm("Delete all checked items?")){
    $http.post("clearItem.php").success(function(data){
        getItem();
      });
    }
  };

  $scope.changeStatus = function(item, status, task) {
    if(status=='2'){status='0';}else{status='2';}
      $http.post("Item.php?itemID="+item+"&status="+status).success(function(data){
        getItem();
      });
  };

});
