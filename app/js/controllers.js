'use strict';

angular.module('dropdownCtrl', ['ngAnimate', 'ui.bootstrap'])
    .controller('DropdownCtrl', function ($scope, $http) {
        $http.get('cardbacks.json').success(function (data) {
            $scope.cardbackData = data;
        });
    });


angular.module('cardpackCtrl')
    .controller('CardpackCtrl', function ($scope) {

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


angular.module('cardCtrl', [])
    .controller('CardCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $scope.method = 'GET';
            $scope.url = 'cards.json';

            $scope.load = function () {
                $scope.code = null;
                $scope.response = null;

                $http({method: $scope.method, url: $scope.url}).then(function (response) {
                    // Navigate JSON within the successful promise object
                    console.log("Read file", $scope.url, "successfully.");
                    $scope.data = response.data;

                    $scope.cards = [];
                    $scope.packType = "TheGrandTournament";



                    for (var i = 0; i < $scope.data[$scope.packType].length; i++) {
                        $scope.cards.push($scope.data[$scope.packType][i]);
                    }
                    shuffle($scope.cards);
                    console.log($scope.cards);

                    function shuffle(sourceArray) {
                        for (var i = 0; i < sourceArray.length - 1; i++) {
                            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

                            var temp = sourceArray[j];
                            sourceArray[j] = sourceArray[i];
                            sourceArray[i] = temp;
                        }
                        return sourceArray;
                    }

                }, function (response) {
                    $scope.data = response.data || "Request failed";
                    console.log("Error reading", $scope.url, ".");
                });
            };
        }
    ]);


angular.module('buttonCtrl', [])
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

