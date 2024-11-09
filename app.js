const request = require("request");
const country = process.argv[2];
const url  = `https://api.weatherapi.com/v1/current.json?key=cfe12352fec4481a8b7130646240911&q=${country}`;
request({url ,json:true} ,(error,response)=>{
    if(error){
        console.log("error has occured")
    }else if (response.body.error){
        console.log(response.body.error.message)
    }else{
        console.log("the location of city is: "+ response.body.location.name);
        console.log("the country of city is: "+ response.body.location.country);
        console.log("the latitude of city is: "+ response.body.location.lat)
        console.log("the longitude of city is: "+ response.body.location.lon);
        console.log("the temp with Celsius degree is: "+ response.body.current.temp_c)
        console.log("the temp with Fahrenheit degree is: " +response.body.current.temp_f)



    }
})