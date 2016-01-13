angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
	
    $scope.addListing = function() {
		var newListing = {
			"code": $scope.newListingCode, 
            "name": $scope.newListingName, 
            "coordinates": {
                "latitude": $scope.newListingLat, 
                "longitude": $scope.newListingLong
            }, 
            "address": $scope.newListingAddress
		};
		$scope.listings.push(newListing);
		$scope.newListingCode = '';
		$scope.newListingName = '';
		$scope.newListingLat = '';
		$scope.newListingLong = '';
		$scope.newListingAddress = '';
	};
    $scope.deleteListing = function(listing) {
		$scope.listings.splice($scope.listings.indexOf(listing), 1);
	};
    $scope.showDetails = function(listing) {
		$scope.detailedInfo = $scope.listings[$scope.listings.indexOf(listing)];
	};
  }
]);