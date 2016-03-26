   var mymap = L.map('mapid').setView([38.9221947,-77.0207865], 16);
    L.tileLayer("https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbG10dnA3NzY3OTZ0dmtwejN2ZnUycjYifQ.1W5oTOnWXQ9R1w8u3Oo1yA", {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'sushantsusan39',
    accessToken: 'pk.eyJ1Ijoic3VzaGFudHN1c2FuMzkiLCJhIjoiY2lsZTZ6OGl5MGVqb3Voa3BpY3JsZXBtcCJ9.IXO82Vle6cGxtTJYPBQQIw'
}).addTo(mymap);
    // L.polyline([[38.922, -77.0194],[38.9207463,-77.0225979]],
    // {
    //   color: 'red',
    //   weight : 3,
    //   opacity: 0.5
    // }).addTo(map)
  
    var pointA = new L.LatLng(38.922, -77.0194);
    var pointB = new L.LatLng(38.9207463,-77.0225979);
    var pointList = [pointA, pointB];

    var firstpolyline = new L.polyline(pointList, {
    color: 'red',
    weight: 10,
    opacity: 0.5,
    smoothFactor: 1

    });
    // Police Icon for the policeman
    var policeIcon = new L.Icon({
    iconUrl: 'http://image005.flaticon.com/1/png/512/8/8169.png',
  //shadowUrl: 'https://dl.dropboxusercontent.com/s/g8803amp99e37sr/marker-icon-red.png',
    iconSize: [80],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });

    //Icon for Police Head and Icon
    var policeTauko = new L.Icon({
    iconUrl: 'http://uxrepo.com/static/icon-sets/ocha/svg/police-station.svg',
    iconSize: [32],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });
    var campusPoliceOffice = L.marker([38.9197003,-77.0174145],{icon: policeIcon}).addTo(mymap);
    var campusStatPolice1 = L.marker([38.9254894,-77.0228435],{icon: policeTauko}).addTo(mymap);
    var campusStatPolice2 = L.marker([38.9282207,-77.0199194],{icon: policeTauko}).addTo(mymap);
    var campusStatPolice3 = L.marker([38.9254226,-77.0239378],{icon: policeTauko}).addTo(mymap);
    var campusStatPolice4 = L.marker([38.9274800,-77.0228435],{icon: policeTauko}).addTo(mymap);
    var campusStatPolice5 = L.marker([38.9235459,-77.0215332],{icon: policeTauko}).addTo(mymap);
    var campusStatPolice6 = L.marker([38.9167761,-77.025568],{icon: policeTauko}).addTo(mymap);
    var campusStatPolice7 = L.marker([38.9203169,-77.0240974],{icon: policeTauko}).addTo(mymap);
    campusStatPolice1.bindPopup("Police");
    campusStatPolice2.bindPopup("Police");
    campusStatPolice3.bindPopup("Police");
    campusStatPolice4.bindPopup("Police");
    campusStatPolice5.bindPopup("Police");
    campusStatPolice6.bindPopup("Police");
    campusStatPolice7.bindPopup("Police");
    campusPoliceOffice.bindPopup("Police Station");
//for green map pointer icon
var policeIcon = new L.Icon({
  iconUrl: 'https://dl.dropboxusercontent.com/s/g8803amp99e37sr/marker-icon-red.png',
  //shadowUrl: 'https://dl.dropboxusercontent.com/s/g8803amp99e37sr/marker-icon-red.png',
  iconSize: [35,51],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

    //firstpolyline.addTo(mymap);
