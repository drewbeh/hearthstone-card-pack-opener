'use strict';

// Card rarity function

angular.module('myAppFilter', []).filter('rarityFilter', function() {

    return rarity();

    function rarity() {
        var num = 0;
        var card;
        for (var i = 0; i < 5; i++) {
            num = getRandomNum(0, 10000);

            if (num > 1 && num < 7036) {
                card = "Common";
            }
            else if (num > 7037 && num < 9196) {
                card = "Rare";
            }
            else if (num > 9197 && num < 9604) {
                card = "Epic";
            }
            else if (num > 9605 && num < 9752) {
                card = "Legendary";
            }
            else if (num > 9753 && num < 9879) {
                card = "Golden Common";
            }
            else if (num > 9880 && num < 9973) {
                card = "Golden Rare";
            }
            else if (num > 9974 && num < 9992) {
                card = "Golden Epic";
            }
            else if (num > 9993 && num < 10000) {
                card = "Golden Legendary";
            }
            else (console.log("Randomizer failure."));

            console.log(num.toFixed(0), card);
        }
    }

    function getRandomNum(min, max) {
        return Math.random() * (max - min) + min;
    }
});

// Filter for rarity not being applied to JSON object search for rarity to then be utilized for card choice


angular.module('myAppFilter', []).filter('set', function() {
    var set = ["Basic", "Naxxramas", "Goblins vs Gnomes", "Blackrock Mountain", "The Grand Tournament", "The League of Explorers" ];
    return set[Math.floor(Math.random() * set.length)];
});
// Filter for set not returning string as expected

