
let searchCity = document.querySelector(".searchBar input")
let searchBtn = document.querySelector(".searchBar button")
let weatherIcon = document.querySelector(".weather-icon") 
searchBtn.addEventListener("click",()=>{
  let place=searchCity.value
  searchCity.value=""
  let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=f2f024ec31260c0b9eab4509043ad3c8&q="+place
  let p = fetch(apiUrl)
  p.then((response)=>{
    return response.json()
  }).then((data)=>{
    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" °C"
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"
    weatherIcon.src = "images/"+data.weather[0].main+".png"
    console.log("images/"+data.weather[0].main+".png")
    console.log(data.weather[0].main)
  })
})
