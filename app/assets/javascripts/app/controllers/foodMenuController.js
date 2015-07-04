var foodMenuController = angular.module('foodMenuController', []);

foodMenuController.controller('foodMenuCtrl', ['$scope',
    function($scope) {
        $scope.categories = [];

        $scope.addCategory = function (categoryName) {
            $scope.categories.push({
                name: categoryName,
                products: []
            });
            $scope.categoryName = '';
        };

        $scope.addProduct = function(category) {
            category.products.push({
               name: category.foodName,
               price: category.foodPrice
            });
            category.foodName = '';
            category.foodPrice = '';
        }
    }]);