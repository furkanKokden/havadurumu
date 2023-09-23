const url = `https://api.openweathermap.org/data/2.5/weather?q=`;
const apiid = `d9b18bdbd229d0d23a37ba9eda59c0a2`;

var input = document.querySelector("#şehir");


const displayResult = (result) =>{

    var derece = document.getElementById("degres");
    derece.innerText = result.main.temp;
    var durum = document.getElementById("durum");
    durum.innerText = result.weather[0].description;


    var image = document.getElementById("test");
    var silinecekImg = image.querySelector("img"); 
    if (silinecekImg) {
        image.removeChild(silinecekImg); 
    }
    
    
    var iconImg = document.createElement("img");
    iconImg.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    iconImg.alt = "image";

    // Oluşturduğumuz img elementini cityDiv içine ekliyoruz
    image.appendChild(iconImg);
}

function functions() {
    var city = input.value; 

    let query = `${url}${city}&appid=${apiid}&units=metric&lang=tr`;

    fetch(query)
    .then(weather => { 
        return weather.json();
    })
    .then(displayResult);
}




