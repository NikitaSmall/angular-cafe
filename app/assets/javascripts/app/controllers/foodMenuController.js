var foodMenuController = angular.module('foodMenuController', []);

foodMenuController.controller('foodMenuCtrl', ['$scope', 'Category',
    function($scope, Category) {
        $scope.categories = Category.query();

        $scope.addCategory = function (categoryName) {
            Category.addCategory({name: categoryName}, function(success) {
                $scope.categories.push({
                    id: success.success,
                    name: categoryName,
                    products: []
                });
                $scope.categoryName = '';
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
            category.products.push({
               name: category.foodName,
               price: category.foodPrice
            });
            category.foodName = '';
            category.foodPrice = '';
        }
    }]);