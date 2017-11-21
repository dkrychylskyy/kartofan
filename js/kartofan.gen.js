
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


});