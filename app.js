import angular from 'angular';
import testService  from './test.service.js';
import testCtrl  from './test.controller.js';

angular.module('angularBabel', [])
.service('TestService', testService)
.controller('TestCtrl', testCtrl);

