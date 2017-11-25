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

    var email = document.getElementById("emailfield").value;
    var password = document.getElementById("passwordfield").value;
    db.createIndex({
        index: {fields: ['_id']}
      });
    
    var test = db.find({
        selector: {
          _id: 'henoc.nzuzi@gmail.com'
        }
      });
    console.log(test);

}]);
