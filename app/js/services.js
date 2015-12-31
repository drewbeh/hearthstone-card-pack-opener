'use strict';

var appService = angular.module('myAppService', []);

appService.factory('myAppService', function($http) {

    var obj = { content:null };
    var path = '/../cardsTest.json';

    $http.get(path).success(function(data) {
        obj.content = data;
    });

    return obj;
});