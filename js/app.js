/**
 * Created by Sam on 5/31/2014.
 */
(function () {

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto consectetur deserunt dignissimos, dolore, esse hic ipsum laborum molestiae mollitia nulla numquam obcaecati optio perspiciatis quibusdam soluta? Dicta, mollitia!',
      canPurchase: true,
      img: "gem-01.gif",
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto consectetur deserunt dignissimos, dolore, esse hic ipsum laborum molestiae mollitia nulla numquam obcaecati optio perspiciatis quibusdam soluta? Dicta, mollitia!',
      canPurchase: false,
      img: "gem-02.gif",
      reviews: [
        {
          stars: 4,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 2,
          body: "This product sucks",
          author: "tim@hater.com"
        }
      ]
    },
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto consectetur deserunt dignissimos, dolore, esse hic ipsum laborum molestiae mollitia nulla numquam obcaecati optio perspiciatis quibusdam soluta? Dicta, mollitia!',
      canPurchase: true,
      img: "gem-03.gif",
      reviews: [
        {
          stars: 3,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        }
      ]
    }
  ]

  var app = angular.module('gemStore', ['store-products']);

  app.controller("StoreController", function () {
    this.products = gems;
  });

  /* Moving this controller inside the productPanels directive */ /*
  app.controller('PanelController', function () {
    this.tab = 1;
    this.selectTab = function (setTab) {
      this.tab = setTab;
    };
    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    }
  });*/

  app.controller('ReviewController',function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    }
  });

})();