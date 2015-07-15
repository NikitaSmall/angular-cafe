var showTableController = angular.module('showTableController', []);

showTableController.controller('showTableCtrl', ['$scope', 'Table', 'Room', '$routeParams',
    function($scope, Table, Room, $routeParams) {
        $scope.room = Room.room({id: $routeParams.id});
        $scope.points = Table.tables({id: $routeParams.id});

        $scope.selectedPoint = null;

        $scope.selectPoint = function (point) {
            $scope.selectedPoint = point;
        };

        $scope.removeFocusFromPoint = function() {
            $scope.selectedPoint = null;
        }
    }]);