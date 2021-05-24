const request = require('request')
const  translate = require ('translate')
translate.engine = 'yandex'
translate.key = 'trnsl.1.1.20210524T184313Z.187c632f16148a58.f810a5f4c0579ce49dd74920fa77f952d3d1c9a5'
let weather_description




const url = 'http://api.weatherstack.com/current?access_key=8940f951e4de0f52779dcca691f4fcb9&query=19.2433,-103.725](http://api.weatherstack.com/current?access_key=000f0a799e1814d30ba7c0e63f5e5581&query=19.2433,-103.725)'



request({url:url, json:true}, (error,response)=>{
    //console.log(response.body.current)
    weather_description = response.body.current.weather_descriptions[0]
    translate(weather_description,{from: 'en', to:'es'}).then(text=>{
        console.log("El clima es " + text)
    })

    
    console.log("La temperatura es de  "+response.body.current.temperature+" grados")
    console.log("Sin embargo, se percibe de "+response.body.current.feelslike + " grados")
    console.log("La probabilidad de lluvia es del  "+response.body.current.precip + "%")
    

})