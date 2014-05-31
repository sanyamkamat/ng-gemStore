/**
 * Created by Sam on 5/31/2014.
 */
(function () {
  var app = angular.module('gemStore', []);

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto consectetur deserunt dignissimos, dolore, esse hic ipsum laborum molestiae mollitia nulla numquam obcaecati optio perspiciatis quibusdam soluta? Dicta, mollitia!',
    canPurchase: true,
    soldOut: false
  }

  app.controller("StoreController", function () {
    this.product = gem;
  })

})();