var kartofan = angular.module('kartofan', ['ngMap', 'googleplus', 'mgcrea.ngStrap', 'ngAnimate', 'LocalStorageModule']);

kartofan.config(['GooglePlusProvider', function(GooglePlusProvider) {
    GooglePlusProvider.init({
       clientId: '1012913286363-n94npc63kf6gqvepbinl0v8lhb8mbqiu.apps.googleusercontent.com',
       apiKey: 'AIzaSyCyoG1LdKWgZ2Ki4Hhye9aUhLL-vqK3hw4'
    });
}]);
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