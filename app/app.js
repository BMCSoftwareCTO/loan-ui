'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',    
    'restangular',
    'myApp.version',
    'myApp.banner',
    'myApp.home'
])
.config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");        
}])

.factory('RateRestAngular', function(Restangular, $window) {
    var rateApiPort = $window.LOAN_RATE_API_PORT ? $window.LOAN_RATE_API_PORT : 9062;
    var rateServiceUrl = "http://" + $window.location.hostname + ":" + rateApiPort + "/v1";
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl(rateServiceUrl);
    });
})

.run(function (Restangular, $window) {
    var apiPort = LOAN_ACCOUNT_API_PORT ? LOAN_ACCOUNT_API_PORT : 9061;
    var accountsUrl = "http://" + $window.location.hostname + ":" + apiPort + "/v1";

    Restangular.setBaseUrl(accountsUrl);
})

.constant('constants', {
});

