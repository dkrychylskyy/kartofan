kartofan.controller('subscribeCtrl', function subscribeCtrl(localStorageService) {
    sub = this;
    sub.addUser = function (newUser) {
        var User = {
            init: function (prenom, nom, adresse, tel, ville, cp, password, email) {
                this.prenom = prenom;
                this.nom = nom;
                this.adresse = adresse;
                this.tel = tel;
                this.ville = ville;
                this.cp = cp;
                this.password = password;
                this.email = email;
            }
        };
        newUser = Object.create(User);
        newUser.init(sub.prenom, sub.nom, sub.adresse, sub.tel, sub.ville, sub.cp, sub.password, sub.email);
        var newUserDatabase = {
            "_id" : sub.email,
            "prenom" : sub.prenom,
            "nom" : sub.nom,
            "adresse" : sub.adresse,
            "tel" : sub.tel,
            "ville" : sub.ville,
            "Code postal" : sub.cp,
            "Mot de passe" : sub.password
        };
        db.put(newUserDatabase);
        /* function genIdUniq() {
            var date = new Date();
            var id = date.valueOf();
            return id;
        }
        localStorageService.set(genIdUniq(), newUser); */
        window.location.assign("index.html");
    };
});