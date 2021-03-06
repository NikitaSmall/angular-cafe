var TableDirectives = angular.module('TableDirectives', []);

TableDirectives.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event: event});
            });
        });
    };
});

TableDirectives.directive('specifyHeight', function() {
    return{
        scope: {
            specifyHeight: '='
        },
        link: function(scope, element) {
            scope.specifyHeight = element.height();
        }
    }
});

TableDirectives.directive('specifyWidth', function() {
    return{
        scope: {
            specifyWidth: '='
        },
        link: function(scope, element) {
            scope.specifyWidth = element.width();
        }
    }
});