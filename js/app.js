/**
 * Created by Sam on 5/31/2014.
 */
(function () {

  var app = angular.module('gemStore', ['store-products']);

  app.controller("StoreController", ['$http', function ($http) {
    var store = this;

    store.products = [];

    $http.get('products.json').success(function (data) {
      store.products = data;
    });

    /* Examples of other http requests */
    /*
     $http.post('path/to/resource.json',{"param":"value"});

     $http.delete('path/to/resource.json');

     $http({method: 'OPTIONS',url: 'path/to/resource.json'});

     $http({method: 'PATCH',url: 'path/to/resource.json'});

     $http({method: 'TRACE',url: 'path/to/resource.json'});

     */
  }]);

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