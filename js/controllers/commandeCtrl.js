/*jshint esversion: 6 */
kartofan.controller('commandeCtrl', ['localStorageService', '$modal', function commandeCtrl(localStorageService, $modal) {
    commCtrl = this;
    commCtrl.commande = new Map();
    /* Convert un Map en un objet classique  */
    function mapToObj(commande, delaiDelIvraison) {
        var obj = {};
        commande.forEach(function (v, k) {
            obj[k] = v;
        });
        var url = window.location.toString();
        obj.id_user = url.slice(48);
        obj.dateDeLivraison = delaiDelIvraisonToMilisec(delaiDelIvraison);
        obj.dateCommande = dateDeCommande();
        var newOrder = {
            "_id" : new Date(),
            obj
        };
        db.put(newOrder);
        return obj;
    }

    /* Convert delai de livraison en milisec */
    function delaiDelIvraisonToMilisec(delaiDelIvraison) {
        var delDeLivrMsec = delaiDelIvraison * 60 * 1000;

        /* Retourne date de livraison en milisec */
        var date = new Date();
        var currentTime = date.getTime();
        console.log(currentTime);
        var dateDeLivraison = currentTime + delDeLivrMsec;
        console.log(dateDeLivraison);
        return dateDeLivraison;
    }
    function dateDeCommande() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if(dd < 10) {
            dd = '0' + dd;
        } 
        if(mm < 10) {
            mm = '0' + mm;
        } 
        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }
    /* Ajoute le commande dans localStorage */
    function addCommandeInLocalStorage(params, delaiDelIvraison) {
        if (localStorageService.isSupported) {
            localStorageService.setPrefix('comm');
            var commande = mapToObj(params, delaiDelIvraison);
            showModal();
        }
    } 
    
    /* Recupere le commande depuis controller */
    commCtrl.commander = function (commande, delaiDelIvraison) {
        commCtrl.commande = commande;
        addCommandeInLocalStorage(commande, delaiDelIvraison);
        return commCtrl.commande;
    };
    var InvitModal = $modal({ templateUrl: '../html/templates/invitModal.tpl.html', show: false });
    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    function showModal() {
        InvitModal.$promise.then(InvitModal.show);
        }

    }]);