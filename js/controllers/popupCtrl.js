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
        var entres = commande.entries();
        var cle = commande.keys();
        for(i=0; i<entres.length;i++) {
            for(j=0; j<cle.length;j++){
                if(cle[j]) {
                    this.value-1;
                }
            }
        }
        
        console.log(cle);
        
        commande.delete();
         popup.qte--;
    };
});