kartofan.controller('userCtrl', ['$scope', 'GooglePlus', function ($scope, GooglePlus) {
    user = this;
    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }
    user.info = function() {
        var url = window.location.toString();
        var email = url.slice(48);
        /* db.createIndex({
            index: {fields: ['obj.id_user']}
          }); */
        var comm = db.find({
            selector: {
                "obj.id_user" : email
            }
        }).then(function (result) {
            if (result.bookmark !== "nil") {
                var comm1 = JSON.stringify(result);
                var comm2 = comm1.indexOf('{"', 90);
                var comm3 = comm1.slice(comm2);
                var comm4 = comm3.indexOf('}],"bookmark"',0);
                var commande = comm3.slice(0,[comm4]);
                commande = JSON.parse(commande);
                var montantHt = 0;
                var montantTtc = 0;
                console.log(commande);
                if(commande.hasOwnProperty('prod1')) {
                    var prixHt1 = commande.prod1.qte * commande.prod1.prix;
                    var prixTtc1 = round(prixHt1 * 1.10, 2);
                    montantHt += prixHt1;
                    montantTtc += prixTtc1;
                    console.log(prixHt1);
                    console.log(prixTtc1);
                }
                if(commande.hasOwnProperty('prod2')) {
                    var prixHt2 = commande.prod2.qte * commande.prod2.prix;
                    var prixTtc2 = round(prixHt2 * 1.10, 2);
                    montantHt += prixHt2;
                    montantTtc += prixTtc2;
                    console.log(prixHt2);
                    console.log(prixTtc2);
                }
                if(commande.hasOwnProperty('prod3')) {
                    var prixHt3 = commande.prod3.qte * commande.prod3.prix;
                    var prixTtc3 = round(prixHt3 * 1.10, 2);
                    montantHt += prixHt3;
                    montantTtc += prixTtc3;
                    console.log(prixHt3);
                    console.log(prixTtc3);
                }
                
            } else {
                alert("Aucune commande pour l'instant...Qu'est ce que vous attendez ?");
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
}]);
