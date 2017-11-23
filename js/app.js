var kartofan = angular.module('kartofan', ['ngMap', 'googleplus', 'ngRoute', 'mgcrea.ngStrap', 'ngAnimate']);

kartofan.config(['GooglePlusProvider', function(GooglePlusProvider) {
    GooglePlusProvider.init({
       clientId: '1012913286363-n94npc63kf6gqvepbinl0v8lhb8mbqiu.apps.googleusercontent.com',
       apiKey: 'AIzaSyCyoG1LdKWgZ2Ki4Hhye9aUhLL-vqK3hw4'
    });
}]);

kartofan.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "index.html"
    })
    .when("/subscribe", {
      templateUrl : "../html/subscribe.html"
    })
    .otherwise("/");
    }
  );

kartofan.config(function($popoverProvider) {
    angular.extend($popoverProvider.defaults, {
      html: true
    });
  });
  