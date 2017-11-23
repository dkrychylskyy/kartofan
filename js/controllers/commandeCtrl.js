kartofan.controller('commandeCtrl', function commandeCtrl($scope) {
    commCtrl = this;
    commCtrl.commande = new Map();
    // commCtrl.commande.line = {};

    commCtrl.commander = function(params) {
        commCtrl.commande = params;
        console.log(commCtrl.commande);
        return commCtrl.commande;
    };
});