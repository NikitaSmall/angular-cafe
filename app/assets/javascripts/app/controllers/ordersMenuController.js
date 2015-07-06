var ordersMenuController = angular.module('ordersMenuController', []);

ordersMenuController.controller('ordersMenuCtrl', ['$scope', 'Order',
    function($scope, Order) {
        $scope.orders = Order.query();

        $scope.addOrder = function() {

            Order.addOrder({},
                function(order) {
                    if (order) {
                        $scope.orders.push({
                            id: order.id,
                            created_at: order.created_at,
                            note: ''
                        });
                    }
                },
                function(error) {
                    console.log(error);
                });
        };

        $scope.removeOrder = function(order) {
            var index = $scope.orders.indexOf(order);

            if(index > -1) {
                var id = $scope.orders[index].id;

                Order.deleteOrder({id: order.id},
                    function() {
                        $scope.orders.splice(index, 1);
                    },
                    function(error) {
                        console.log(error);
                    });
            }
        };

        $scope.changeStatus = function(order) {
            var index = $scope.orders.indexOf(order);

            Order.changeOrder({id: order.id, status: order.status},
                function(order) {
                    $scope.orders[index].status = order.status;
                },
                function(error) {
                    console.log(error);
                });
        };
    }]);