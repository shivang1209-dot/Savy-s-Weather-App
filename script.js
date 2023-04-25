const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6493876018mshae71ee5ba88daa7p1519d5jsnbbe53e646595',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ' + city, options)
	.then(response => response.json())
	.then(response =>  {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
		
	

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response =>  {
		console.log(response)
		cloud_pctdel.innerHTML = response.cloud_pct
		tempdel.innerHTML = response.temp
		feels_likedel.innerHTML = response.feels_like
		humiditydel.innerHTML = response.humidity
		min_tempdel.innerHTML = response.min_temp
		max_tempdel.innerHTML = response.max_temp
		wind_speeddel.innerHTML = response.wind_speed
		wind_degreesdel.innerHTML = response.wind_degrees
		sunrisedel.innerHTML = response.sunrise
		sunsetdel.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then(response =>  {
		console.log(response)
		cloud_pctsh.innerHTML = response.cloud_pct
		tempsh.innerHTML = response.temp
		feels_likesh.innerHTML = response.feels_like
		humiditysh.innerHTML = response.humidity
		min_tempsh.innerHTML = response.min_temp
		max_tempsh.innerHTML = response.max_temp
		wind_speedsh.innerHTML = response.wind_speed
		wind_degreessh.innerHTML = response.wind_degrees
		sunrisesh.innerHTML = response.sunrise
		sunsetsh.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctbos.innerHTML = response.cloud_pct
		tempbos.innerHTML = response.temp
		feels_likebos.innerHTML = response.feels_like
		humiditybos.innerHTML = response.humidity
		min_tempbos.innerHTML = response.min_temp
		max_tempbos.innerHTML = response.max_temp
		wind_speedbos.innerHTML = response.wind_speed
		wind_degreesbos.innerHTML = response.wind_degrees
		sunrisebos.innerHTML = response.sunrise
		sunsetbos.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Cambridge', options)
	.then(response => response.json())
	.then(response =>  {
		console.log(response)
		cloud_pctcam.innerHTML = response.cloud_pct
		tempcam.innerHTML = response.temp
		feels_likecam.innerHTML = response.feels_like
		humiditycam.innerHTML = response.humidity
		min_tempcam.innerHTML = response.min_temp
		max_tempcam.innerHTML = response.max_temp
		wind_speedcam.innerHTML = response.wind_speed
		wind_degreescam.innerHTML = response.wind_degrees
		sunrisecam.innerHTML = response.sunrise
		sunsetcam.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then(response =>  {
		console.log(response)
		cloud_pctlon.innerHTML = response.cloud_pct
		templon.innerHTML = response.temp
		feels_likelon.innerHTML = response.feels_like
		humiditylon.innerHTML = response.humidity
		min_templon.innerHTML = response.min_temp
		max_templon.innerHTML = response.max_temp
		wind_speedlon.innerHTML = response.wind_speed
		wind_degreeslon.innerHTML = response.wind_degrees
		sunriselon.innerHTML = response.sunrise
		sunsetlon.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response =>  {
		console.log(response)
		cloud_pctmum.innerHTML = response.cloud_pct
		tempmum.innerHTML = response.temp
		feels_likemum.innerHTML = response.feels_like
		humiditymum.innerHTML = response.humidity
		min_tempmum.innerHTML = response.min_temp
		max_tempmum.innerHTML = response.max_temp
		wind_speedmum.innerHTML = response.wind_speed
		wind_degreesmum.innerHTML = response.wind_degrees
		sunrisemum.innerHTML = response.sunrise
		sunsetmum.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather('Delhi')





	