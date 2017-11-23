kartofan.controller('popupCtrl', function popupCtrl(NgMap, $modal, $popover, $scope) {
    var popup = this;
    popup.qte = 0;

    popup.plus = function (commande, titre, prix) {
        popup.qte++;
        commande.set(titre, popup.qte);
        console.log(commande);
    };

    popup.minus = function (commande, titre, prix) {
        if (popup.qte == 0) {
            return;
        }
        // commande.delete(titre, popup.qte);
         popup.qte--;
    };
});