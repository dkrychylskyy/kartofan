kartofan.controller('commandeCtrl', function commandeCtrl(localStorageService) {
    commCtrl = this;
    commCtrl.commande = new Map();
    // commCtrl.commande.line = {};

    /* Creation un ID unique = int en milisec */
    function genIdUniq() {
        var date = new Date();
        var id = date.valueOf();
        return id;
    }

    /* Convert un Map en un objet classique  */
    function mapToObj(aMap) {
            var obj = {};
            aMap.forEach(function (v, k) {
                obj[k] = v;
            });
            return obj;
    }

    /* Ajoute le commande dans localStorage */
    function addCommandeInLocalStorege(params) {
        if(localStorageService.isSupported) {
            localStorageService.setPrefix('comm');
            var key = genIdUniq();
            var commande = mapToObj(params);
            localStorageService.set(key, commande);
          }
    }

    /* Recupere le commande depuis controller */
    commCtrl.commander = function(commande) {
        commCtrl.commande = commande;
        addCommandeInLocalStorege(commande);
        return commCtrl.commande;
    };
});