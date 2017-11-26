kartofan.controller('mapActivityCtrl', ['NgMap', '$modal', '$popover', '$scope', 'currentUser', function mapActivityCtrl(NgMap, $modal, $popover, $scope, currentUser) {
    'use strict';
    var mapCenter = [43.643719, 1.388390];
    var vm = this;
    NgMap.getMap().then(function (map) {
        console.log("map center : " + map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
        console.log('style', map.style);
    });

    /* Creation menu */
    var menu = {};
    function Prod(titre, prix, qte) {
        this.titre = titre;
        this.prix = prix;
        this.qte = qte;
    }
    menu.prod1 = new Prod("prod1", 10, 0);
    menu.prod2 = new Prod("prod2", 12, 0);
    menu.prod3 = new Prod("prod3", 13, 0);
     /* END menu */
     
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
    function Restauant(id, position, titre, type, img, prix, delaiLivraison, menu) {
        this.id = id;
        this.position = position;
        this.prix = prix;
        this.delaiLivraison = delaiLivraison;
        this.titre = titre;
        this.type = type;
        this.img = img;
        this.menu = menu;
    }

    /* Events */
    vm.mouseover = function () {
        console.log('mouseover', this);
        // var myPopover = $popover(this, {title: 'My Title', content: 'My Content', trigger: 'manual'});
    };

    /* La template pour afficher la popup-fenetre */
    vm.templates = {
        infoSmall: 'templates/smal-info.tpl.html'
    };

/* Les donnees */
vm.markers.marker1 = new Restauant(1, [43.65095096, 1.38046211], "HolaPizza", "p", "../img/rest1.jpg", 10, 15, menu);
vm.markers.marker2 = new Restauant(2, [43.63758, 1.38399315], "Le Carrelet", "r", "../img/rest2.jpg", 20, 18, menu);
vm.markers.marker3 = new Restauant(3, [43.64565009, 1.40561622], "La Faim des Haricots", "p", "../img/rest3.jpg", 16, 14, menu);
vm.markers.marker4 = new Restauant(4, [43.64232286, 1.36425325], "La Faim des Haricots", "r", "../img/rest4.jpg", 13, 8, menu);
vm.markers.marker5 = new Restauant(5, [43.64679373, 1.38189499], "La Faim des Haricots", "p", "../img/rest5.jpg", 8, 20, menu);
vm.markers.marker6 = new Restauant(6, [43.64853678, 1.39066706], "La Faim des Haricots", "r", "../img/rest6.jpg", 10, 14, menu);
vm.markers.marker7 = new Restauant(7, [43.62895134, 1.39496066], "La Faim des Haricots", "r", "../img/rest7.jpg", 12, 15, menu);
vm.markers.marker8 = new Restauant(8, [43.64537062, 1.40376446], "La Faim des Haricots", "p", "../img/rest8.jpg", 9, 19, menu);
vm.markers.marker9 = new Restauant(9, [43.64212741, 1.39994713], "La Faim des Haricots", "r", "../img/rest9.jpg", 5, 24, menu);
vm.markers.marker10 = new Restauant(10, [43.62853439, 1.38851422], "La Faim des Haricots", "p", "../img/rest10.jpg", 10, 15, menu);
}]);