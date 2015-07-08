var orderController = angular.module('orderController', []);

orderController.controller('orderCtrl', ['$scope', '$routeParams', 'Order', 'Category', 'Option', 'LineItem',
    function($scope, $routeParams, Order, Category, Option, LineItem) {
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

        $scope.addLineItem = function(product) {
            var index = false;

            for(var i in $scope.order.line_items) {
                if($scope.order.line_items[i].product_id == product.id) {
                    index = i;
                    break;
                }
            }

            if (index) {
                LineItem.increaseCount({
                    order_id: $scope.order.id,
                    product_id: product.id
                }, function(order) {
                    $scope.order.line_items[index].count += 1;
                    $scope.order.price = order.price;
                });

            } else {
                LineItem.addLineItem({
                    product_id: product.id,
                    order_id: $scope.order.id,
                    price: product.price,
                    count: 1
                }, function(order) {
                    $scope.order.line_items.push({
                        product_id: product.id,
                        order_id: $scope.order.id,
                        name: product.name,
                        price: product.price,
                        count: 1
                    });

                    $scope.order.price = order.price;
                }, function(error) {
                    console.log(error);
                });

            }
        }
    }]);