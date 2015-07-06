var optionMenuController = angular.module('optionsMenuController', []);

optionMenuController.controller('optionsMenuCtrl', ['$scope',
    function($scope) {
        $scope.money = 'грн.';
    }]);