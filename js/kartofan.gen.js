
var kartofan = angular.module('kartofan', ['ngMap']);

kartofan.controller('mapActivityCtrl', function mapActivityCtrl(NgMap) {
    var mapCenter = [43.643719, 1.388390];
    var vm = this;
    NgMap.getMap().then(function (map) {
        console.log("map center : " + map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
        console.log('style', map.style);
    });
    
    /* Centre de la map */
    vm.center = mapCenter;
    /* Zoom de depart */
    vm.zoom = 13;
    
    /* 
    * MARQUES 
    */
    /* Maque centrale */
    vm.currentPosition = {
        position: mapCenter,
    };

    /* Marques */
    vm.markers = {};
    function Restauant(position, titre, type, img, prix, delaiLivraison) {
        this.position = position;
        this.prix = prix;
        this.delaiLivraison = delaiLivraison;
        this.titre = titre;
        this.type = type;
        this.img = img;
    }
    
    /* Events */
    vm.mouseover = function() {
        console.log('mouseover', this);
    };

   vm.markers.marker1 = new Restauant([43.65095096, 1.38046211], "HolaPizza","p", "img", 10, 15);
   vm.markers.marker2 = new Restauant([43.63758, 1.38399315], "Le Carrelet","r", "../img/rest1.jpg", 20, 18);
   vm.markers.marker3 = new Restauant([43.64565009, 1.40561622], "La Faim des Haricots","p", "../img/rest3.jpg", 16, 14);
   vm.markers.marker4 = new Restauant([43.64232286, 1.36425325], "La Faim des Haricots","r", "../img/rest4.jpg", 13, 8);
   vm.markers.marker5 = new Restauant([ 43.64679373, 1.38189499], "La Faim des Haricots","p", "../img/rest5.jpg", 8, 20);
   vm.markers.marker6 = new Restauant([43.64853678,  1.39066706], "La Faim des Haricots","r", "../img/rest6.jpg", 10, 14);
   vm.markers.marker7 = new Restauant([43.62895134, 1.39496066], "La Faim des Haricots","r", "../img/rest7.jpg", 12, 15);
   vm.markers.marker8 = new Restauant([43.64537062, 1.40376446], "La Faim des Haricots","p", "../img/rest8.jpg", 9, 19);
   vm.markers.marker9 = new Restauant([43.64212741, 1.39994713], "La Faim des Haricots","r", "../img/rest9.jpg", 5, 24);
   vm.markers.marker10 = new Restauant([43.62853439, 1.38851422], "La Faim des Haricots","p", "../img/rest10.jpg", 10, 15);

   console.log(vm.markers);

});