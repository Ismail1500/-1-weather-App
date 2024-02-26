
const temperaturefield = document.querySelector(".temp p")
const locationfield = document.querySelector(".city");
const datetimefield = document.querySelector(".dateTime");
const weathericon = document.querySelector(".icon")
const weathertext = document.querySelector('.weathertext')
const searchfield = document.querySelector(".searchInput")
const btnSearch = document.querySelector(".searchButton")

btnSearch.addEventListener( "click", searchforlocation);

let target = "Channai"
let tempResult = async (targetLocation) => {


    let url = `http://api.weatherapi.com/v1/current.json?key=3ac3ffc0e55e4a49945210434242502&q=${targetLocation}&aqi=no    `
    let  res = await fetch(url);
    let data = await res.json();
    console.log(data)
    
    let temp = data.current.temp_c;
    let city = data.location.name;
    let dateTime = data.location.localtime;
    let icon = data.current.condition.icon;
    let text = data.current.condition.text;

    weathericon.src = icon;

    updateDetails(temp, city, dateTime, icon, text);

}

function updateDetails(temp, city, dateTime, icon, text){
    //update the UI with new values
    temperaturefield.innerText = temp;
    locationfield.innerText = city;
    datetimefield.innerText = dateTime;
    weathericon.innerText = icon;
    weathertext.innerText = text;

}

function  searchforlocation(e) {
    //
    e.preventDefault()
    target = searchfield.value;
    tempResult(target)
}

tempResult(target)