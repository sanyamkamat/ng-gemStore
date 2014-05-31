/**
 * Created by Sam on 5/31/2014.
 */
(function () {
  var app = angular.module('gemStore', []);

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto consectetur deserunt dignissimos, dolore, esse hic ipsum laborum molestiae mollitia nulla numquam obcaecati optio perspiciatis quibusdam soluta? Dicta, mollitia!',
      canPurchase: true,
      img: "gem-01.gif"
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto consectetur deserunt dignissimos, dolore, esse hic ipsum laborum molestiae mollitia nulla numquam obcaecati optio perspiciatis quibusdam soluta? Dicta, mollitia!',
      canPurchase: false,
      img: "gem-02.gif"
    },
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto consectetur deserunt dignissimos, dolore, esse hic ipsum laborum molestiae mollitia nulla numquam obcaecati optio perspiciatis quibusdam soluta? Dicta, mollitia!',
      canPurchase: true,
      img: "gem-03.gif"
    }
  ]

  app.controller("StoreController", function () {
    this.products = gems;
  })

})();