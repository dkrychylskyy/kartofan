/*jshint esversion: 6*/
kartofan.controller('userCtrl', ['$scope', 'GooglePlus', function ($scope, $element, $window, GooglePlus) {
    user = this;
    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }
    user.info = function() {
        var url = window.location.toString();
        var email = url.slice(48);
        /* db.createIndex({
            index: {
                fields: ['obj']
            }
        }).then(function (result) {
            console.log(result);
          }).catch(function (err) {
            console.log(err);
          }); */
            var comm = db.find({
            selector: {
                "obj.id_user": {$eq: email},
                $ne: "bookmark"
            },
            fields: ['obj.dateCommande', 'obj.prod1', 'obj.prod2', 'obj.prod3', 'obj.id_user', 'obj.dateDeLivraison']
            /* sort: ['dateCommande'] */
        }).then(function (result) {
            if (result.bookmark !== "nil") {
                var comm = JSON.stringify(result);
                var comm1 = comm.replace(/{"docs":/gi, " ");
                var comm2 = comm1.replace(/{"obj":/gi, " ");
                var comm3 = comm2.replace(/}}/gi, "}");
                var comm4 = comm3.indexOf('],"', 0);
                var commandes = comm3.slice(0, [comm4 + 1]);
                commandes = JSON.parse(commandes);
                console.log(commandes);
                $scope.order = function() {
                    i = 0;
                    while (commandes[i]){
                        var dateDeCommande = commandes[i].dateCommande;
                        var montantHt = 0;
                        var montantTtc = 0;
                        var dateLivraison = commandes[i].dateDeLivraison;
                        if(commandes[i].prod1) {
                            var prixHt1 = commandes[i].prod1.qte * commandes[i].prod1.prix;
                            var prixTtc1 = round(prixHt1 * 1.10, 2);
                            montantHt += prixHt1;
                            montantTtc += prixTtc1;
                        }
                        if(commandes[i].prod2) {
                            var prixHt2 = commandes[i].prod2.qte * commandes[i].prod2.prix;
                            var prixTtc2 = round(prixHt2 * 1.10, 2);
                            montantHt += prixHt2;
                            montantTtc += prixTtc2;
                        }
                        if(commandes[i].prod3) {
                            var prixHt3 = commandes[i].prod3.qte * commandes[i].prod3.prix;
                            var prixTtc3 = round(prixHt3 * 1.10, 2);
                            montantHt += prixHt3;
                            montantTtc += prixTtc3;
                        }
                        console.log(montantHt);
                        angular.element('<tr><td>' + dateDeCommande+ '</td><td>' + montantHt + "€" +'</td><td>' + montantTtc + "€" +'</td><td>' + dateLivraison + '</td></tr>').appendTo('#commandes');
                        i++;
                    }
                        //angular.element('<tr><td></td><td></td></tr>').appendTo('#commandes')
                        //angular.element('<tr><td>' + toString() + '</td></tr>').appendTo('#commandes');
                        //angular.element(count).append('<td>' + commande.dateCommande + '</td>');
                    };
            } else {
                alert("Aucune commande pour l'instant...Qu'est ce que vous attendez ?");
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
}]);
