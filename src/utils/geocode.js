const request = require("postman-request")

const geocode = (address , callback) =>{

    
    url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoidmlzaGFsNzUwODQiLCJhIjoiY2xnMHZtcmk0MDlldTNvb3d1cHR0eHZ2eCJ9.TIGGq2P9K48wLh3poPyvIg&limit=1"
    
    request({url: url2, json:true }, (error, response)=>{
    
        if(error){
            callback("unable to connect the Geocoding Api" , undefined)
        }
        else if(response.body.features.length === 0){
            callback("no data",undefined)
        }else{
            callback(undefined ,{
                
                longitude : response.body.features[0].center[1],
                latitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
                
            })
    
    }
    
    })
    
    }


module.exports = geocode