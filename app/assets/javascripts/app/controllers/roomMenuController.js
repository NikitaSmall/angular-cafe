var roomMenuController = angular.module('roomMenuController', []);

roomMenuController.controller('roomMenuCtrl', ['$scope', 'Room', function($scope, Room) {
        $scope.rooms = Room.query();

        $scope.addRoom = function() {

            Room.addRoom({name: $scope.newRoomName || null},
                function(success) {
                    $scope.rooms.push({
                        id: success,
                        name: $scope.newRoomName
                    });
                    $scope.newRoomName = '';
                },
                function(error) {
                    console.log(error);
                });
            };

        $scope.removeRoom = function(room) {
            var index = $scope.rooms.indexOf(room);

            if(index > -1) {
                var id = $scope.rooms[index].id;

                Room.deleteRoom({id: id},
                    function() {
                        $scope.rooms.splice(index, 1);
                    },
                    function(error) {
                        console.log(error);
                    });
                }
            };

    }]);