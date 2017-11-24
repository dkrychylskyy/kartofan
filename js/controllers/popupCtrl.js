kartofan.controller('popupCtrl', function popupCtrl(NgMap, $modal, $popover, $scope) {
    var popup = this;
    popup.qte = 0;

    popup.plus = function (commande, titre, prix) {
        popup.qte++;
        var qte = popup.qte;
        var obj = {};
        obj.qte = qte;
        obj.prix = prix;
        commande.set(titre, obj);
        console.log(commande);
    };

    popup.minus = function (commande, titre, prix) {
        var qte = popup.qte;
        var obj = {};
        obj.qte = qte-1;
        obj.prix = prix;
        if (popup.qte == 0) {
            return;
        }
        if (popup.qte == 1) {
            commande.delete(titre, obj);
        } else {
            commande.set(titre, obj);
        }
        popup.qte--;
    };
});