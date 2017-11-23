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
        if(titre == "prod1") {
            if(popup.qte == 1){
                commande.delete("prod1");
            } else {
                commande.set(titre, (popup.qte -1));
            }
        }
        if(titre == "prod2") {
            if(popup.qte == 1){
                commande.delete("prod2");
            } else {
                commande.set(titre, (popup.qte -1));
            }
        }
        if(titre == "prod3") {
            if(popup.qte == 1){
                commande.delete("prod3");
            } else {
                commande.set(titre, (popup.qte -1));
            }
        } 
         popup.qte--; 
    };
});