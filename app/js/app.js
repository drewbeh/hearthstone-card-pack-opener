'use strict';

var myApp = angular.module('myApp', [
    'ngRoute',
    'CardCtrl', 'DropdownCtrl', 'ButtonCtrl', 'CardFactory',
    'myAppService',
    'myAppFilter'
]);

/*
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/view1', {
                templateUrl: 'partials/view1.html',
                controller: 'myAppController'
            }).
            when('/view2', {
                templateUrl: 'partials/view2.html',
                controller: 'myAppController'
            }).
            otherwise({
                redirectTo: '/view1'
            });
    }]);
*/
