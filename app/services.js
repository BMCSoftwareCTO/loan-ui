'use strict';

angular.module('myApp')
    .service('loanService', function ($q, Restangular) {

        /**
         * Posts the given object to api. This is a generic method
         * @param newObject the new object to create at the backend
         * @param category the type of object
         * @returns {*} newly created objects
         */
        var registerNewObject = function (newObject, category) {
            if (newObject && category) {
                var restObjects = Restangular.all(category);
                return restObjects.post(newObject.toJson());
            }
        };

        this.registerAccount = function (account) {
            return registerNewObject(account, 'accounts');
        };
        
        this.searchAccount = function(name) {
            if (name) {
                var account = Restangular.one('accounts', name).get();
                return account;
            }
        };
    });