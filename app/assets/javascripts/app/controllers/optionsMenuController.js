var optionMenuController = angular.module('optionsMenuController', []);

optionMenuController.controller('optionsMenuCtrl', ['$scope', 'Option',
    function($scope, Option) {
        $scope.money = Option.get({name: 'money'});

        $scope.changeOptions = function() {
            Option.setOptions({name: 'money', value: $scope.money.value});
        };
    }]);