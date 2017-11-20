kartofan.controller('mapActivityCtrl', function mapActivityCtrl(NgMap) {

    var API_KEY =  "AIzaSyA5lsFrqlHJmgACBlD0tTr-FWl-EjVhF6g";

    NgMap.getMap().then(function(map) {
        console.log("map center : " + map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
      });
});