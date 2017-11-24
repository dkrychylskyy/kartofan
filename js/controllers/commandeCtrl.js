kartofan.controller('commandeCtrl', function commandeCtrl($scope, localStorageService) {
    commCtrl = this;
    commCtrl.commande = new Map();
    // commCtrl.commande.line = {};

    function addCommandeInLocalStorege(commande) {
        if(localStorageService.isSupported) {
            localStorageService.setPrefix('commande');
          }
    }

    commCtrl.commander = function(commande) {
        commCtrl.commande = commande;
        console.log(commCtrl.commande);
        addCommandeInLocalStorege();
        return commCtrl.commande;
    };
});