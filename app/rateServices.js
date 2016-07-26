'use strict';

angular.module('myApp')
    .service('rateService', function ($q, RateRestAngular) {

        /**
         * Posts the given object to api. This is a generic method
         * @param newObject the new object to create at the backend
         * @param category the type of object
         * @returns {*} newly created objects
         */
        var registerNewObject = function (newObject, category) {
            if (newObject && category) {
                var restObjects = RateRestAngular.all(category);
                return restObjects.post(newObject.toJson());
            }
        };

        this.registerRate = function (rate) {
            return registerNewObject(rate, 'rates');
        };
        
        this.searchRates = function() {
            return RateRestAngular.all('rates').getList().$object;
        };
    });