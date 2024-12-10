

let inputCity = document.getElementById("cityName");
async function getWeather() {

  let city = inputCity.value
    if(city!="")
  {try{
    let url = `http://api.weatherapi.com/v1/forecast.json?key=3f202a46dd8e4c87b6902833240712&q=${city}&days=3`;
    let response = await fetch(url);
      
    let data = await response.json();
  console.log(data)
displayData(data);

}

catch(err){
alert(err);
}}

else{
  city="cairo"



  try{
    let url = `http://api.weatherapi.com/v1/forecast.json?key=3f202a46dd8e4c87b6902833240712&q=${city}&days=3`;
    let response = await fetch(url);
      
    let data = await response.json();
  console.log(data)
displayData(data);

}

catch(err){
alert(err);
}

}

    }


getWeather();
  
  function displayData(a){
      let forecastDay1 = a.forecast.forecastday[0].date; 
      let forecastDay2 = a.forecast.forecastday[1].date; 
      let forecastDay3 = a.forecast.forecastday[2].date; 
  let dayName1 = new Date(forecastDay1).toLocaleDateString("en-US", { weekday: 'long' }); 
  let dayName2 = new Date(forecastDay2).toLocaleDateString("en-US", { weekday: 'long' }); 
  let dayName3 = new Date(forecastDay3).toLocaleDateString("en-US", { weekday: 'long' }); 

let show=`<div class="row d-flex flex-lg-column w-75 m-auto">
				<div class="container w-100 m-auto text-center d-flex flex-lg-row" id="showdata">
				
				
							<div class="col col-lg-4 p-2 firsth">${dayName1}</div>
							<div class="col col-lg-4 p-2 secondh">${dayName2}</div>
							<div class="col col-lg-4 p-2 thirdh">${dayName3}</div>
						
					
				</div>
				</div>
				
	
				<div class="row d-flex flex-lg-row w-75 m-auto">
	
				<div class="container w-100 m-auto text-center d-flex flex-lg-row " id="showdata">
				
				
							<div class="col col-lg-4 p-4 firstb d-flex flex-column">
								<div class="w-100">
								<div>${a.location.name} | ${a.location.region}</div>
											
								<div class="maxcurr">${a.current.temp_c} <sup>o</sup>C</div>
							<div> <img width="70px" src="https:${a.current.condition.icon}" > </div>	
							<div> <small class="text-primary"> ${a.current.condition.text} </small></div>	
	
				<div class="lastline d-flex flex-lg-row mt-5">
				<div class="p-2"> <span class="m-1"> <img src="images/icon-umberella.png" alt="umb"> 20%</span></div>
				<div class="p-2"><span class="m-1"> <img src="images/icon-wind.png" alt="umb"> 18km/h</span></div>
				<div class="p-2"><span class="m-1"> <img src="images/icon-compass.png" alt="umb"> East</span></div>
				</div>
							</div>
							</div>
	
							<div class="col col-lg-4 p-4 secondb d-flex flex-column">	
	<div class="w-100"> <br>
								<img width="70px" src="https:${a.forecast.forecastday[1].day.condition.icon}"></div> <br>
					  <div class="maxnext">${a.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
  <div>${a.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div> <br>
							<div>  <small class="text-primary"> ${a.forecast.forecastday[1].day.condition.text}</small></div>
	                       </div>
						
	
	
							<div class="col col-lg-4 p-4 thirdb d-flex flex-column">
								<div class="w-100"><br>
								<img width="70px" src="https:${a.forecast.forecastday[2].day.condition.icon}"><br/></div> <br>
						  <div class="maxnext">${a.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>	 
									  <div>${a.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div> <br>
							<div>	<small class="text-primary">${a.forecast.forecastday[2].day.condition.text}</small></div>
						</div>	
					</div>
						
					
						
					
				</div>`


document.getElementById("showdata").innerHTML= show;
  }

