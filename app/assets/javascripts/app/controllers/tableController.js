var tableController = angular.module('tableController', []);

tableController.controller('setTableCtrl', ['$scope', 'Table', '$http',
    function($scope, Table, $http) {
        $scope.name = 'Никитка';
        $scope.points = Table.query();

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

            mouseX = (mouseX / $scope.setCanvasWidth) * 100;
            mouseY = (mouseY / 600) * 100;

            $scope.points.push({
               x: mouseX,
               y: mouseY,
               name: '',
               id: Math.random().toString(36).substring(7)
            });
        };

        $scope.sendTables = function() {
            $http.post('/tables', {tables: $scope.points || []});
        };
    }]);