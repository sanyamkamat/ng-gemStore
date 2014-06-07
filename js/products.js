/**
 * Created by Sam on 6/8/2014.
 */
(function(){
  var app = angular.module('store-products',[]);

  app.directive('productTitle',function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/product-title.html'
    };
  });

  app.directive('productTitles',function(){
    return {
      restrict: 'A',
      templateUrl: 'partials/product-title.html'
    };
  });

  app.directive('productPanels',function(){
    return {
      restrict: 'A',
      templateUrl: 'partials/product-panels.html',
      controller: function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
          this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
          return this.tab === checkTab;
        }
      },
      controllerAs: 'panel'
    }
  });

})();