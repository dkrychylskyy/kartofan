
var kartofan = angular.module('kartofan', ['ngMap', 'mgcrea.ngStrap', 'ngAnimate']);
kartofan.config(function($popoverProvider) {
    angular.extend($popoverProvider.defaults, {
      html: true
    });
  });
  