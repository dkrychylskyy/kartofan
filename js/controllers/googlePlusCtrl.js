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
    $scope.logout = function () {
        gapi.auth.signOut();
        console.log("Déconnecté !");
      };
}]);