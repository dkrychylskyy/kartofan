kartofan.controller('popupCtrl', function popupCtrl(NgMap, $modal, $popover, $scope) {
    var popup = this;
    var command = {};
    popup.qte = 1;

    popup.plus = function (qte) {
        return popup.qte++;
    };
    popup.minus = function (qte) {
        return popup.qte--;
    };
});