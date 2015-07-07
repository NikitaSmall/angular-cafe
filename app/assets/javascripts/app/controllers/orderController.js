var orderController = angular.module('orderController', []);

orderController.controller('orderCtrl', ['$scope', '$routeParams', 'Order', 'Category', 'Option',
    function($scope, $routeParams, Order, Category, Option) {
        $scope.order = Order.get({id: $routeParams.id});
        $scope.categories = Category.query();
        $scope.money = Option.get({name: 'money'});

        $scope.changeOrder = function() {
            Order.changeOrder({id: $scope.order.id, status: $scope.order.status, note: $scope.order.note},
                function(order) {
                    $scope.order.status = order.status;
                    $scope.order.note = order.note;
                },
                function(error) {
                    console.log(error);
                });
        };
    }]);