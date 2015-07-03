var roomMenuController = angular.module('roomMenuController', []);

roomMenuController.controller('roomMenuCtrl', ['$scope', 'Room', '$http', function($scope, Room, $http) {
        $scope.rooms = Room.query();

        $scope.addRoom = function() {

            $http.post('/rooms', {name: $scope.newRoomName || null}).success(function(success) {
                $scope.rooms.push({
                    id: success,
                    name: $scope.newRoomName
                });

                $scope.newRoomName = '';
            }).error(function(error) {
                console.log(error);
            });
        };

        $scope.removeRoom = function(room) {
            var index = $scope.rooms.indexOf(room);

            if(index > -1) {
                var id = $scope.rooms[index].id;

                $http.delete('/rooms/' + id, {}).success(function() {
                    $scope.rooms.splice(index, 1);
                }).error(function(error) {
                    console.log(error);
                });
            }
        };
    }]);