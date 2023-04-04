const request = require('postman-request')

const forcast = (latitude , longitude , callback) =>{
    const url = `http://api.weatherstack.com/current?access_key=b31831a5dd55b90951442f9f91fba82c&query=${latitude},${longitude}`

    request({url: url, json:true }, (error, response)=>{
    
        if(error){
            callback("Error shows", undefined)
        }
        else if(response.body.error){
            callback("Error shows for location", undefined)
        }
        else{
            callback(undefined, {
               temprature : response.body.current.temperature,
                Precip : response.body.current.precip
            // response : response.body.current
            })
       
        }
    
    })
}


module.exports = forcast