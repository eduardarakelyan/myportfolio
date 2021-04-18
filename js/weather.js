const button = document.querySelector(".subBtn");
const inputValue = document.querySelector(".inputValue");
let name = document.querySelector('.weather--h1name');
const description = document.querySelector('.weather--pdesc');
const temperature = document.querySelector('.weather--ptemp');
const display = document.querySelector('.weather--display');
const tempBtn = document.querySelector('.weather--atempBtn');
const instructions = document.querySelector(".weather--instructions");
display.style.display = 'none';

const kelvinToFahrenheit = (kelvin) => {
    return Math.round((kelvin - 273.15) * 9/5 + 32) + `&deg`;
}

button.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=203c8b6fdadd3a4da0a13715cd267fec`)
    .then(response => response.json())
    .then(data => {
        display.style.display = 'block';
        instructions.style.display = "none";
        
        const nameValue = data['name'];
        const tempValue = kelvinToFahrenheit((data['main']['temp'])); 
        const descValue = data['weather'][0]['description'];
        if(descValue.includes("rain")) {
            display.style.backgroundImage = `url('/img/pexels-pixabay-rain.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("clear")) {
            display.style.backgroundImage = `url('/img/pexels-artur-roman-clearsky.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("clouds")) {
            display.style.backgroundImage = `url('/img/pexels-magda-ehlers-clouds.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("thunderstom")) {
            display.style.backgroundImage = `url('/img/pexels-pixabay-thunderstorm.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("snow")) {
            display.style.backgroundImage = `url('/img/pexels-ruvim-miksanskiy-snow.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("haze")){
            display.style.backgroundImage = `url('/img/pexels-eberhard-grossgasteiger-haze.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("dust")){
            display.style.backgroundImage = `url('/img/pexels-button-pusher-dust.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("fog")){
            display.style.backgroundImage = `url('/img/pexels-karol-wiśniewski-fog.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("sand")){
            display.style.backgroundImage = `url('/img/pexels-francesco-ungaro-sand.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("smoke")){
            display.style.backgroundImage = `url('/img/pexels-eberhard-grossgasteiger-smoke.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("mist")){
            display.style.backgroundImage = `url('/img/pexels-pixabay-mist.jpg')`;
            display.style.backgroundSize = `cover`;
        }else if(descValue.includes("drizzle")){
            display.style.backgroundImage = `url('/img/pexels-vlad-chețan-drizzle.jpg')`;
            display.style.backgroundSize = `cover`;
        }else {
            display.style.backgroundImage = `url('/img/pexels-rachel-claire-weather.jpg')`;
            display.style.backgroundSize = `cover`;
        } 
        name.innerHTML = nameValue.toUpperCase();
        temperature.innerHTML = tempValue; 
        description.innerHTML = descValue.toUpperCase(); 
    }) 


    .catch(function(err) { 
        alert("Wrong city name!");
        display.style.display = "none";
    });
})
