'use strict';

angular.module('DropdownCtrl', ['ngAnimate', 'ui.bootstrap'])
    .controller('DropdownCtrl', function ($scope, $http) {
    $http.get('cardbacks.json').success(function (data) {
        $scope.cardbackData = data;
    });

    var cardbackChoice = 0;
});

angular.module('CardCtrl', [])
    .controller('CardCtrl', function ($scope, $http) {

    /*
    $scope.cardData = [];
    cardFactory.getCards().success(function (data) {
        $scope.cardData = data;
    });
    */

     $http.get('cards.json').success(function (data) {
         $scope.cardData = data;
     });

    $scope.shuffleCards = function () {
        shuffle($scope.cardData);
    };

    function shuffle(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
    }

});

angular.module('CardFactory', [])
    .factory('CardFactory', function ($http) {
    return {
        getCards: function () {
            return $http({
                url: 'cards.json',
                method: 'GET'
            })
        }
    }
});

angular.module('ButtonCtrl', [])
    .controller('ButtonCtrl', function ($scope) {
    $scope.radioModel = 'Left';

    $scope.checkModel = {
        left: true,
        middle: false,
        right: false
    };

    $scope.checkResults = [];

    $scope.$watchCollection('checkModel', function () {
        $scope.checkResults = [];
        angular.forEach($scope.checkModel, function (value, key) {
            if (value) {
                $scope.checkResults.push(key);
            }
        });
    });
});

