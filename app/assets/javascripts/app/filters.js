var tableFilters = angular.module('tableFilters', []);

tableFilters.filter('afterCurrency', function() {
    return function(number, currency) {
        var n = Number(number);
        currency = currency || '';
        if (n % 1 === 0) {
            number = number + '.00';
        }

        return number + ' ' + currency;
    }
});