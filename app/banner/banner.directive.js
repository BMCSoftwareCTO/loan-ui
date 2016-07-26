(function () {
    'use strict';

	angular.module("myApp.banner.directive", [])
		.directive("topBanner",  ['$rootScope','bannerService', '$state',
			function($rootScope, bannerService, $state){
			return {
				restrict: "E",
				replace: true,
				transclude: true,
				templateUrl: "banner/topBanner.html",
				controller: ['$scope', '$state',
                    function ($scope, $state) {

				    }
                ]
			}
		}]);

}());