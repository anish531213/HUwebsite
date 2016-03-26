var ref = new Firebase("https://huhacks.firebaseio.com/");
var uni;
ref.on("child_added", function(snapshot, prevChildKey) {
  var icon;
  var data = snapshot.val();
  uni = data;

  var studentIcon1 = new L.Icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/ibrandify-female-user-action-icon/512/10-512.png',
  //shadowUrl: 'https://dl.dropboxusercontent.com/s/g8803amp99e37sr/marker-icon-red.png',
    iconSize: [40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });
  var studentIcon2 = new L.Icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/school-education-2-2/256/Schoolgirl-512.png',
  //shadowUrl: 'https://dl.dropboxusercontent.com/s/g8803amp99e37sr/marker-icon-red.png',
    iconSize: [40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    });
  if (data.location.character != "Guard") {
  	icon = studentIcon1;
  } else {
  	icon = studentIcon2;
  }
  console.log("latitude: " + data.location.latitude);
  console.log("Title: " + data.location.longitude);
  console.log("Name: " + data.location.character);
  console.log("Previous Post ID: " + prevChildKey);

  var campusPoliceOffice = L.marker([data.location.latitude,data.location.longitude],{icon: icon}).addTo(mymap);
  campusPoliceOffice.bindPopup(data.location.name);
  var k = function() {
    return data.location.name;
  }
});

console.log('Testing end of line');