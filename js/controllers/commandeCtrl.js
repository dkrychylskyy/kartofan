kartofan.controller('commandeCtrl', function commandeCtrl() {
    commande = this;
    commande.commande = {};

    commande.commander = function(param1, param2) {
        console.log(param1, param2);
    };
});