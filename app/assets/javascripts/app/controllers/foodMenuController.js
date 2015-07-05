var foodMenuController = angular.module('foodMenuController', []);

foodMenuController.controller('foodMenuCtrl', ['$scope', 'Category', 'Product',
    function($scope, Category, Product) {
        $scope.categories = Category.query();

        $scope.addCategory = function (categoryName) {
            Category.addCategory({name: categoryName}, function(success) {
                if(success.success) {
                    $scope.categories.push({
                        id: success.success,
                        name: categoryName,
                        products: []
                    });
                    $scope.categoryName = '';
                }
            }, function(error) {
                console.log(error);
            });

        };

        $scope.removeCategory = function(category) {
            var index = $scope.categories.indexOf(category);

            if(index > -1) {
                var id = $scope.categories[index].id;

                Category.deleteCategory({id: category.id},
                    function() {
                        $scope.categories.splice(index, 1);
                    },
                    function(error) {
                        console.log(error);
                    });
            }
        };

        $scope.addProduct = function(category) {
            Product.addProduct({
                category_id: category.id,
                name: category.foodName,
                price: category.foodPrice
            }, function(success) {
                if(success.success) {
                    category.products.push({
                        id: success.success,
                        category_id: category.id,
                        name: category.foodName,
                        price: category.foodPrice
                    });
                    category.foodName = '';
                    category.foodPrice = 0;
                }
            }, function(error) {
                console.log(error);
            });

        };

        $scope.removeProduct = function(category, product) {
            var index = category.products.indexOf(product);

            if(index > -1) {
                var id = category.products[index].id;

                Product.deleteProduct({id: product.id},
                    function() {
                        category.products.splice(index, 1);
                    },
                    function(error) {
                        console.log(error);
                    });
            }
        };
    }]);