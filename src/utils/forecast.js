const request=require('request')
const command = process.argv[2] 

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=8311686731b64788d631ca080d7f7e5c&query='+latitude+','+longitude+'&units=m'
    request({url: url, json:true}, (error, response)=>{
              if(error){
                  callback('Unable to connect', undefined)
              }
              else{
                  if(response.body.error){
                      callback("Can't find the area", undefined)                      
                  }
                  else{
                      callback(undefined,"Current weather is " + response.body.current.weather_descriptions[0] + " with temperature of " + response.body.current.temperature + " which feels like " + response.body.current.feelslike +".")
                    //  callback(undefined,{
                    //     weatherdes:response.body.current.weather_descriptions[0],
                    //     temperature:response.body.current.temperature,
                    //     feelslike:response.body.current.feelslike
                    //  }
                  }
              }
    })
}

module.exports=forecast