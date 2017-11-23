kartofan.controller('popupCtrl', function popupCtrl(NgMap, $modal, $popover, $scope) {
    var popup = this;
    popup.qteTotal = 0;
    popup.qte = 0;

    popup.plus = function (qte) {
        popup.qte++;
        var qteTotalLoc = popup.qte;
        popup.qteTotal = qteTotalLoc;
        console.log(popup.prix);
    };
    popup.minus = function (qte) {
        if(popup.qte == 0){
            return; 
        }
        return popup.qte--;
    };
});