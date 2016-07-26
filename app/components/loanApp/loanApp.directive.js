'use strict';

angular.module('myApp.loanApp.directive', [])

    .directive('loanApp', ['constants', function (constants) {

        return {
            restrict: 'E',
            scope: {
                name: '@',
                status: '@',        // Installing & Failed represent install status; Up & Down represent spinnaker status
                servicesStatus: '=' // map. status of individual services - Running or Down
            },
            templateUrl: 'components/spinnakerTile/spinnakerTile.directive.html',

            link: function (scope, elem, attr) {
                scope.getStatusString = function () {
                    if (scope.status == constants.STATUS_INSTALLING) {
                        return "Installing...";
                    } else if (scope.status == constants.STATUS_INSTALL_FAILED) {
                        return "Installation Failed";
                    } else {
                        return scope.status;
                    }
                };

                scope.getSpinnakerStatusClass = function () {
                    if (scope.status == constants.STATUS_UP) {
                        return 'alert-success';
                    } else if (scope.status == constants.STATUS_DOWN || scope.status == constants.STATUS_INSTALL_FAILED) {
                        return 'alert-danger';
                    } else {
                        return 'alert-warning';
                    }
                };

                scope.getServiceStatusClass = function (svcName) {
                    if (scope.servicesStatus && scope.servicesStatus[svcName] == constants.STATUS_RUNNING) {
                        return "label-success";
                    } else {
                        return "label-danger";
                    }
                };

                scope.getServiceStatusLabel = function (svcName) {
                    var label = "";
                    if (scope.servicesStatus && scope.servicesStatus[svcName] == constants.STATUS_RUNNING) {
                        label = '\u25B2';
                    } else if (scope.servicesStatus && scope.servicesStatus[svcName] == constants.STATUS_DOWN) {
                        label = '\u25BC';
                    }
                    return label;
                }
            }
        };

    }]);
