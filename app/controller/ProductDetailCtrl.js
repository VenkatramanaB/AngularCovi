(function(){
	angular.module('productApp').controller('ProductDetailCtrl', ['$scope', '$routeParams', '$http',
		function($scope, $routeParams, $http) {
			$http.get('data/' + $routeParams.productId + '.json').success(function(data) {
				$scope.product = data;
			}); 
		}]);
})();

