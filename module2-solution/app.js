(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyList.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  }

  toBuyList.isEmpty = function() {
    return toBuyList.items.length === 0;
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getItemsAlreadyBought();

  alreadyBoughtList.isEmpty = function() {
    return alreadyBoughtList.items.length === 0;
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
    {
      name: "Cookies",
      quantity: 10
    },
    {
      name: "Sugar Drinks",
      quantity: 8
    },
    {
      name: "Chocolate",
      quantity: 3
    },
    {
      name: "Donuts",
      quantity: 6
    },
    {
      name: "Milk",
      quantity: 2
    },
  ];

  var itemsAlreadyBought = [];

  service.boughtItem = function (itemIndex) {
    var item = itemsToBuy[itemIndex];
    itemsAlreadyBought.push(item);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };
}

})();
