kartofan.controller('AuthCtrl', ['$scope', 'GooglePlus', 'localStorageService', function ($scope, GooglePlus,localStorageService) {
    $scope.login = function () {
        GooglePlus.login().then(function (authResult) {
            console.log(authResult);
 
            GooglePlus.getUser().then(function (user) {
                console.log(user);
                localStorageService.set(user.id, user);
                
            });
        }, function (err) {
            console.log(err);
        });
    };

    

}]);
