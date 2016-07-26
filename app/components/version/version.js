'use strict';

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', LOAN_VERSION ? LOAN_VERSION : 0.1);
