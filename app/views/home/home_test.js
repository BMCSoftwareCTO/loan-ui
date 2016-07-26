'use strict';

describe('myApp.home module', function() {

  describe('home controller', function() {

    beforeEach(
      module(
        function($provide) {
          $provide.service('Restangular',
            function() {
              this.all = jasmine.createSpy('all').and.callFake(
                function() {
                  return {
                    getList: function() {
                      return {
                        then: function() {}
                      };
                    }
                  };
                });
            }
          );
        }
      )
    );

    beforeEach(module('myApp.home'));

    it('should ....', inject(["$rootScope", "$controller", "$interval", "Restangular", function($rootScope, $controller, $interval, Restangular) {
      var scope = $rootScope.$new();
      expect($controller).not.toEqual(null);
            var loginCtrl = $controller('HomeCtrl', {
                $scope: scope,
                $interval: $interval,
                Restangular: Restangular,
                constants: {}
            });
    }]));
  });
});
