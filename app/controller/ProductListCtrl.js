(function(){

	angular.module('productApp').controller('ProductListCtrl', ['$scope', '$http',
		function ($scope, $http) {
			$http.get('data/cart.json').success(function(data) {
				$scope.products = data.productsInCart;
				updateTotalPrice();
			});
			$scope.orderProp = 'age';
			$scope.totalPrice = 0;

			$scope.selectedProductLength = 0;

			function updateTotalPrice() {
				var totalPrice = 0;
				for(var i=0, length=$scope.products.length; i<length;i++) {
					totalPrice += $scope.products[i].p_quantity * $scope.products[i].p_originalprice;
				}
				$scope.totalPrice = totalPrice;
			}

			$scope.updatePrice = function(product) {
				product.p_price = product.p_quantity * product.p_originalprice;
				updateTotalPrice();
			};


			$scope.addProduct = function(product) {
				product.isSelected = true;
				$scope.selectedProductLength++;
			}

			$scope.removeFromSelected = function(product) {
				product.isSelected = false;
				product.p_quantity = 1;	
				$scope.selectedProductLength--;
			}

		}

		]);



})();
