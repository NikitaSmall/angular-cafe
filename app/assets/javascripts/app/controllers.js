var TableControllers = angular.module('TableControllers', []);

TableControllers.controller('setTableController', ['$scope',
    function($scope) {
        $scope.name = 'Никитка';
        $scope.points = [];

        $scope.removePoint = function(point) {
            var index = $scope.points.indexOf(point);

            if (index > -1) {
                $scope.points.splice(index, 1);
            }
        };

        $scope.addPoint = function(event) {

            if ( event.offsetX == null ) { // Firefox
                mouseX = event.originalEvent.layerX;
                mouseY = event.originalEvent.layerY;
            } else {                       // Other browsers
                mouseX = event.offsetX;
                mouseY = event.offsetY;
            }

            $scope.points.push({
               x: event.offsetX,
               y: event.offsetY,
               id: Math.random().toString(36).substring(7)
            });
        };
    }]);