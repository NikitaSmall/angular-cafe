var TableServices = angular.module('TableServices', ['ngResource']);

TableServices.factory('Table', ['$resource',
    function($resource) {
        return $resource('/tables.json', {}, {
            query: {method: 'GET', params: {}, isArray: true}
        });
    }]);