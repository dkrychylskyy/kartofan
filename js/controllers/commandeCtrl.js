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
    function mapToObj(aMap, delaiDelIvraison) {
            var obj = {};
            aMap.forEach(function (v, k) {
                obj[k] = v;
            });
            obj.dateDeLivraison = delaiDelIvraisonToMilisec(delaiDelIvraison);
            return obj;
    }

    /* Convert delai de livraison en milisec */
    function delaiDelIvraisonToMilisec(delaiDelIvraison) {
        var delDeLivrMsec =  delaiDelIvraison*60*1000;

    /* Retourne date de livraison en milisec */
        var date = new Date();
        var currentTime = date.getTime();
        console.log(currentTime);
        var dateDeLivraison = currentTime + delDeLivrMsec;
        console.log(dateDeLivraison);
        return dateDeLivraison;
    }

    /* Ajoute le commande dans localStorage */
    function addCommandeInLocalStorage(params, delaiDelIvraison) {
        if(localStorageService.isSupported) {
            localStorageService.setPrefix('comm');
            var key = genIdUniq();
            var commande = mapToObj(params, delaiDelIvraison);
            localStorageService.set(key, commande);
          }
    }

    /* Recupere le commande depuis controller */
    commCtrl.commander = function(commande, delaiDelIvraison) {
        commCtrl.commande = commande;
        addCommandeInLocalStorage(commande, delaiDelIvraison);
        return commCtrl.commande;
    };
});