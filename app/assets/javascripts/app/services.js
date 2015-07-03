var TableServices = angular.module('TableServices', ['ngResource']);

TableServices.factory('Table', ['$resource',
    function($resource) {
        return $resource('/tables/:id.json', {}, {
            query: {method: 'GET', params: {id: 'tables'}, isArray: true},
            tables: {method: 'GET', isArray: true}
        });
    }]);

TableServices.factory('Room', ['$resource',
    function($resource) {
        return $resource('/rooms/:id.json', {}, {
            query: {method: 'GET', params: {id: 'rooms'}, isArray: true},
            room: {method: 'GET', isArray: false}
        });
    }]);