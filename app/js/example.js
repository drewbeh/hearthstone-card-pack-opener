angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('DropdownCtrl', function ($scope, $log) {

     $scope.cardbackList = [
     {id: "1", name: "Season's Greetings", img: "img/logo1.png"},
     {id: "2", name: "Summer Festival", img: "img/logo2.png"},
     {id: "3", name: "Orgrimmar", img: "img/logo3.png"},
     {id: "4", name: "Stormwind", img: "img/logo4.png"},
     {id: "5", name: "Heroes of the Storm", img: "img/logo1.png"},
     {id: "6", name: "Legacy of the Void", img: "img/logo2.png"},
     {id: "7", name: "Diablo 3", img: "img/logo3.png"},
     {id: "8", name: "Fall Festival", img: "img/logo4.png"},
     {id: "9", name: "Nine", img: "img/logo1.png"},
     {id: "10", name: "Ten", img: "img/logo2.png"},
     {id: "11", name: "Eleven", img: "img/logo3.png"},
     {id: "12", name: "Twelve", img: "img/logo4.png"}
     ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function (open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
});