const weatherApi = {
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  key: "e23106df7b271ac84710b9bab8472b03"
}

const searchInputBox = document.getElementById('inputValue');

// eventListener
searchInputBox.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    // console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
  }
});

// Get Weather Report
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
      return weather.json();
    }).then(showWeatherReport)
    .catch(err => alert('Wrong City Name!! Try Again'))
}



// show weather report
function showWeatherReport(weather) {
  // console.log(weather);

  let city = document.getElementById('city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let temp = document.getElementById('temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
  let minMaxTemp = document.getElementById('min-max');
  minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
  let weatherType = document.getElementById('weather');
  weatherType.innerHTML = `${weather.weather[0].main}`;
  let date = document.getElementById('date');
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);
}

// date manage
function dateManage(dateArg) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
}






// // e23106df7b271ac84710b9bab8472b03

// var button = document.querySelector('.button');
// var inputValue = document.querySelector('.inputValue');
// var name =  document.querySelector('.name');
// var desc =  document.querySelector('.desc');
// var temp =  document.querySelector('.temp');


// button.addEventListener('click', function(){
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e23106df7b271ac84710b9bab8472b03')
// .then(response => response.json())
// .then(data => {
//   var nameValue = data['name'];
//   var tempValue = data['main']['temp'];
//   var descValue = data['weather'][0]['description'];

//   name.innerHMTL = nameValue;
//   temp.innerHTML = tempValue;
//   desc.innerHTML = descValue;

// })



// .catch(err => alert('Wrong City Name!!'))
// })