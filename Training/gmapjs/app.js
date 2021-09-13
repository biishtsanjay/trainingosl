function initMap(){

  //map option
   var options ={
     center:{lat: 27.1751, lng: 78.0421},
     zoom: 7

   }

   //new map
   map = new google.maps.Map(document.getElementById('map'), options)

  //  listen for click on map location
  google.maps.event.addListener(map, "click",(event)=>{
    addMarker({location:event.latLng});
  } )


// add marker to array
let MarkerArray = [{location:{lat : 27.1751, lng :       78.0421},content:`<h2>Taj Mahal</h2>`},
  {location:{lat : 26.1751, lng : 78.421}},
  {location:{lat : 29.3919, lng : 79.45421}}

]

// loop through markers
for (let i=0 ; i < MarkerArray.length ; i++){
  addMarker(MarkerArray[i]);
}



    //add markers

    function addMarker(property){
      const marker = new google.maps.Marker({
        position: property.location,
        map : map
      })
    }

    if(property.content){
    const detailWindow = new google.maps.InfoWindow({
      content: property.content
    });
    marker.addListener("mouseover", ()=>{
      detailWindow.open(map, marker);
    })
      }
      
      addMarker({location:{lat : 27.1751, lng : 78.0421},
      content:`<h2>Taj Mahal</h2>`
      });
      addMarker({location:{lat : 26.1751, lng : 78.421}})
    }

