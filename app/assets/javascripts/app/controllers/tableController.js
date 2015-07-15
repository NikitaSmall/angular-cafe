var tableController = angular.module('tableController', []);

tableController.controller('setTableCtrl', ['$scope', 'Table', 'Room', '$routeParams',
    function($scope, Table, Room, $routeParams) {
        $scope.room = Room.room({id: $routeParams.id});
        $scope.points = Table.tables({id: $routeParams.id});

        $scope.selectedPoint = null;

        $scope.removePoint = function(point) {
            var index = $scope.points.indexOf(point);

            if (index > -1) {
                Table.destroyTable({id: point.id}, function() {
                    $scope.points.splice(index, 1);
                    $scope.selectedPoint = null;
                }, function(error) {
                    console.log(error);
                });

            }
        };

        $scope.addPoint = function(event) {

            var mouseX;
            var mouseY;

            if ( event.offsetX == null ) { // Firefox
                mouseX = event.originalEvent.layerX;
                mouseY = event.originalEvent.layerY;
            } else {                       // Other browsers
                mouseX = event.offsetX;
                mouseY = event.offsetY;
            }

            mouseX = (mouseX / $scope.setCanvasWidth) * 100;
            mouseY = (mouseY / 600) * 100;

            Table.addTable({
                x: mouseX,
                y: mouseY,
                name: '',
                description: '',
                room: $routeParams.id
            }, function(table) {
                $scope.points.push({
                    x: table.x,
                    y: table.y,
                    name: '',
                    id: table.id,
                    room: $routeParams.id
                });
            }, function(error) {
                console.log(error);
            });

        };

        $scope.selectPoint = function (point) {
            $scope.selectedPoint = point;
        };

        $scope.changeSelectedPoint = function(selectedPoint) {
            Table.updateTable({
                id: selectedPoint.id,
                name: selectedPoint.name,
                inscription: selectedPoint.inscription,
                description: selectedPoint.description
            });
        };

        $scope.changeRoomName = function() {
            /* Table.sendTables({
                 room: $routeParams.id,
                 tables: $scope.points || []
             }); */

            if($scope.room.name.length > 0) {
                Room.updateRoom({room: $scope.room});
            }
        };
    }]);