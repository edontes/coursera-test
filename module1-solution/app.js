(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.empty = "Please enter data first";
  $scope.tooMuch = "Too much!";
  $scope.enjoy = "Enjoy!";
  $scope.list = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function () {
    var arrayOfItems = $scope.list.split(',');
    var itemCount = 0;

    for(var i= 0; i < arrayOfItems.length; i++)
    {
         if (arrayOfItems[i].length != 0) {
           itemCount++;
         }
    }

    if (itemCount == 0) {
        $scope.message = $scope.empty;
    } else if (itemCount <= 3) {
      $scope.message = $scope.enjoy;
    } else if (itemCount > 3) {
      $scope.message = $scope.tooMuch;
    }
  };
}

})();
