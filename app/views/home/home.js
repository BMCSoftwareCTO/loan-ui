'use strict';

angular.module('myApp.home', ['ui.router', 'myApp.loanApp'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            url: "/home",
            views: {
                'mainView': {
                    templateUrl: "views/home/home.html",
                    controller: 'HomeCtrl'                    
                }
            }
        });
    }])
    .controller('HomeCtrl', ['$scope', '$interval', 'Restangular', 'constants', 'loanService', 'rateService',
        function ($scope, $interval, Restangular, constants, loanService, rateService) {
        
        $scope.formData = {
                'name': '',
                'account': new Account('', ''),
                'rates':[]
            };
        $scope.searchAccount = function(name) {
            $scope.formData.account = null;
            $scope.formData.rates = [];
            loanService.searchAccount(name).then(function(account) {
                $scope.formData.account = account;
            }, function(response) {
                if (response.status === 404) {
                    alert("Account does not exists");
                } else {
                    alert("There was an error retrieving accounts");
                }
            });
            
        }
        
        $scope.searchRates = function() {
            console.log("bf formData");
            console.log($scope.formData)
            $scope.formData.rates = rateService.searchRates();
            
            rateService.searchRates().then(function(rates) {
                $scope.formData.rates = rates;
            }, function(response) {
                alert("There was an error retrieving rates");
            });
        }

    }]);