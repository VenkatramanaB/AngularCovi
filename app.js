(function(){

  angular.module('productApp', [
    'ngRoute',
    'ui.bootstrap'
  ]).config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/products', {
          templateUrl: 'app/partials/product-list.html',
          controller: 'ProductListCtrl'
        }).
        when('/product/:productId', {
          templateUrl: 'app/partials/product-detail.html',
          controller: 'ProductDetailCtrl'
        }).
        otherwise({
          redirectTo: '/products'
        });
  }]);


})();