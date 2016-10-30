(
  function(){
    angular.module('Lunch',[])
    .controller('LunchController',lunchController);
    lunchController.$inject = ['$scope'];
    function lunchController ($scope){
      $scope.lunch = '';
      $scope.message = '';
      $scope.check = function(){
        var myLunch = $scope.lunch;
        myLunch = myLunch.split(',');
        console.log(myLunch);
        console.log(myLunch.length);
      if($scope.lunch != ''){
        myLunch.length <= 3?($scope.message='Enjoy'):($scope.message='Too much');
      }
      else {
        $scope.message='Please enter data first';
      }
      }

    }

  }
)();
