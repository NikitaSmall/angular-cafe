var TableServices = angular.module('TableServices', ['ngResource']);

TableServices.factory('Table', ['$resource',
    function($resource) {
        return $resource('/tables/:id.json', {}, {
            query: {method: 'GET', params: {id: 'tables'}, isArray: true},
            tables: {method: 'GET', isArray: true},
            addTable: {method: 'POST', url: '/tables_single'},
            destroyTable: {method: 'DELETE', url: '/tables'},
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
           addProduct: {method: 'POST', url: '/products'},
           deleteProduct: {method: 'DELETE', url: '/products'}
        });
    }]);

TableServices.factory('Option', ['$resource',
    function ($resource) {
        return $resource('/options/:name.json', {}, {
           query: {method: 'GET', params: {name: '1'}},
           getOptions: {method: 'GET', url: '/options.json'},
           setOptions: {method: 'POST', url: '/options'}
        });
    }]);

TableServices.factory('Order', ['$resource',
    function ($resource) {
        return $resource('/orders/:id.json', {}, {
            query: {method: 'GET', params: {id: 'orders'}, isArray: true},
            addOrder: {method: 'POST', url: '/orders'},
            changeOrder: {method: 'PUT', url: '/orders'},
            deleteOrder: {method: 'DELETE', url: '/orders'}
        });
    }]);

TableServices.factory('LineItem', ['$resource',
    function($resource) {
        return $resource('/line_items', {}, {
            addLineItem: {method: 'POST'},
            increaseCount: {method: 'PUT', url: '/line_items/up'},
            decreaseCount: {method: 'PUT', url: '/line_items/down'},
            deleteItem: {method: 'DELETE'}
        });
    }]);