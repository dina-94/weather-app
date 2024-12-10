

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









/*async function search(a) {
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
    if (t.ok && 400 != t.status) {
        let a = await t.json();
        displayCurrent(a.location, a.current),
        displayAnother(a.forecast.forecastday)
    }
}
document.getElementById("search").addEventListener("keyup", a => {
    search(a.target.value)
}
);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function displayCurrent(a, t) {
    if (null != t) {
        var e = new Date(t.last_updated.replace(" ", "T"));
        let n = `<div class="today forecast">\n    <div class="forecast-header"  id="today">\n  
          <div class="day">${days[e.getDay()]}</div>\n  
            <div class=" date">${e.getDate() + monthNames[e.getMonth()]}</div>\n   
           </div> \x3c!-- .forecast-header --\x3e\n  
             <div class="forecast-content" id="current">\n   
            <div class="location">${a.name}</div>\n  
              <div class="degree">\n    
                  <div class="num">${t.temp_c}<sup>o</sup>C</div>\n  
                      \n     
       <div class="forecast-icon">\n        
   <img src="https:${t.condition.icon}" alt="" width=90>\n        </div>
</div>\n   
  <div class="custom">${t.condition.text}</div>\n  
<span><img src="images/icon-umberella.png" alt="">20%</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-wind.png" alt="">18km/h</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-compass.png" alt="">East</span>\n  
          </div>\n</div>`;
        document.getElementById("forecast").innerHTML = n
    }
}
function displayAnother(a) {
    let t = "";
    for (let e = 1; e < a.length; e++)
        t += `\t<div class="forecast">\n        <div class="forecast-header">\n         
       <div class="day">${days[new Date(a[e].date.replace(" ", "T")).getDay()]}</div>\n   
            </div> \x3c!-- .forecast-header --\x3e\n        <div class="forecast-content">\n     
                   <div class="forecast-icon">\n                <img src="https:${a[e].day.condition.icon}" alt="" width=48>\n       
                        </div>\n            <div class="degree">${a[e].day.maxtemp_c}<sup>o</sup>C</div>\n       
                             <small>${a[e].day.mintemp_c}<sup>o</sup></small>\n         
                                <div class="custom">${a[e].day.condition.text}</div>\n    
                                    </div>\n    
                                        </div>`;
    document.getElementById("forecast").innerHTML += t
}
search("cairo"); */




