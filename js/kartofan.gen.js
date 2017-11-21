var kartofan = angular.module('kartofan', ['ngMap', 'googleplus']);

kartofan.config(['GooglePlusProvider', function(GooglePlusProvider) {
    GooglePlusProvider.init({
       clientId: '1012913286363-n94npc63kf6gqvepbinl0v8lhb8mbqiu.apps.googleusercontent.com',
       apiKey: 'AIzaSyCyoG1LdKWgZ2Ki4Hhye9aUhLL-vqK3hw4'
    });
}]);

kartofan.controller('AuthCtrl', ['$scope', 'GooglePlus', function ($scope, GooglePlus) {
    $scope.login = function () {
        GooglePlus.login().then(function (authResult) {
            console.log(authResult);
 
            GooglePlus.getUser().then(function (user) {
                console.log(user);
            });
        }, function (err) {
            console.log(err);
        });
    };
}]);
kartofan.controller('mapActivityCtrl', function mapActivityCtrl(NgMap) {
    var mapCenter = [43.643719, 1.388390];
    var vm = this;
    NgMap.getMap().then(function (map) {
        console.log("map center : " + map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
        console.log('style', map.style);
    });
    
    /* Centre de la map */
    vm.center = mapCenter;
    /* Zoom de depart */
    vm.zoom = 13;
    
    /* 
    * MARQUES 
    */
    /* Maque centrale */
    vm.currentPosition = {
        position: mapCenter,
    };


});