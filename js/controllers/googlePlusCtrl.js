kartofan.controller('AuthCtrl', ['$scope', 'GooglePlus', 'localStorageService', function ($scope, GooglePlus, localStorageService) {
    auth = this;
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
    db.createIndex({
        index: {
            fields: ['_id', 'Mot de passe']
        }
    });
    auth.connect = function() {
        var email = document.getElementById("emailfield").value;
        var password = document.getElementById("passwordfield").value;
        console.log(email);
        console.log(password);
        var test = db.find({
            selector: {
                _id: email,
                "Mot de passe": password
            }
        }).then(function (result) {
            if (result.bookmark !== "nil") {
                window.location.assign("mapactivity.html");
            } else {
                alert('Adresse mail ou mot de passe erroné.');
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    /* console.log(test); */

}]);