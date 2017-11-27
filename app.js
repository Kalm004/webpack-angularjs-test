/* @flow */
import angular from './node_modules/angular';
import TestController from './test.controller.js';
import { TestService } from "./test.service";

const app = angular.module('angularBabel', []);

// Controllers
app.controller('TestCtrl', TestController);

// Services
app.service('TestService', TestService);

