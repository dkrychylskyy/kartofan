var kartofan = angular.module('kartofan', ['ngMap', 'googleplus', 'mgcrea.ngStrap', 'ngAnimate', 'LocalStorageModule'/* , 'pouchdb' */]);

kartofan.config(['GooglePlusProvider', function(GooglePlusProvider) {
    GooglePlusProvider.init({
       clientId: '1012913286363-n94npc63kf6gqvepbinl0v8lhb8mbqiu.apps.googleusercontent.com',
       apiKey: 'AIzaSyCyoG1LdKWgZ2Ki4Hhye9aUhLL-vqK3hw4'
    });
}]);

/* kartofan.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "index.html"
    })
    .when("/subscribe", {
      templateUrl : "../html/subscribe.html"
    })
    .otherwise("/");
    }
  ); */

kartofan.config(function($popoverProvider) {
    angular.extend($popoverProvider.defaults, {
      html: true
    });
  });

  kartofan.config(function($modalProvider) {
    angular.extend($modalProvider.defaults, {
      animation: 'am-flip-x'
    });
  });

  kartofan.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('kartofan')
      .setNotify(true, true);
  });

  kartofan.factory('currentUser', function() {
    var currentUser = {};
    currentUser.setter = function(newValue) {
        currentUser.value = newValue;
    };
    currentUser.getter = function() {
        return currentUser.value;
    };
    return currentUser;
});