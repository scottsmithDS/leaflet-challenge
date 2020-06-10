// Create our initial map object
// Set the longitude, latitude, and the starting zoom level


var myMap = L.map("map", {
    center: [0, 0],
    zoom: 3
  });
  
  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom: 18,
    id: 'mapbox/streets-v11',
    maxZoom: 18,

    accessToken: API_KEY
}).addTo(myMap);




d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(infoRes) {
    // var updatedAt = infoRes.features[0].geometry;
    var updatedAt2 = infoRes.features;

    // var updatedAt4 = infoRes.features[0].properties.place;
    // var updatedAt5 = infoRes.features[0].properties.time;
    // console.log(updatedAt)
    // console.log(updatedAt2)
    // console.log(updatedAt3)
    // console.log(updatedAt4)
    // console.log(updatedAt5)
    // var stationStatus = infoRes.type.Feature.properties;
    // var stationInfo = infoRes.Feature.geometry;
    var lat = []
    var lon = []
    var magn = []
    var places = []
    var times = []
for (var i = 0; i < updatedAt2.length; i++) {
    
    var coords = updatedAt2[i].geometry.coordinates;
    var mag = updatedAt2[i].properties.mag
    var place = updatedAt2[i].properties.place
    var time = updatedAt2[i].properties.time


    
    magn.push(mag);
    places.push(place);
    times.push(time);
    lon.push(coords[0]);
    lat.push(coords[1]);
    magn.push(0.2)
    magn.push(0.3)



    var laty = lat.filter(function (value) {
        return !Number.isNaN(value);
    });
    var longy = lon.filter(function (value) {
        return !Number.isNaN(value);
    });
    var mags = magn.filter(function (value) {
        return !Number.isNaN(value);
    });
    var placeys = places.filter(function (value) {
        return !Number.isNaN(value);
    });
    var timeys = times.filter(function (value) {
        return !Number.isNaN(value);
    });
    
    // console.log(lat);
    // console.log(lon);

    //   console.log("you're getting the hang of this")
    // }
    // else (console.log("Hello"))
    // }
}



    

  
  // Loop through the cities array and create one marker for each city object
  for (var i = 0; i < laty.length; i++) {
      var cord =  []
      cord.push(laty[i])
      cord.push(longy[i])

      var magerets = []
      magerets.push(mags[i])
      var mageretys = magerets[0] 
 
        if (mageretys > 0 && mageretys < 1){

            L.circleMarker(cord, {
                color: "beige",


        



        //   Setting our circle's radius equal to the output of our markerSize function
        //   This will make our marker's size proportionate to its population
    
                radius: (mageretys * 5)
            }).addTo(myMap) 
        } else if (mageretys > 1 && mageretys < 2){

            L.circleMarker(cord, {
                color: "green",

        
    
    
    
        //   Setting our circle's radius equal to the output of our markerSize function
        //   This will make our marker's size proportionate to its population
        
            radius: (mageretys * 5)
        }).addTo(myMap) 
        } else if (mageretys > 2 && mageretys < 3)
            {

            L.circleMarker(cord, {
                color: "yellow",

        
            
        
        
        
            //   Setting our circle's radius equal to the output of our markerSize function
            //   This will make our marker's size proportionate to its population
            
            radius: (mageretys * 5)
        }).addTo(myMap); 
        } else if (mageretys > 3 && mageretys < 4){

            L.circleMarker(cord, {
                color: "orange",

            
                
            
            
            
                //   Setting our circle's radius equal to the output of our markerSize function
                //   This will make our marker's size proportionate to its population
        
                radius: (mageretys * 5)
            }).addTo(myMap); 
        } else if (mageretys > 4 && mageretys < 5){

            L.circleMarker(cord, {
                color: "pink",

        
                    
                
                
                
                    //   Setting our circle's radius equal to the output of our markerSize function
                    //   This will make our marker's size proportionate to its population
                    
            radius: (mageretys * 5)
        }).addTo(myMap); 
        } else {

            L.circleMarker(cord, {
                color: "red",
    
        
    
    
    
        //   Setting our circle's radius equal to the output of our markerSize function
        //   This will make our marker's size proportionate to its population
        
                radius: (mageretys * 5)
            }).addTo(myMap); }
        if (i == 5000){ break; }
    }
  
})
