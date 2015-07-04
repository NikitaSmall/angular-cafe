var TableServices = angular.module('TableServices', ['ngResource']);

TableServices.factory('Table', ['$resource',
    function($resource) {
        return $resource('/tables/:id.json', {}, {
            query: {method: 'GET', params: {id: 'tables'}, isArray: true},
            tables: {method: 'GET', isArray: true},
            sendTables: {method: 'POST', url: '/tables'}
        });
    }]);

TableServices.factory('Room', ['$resource',
    function($resource) {
        return $resource('/rooms/:id.json', {}, {
            query: {method: 'GET', params: {id: 'rooms'}, isArray: true},
            room: {method: 'GET', isArray: false},
            updateRoom: {method: 'PUT', url: '/rooms'},
            addRoom: {method: 'POST', url: '/rooms'},
            deleteRoom: {method: 'DELETE', url: '/rooms'}
        });
    }]);

TableServices.factory('Category', ['$resource',
    function($resource) {
        return $resource('/categories/:id.json', {}, {
            query: {method: 'GET', params: {id: 'categories'}, isArray: true},
            addCategory: {method: 'POST', url: '/categories'},
            deleteCategory: {method: 'DELETE', url: '/categories'}
        });
    }]);

TableServices.factory('Product', ['$resource',
    function ($resource) {
        return $resource('/products/:id.json', {}, {
           addProduct: {method: 'POST', url: '/products'}
        });
    }]);