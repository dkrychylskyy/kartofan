kartofan.controller('subscribeCtrl', function subscribeCtrl(localStorageService) {
    sub = this;
    sub.addUser = function (newUser) {
        var User = {
            init: function (prenom, nom, adresse, departement, ville, cp, tel, email) {
                this.prenom = prenom;
                this.nom = nom;
                this.adresse = adresse;
                this.departement = departement;
                this.ville = ville;
                this.cp = cp;
                this.tel = tel;
                this.email = email;
            }
        };
        newUser = Object.create(User);
        newUser.init(sub.prenom, sub.nom, sub.adresse, sub.departement, sub.ville, sub.cp, sub.tel, sub.email);
        function genIdUniq() {
            var date = new Date();
            var id = date.valueOf();
            return id;
        }
        localStorageService.set(genIdUniq(), newUser);
    };
});