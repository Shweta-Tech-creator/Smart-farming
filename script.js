const weatherApiKey = '703497bc0b24c3ba37f2e4c452f215a3'; 
const getWeatherButton = document.getElementById('getWeatherButton');
const locationInput = document.getElementById('locationInput');
const weatherResult = document.getElementById('weatherResult');
const weatherLocation = document.getElementById('weatherLocation');
const weatherTemp = document.getElementById('weatherTemp');
const weatherCondition = document.getElementById('weatherCondition');

getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value.trim();

    if (location === '') {
        alert('Please enter a location!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                weatherLocation.textContent = `${data.name}, ${data.sys.country}`;
                weatherTemp.textContent = data.main.temp;
                weatherCondition.textContent = data.weather[0].description;
                weatherResult.classList.remove('hidden');
            } else {
                alert('Location not found!');
            }
        })
        .catch(() => {
            alert('Error fetching weather data!');
        });
});
const getCropButton = document.getElementById('getCropButton');
const soilType = document.getElementById('soilType');
const cropResult = document.getElementById('cropResult');
const recommendedCrops = document.getElementById('recommendedCrops');

const cropRecommendations = {
    loamy: ['Wheat', 'Sugarcane', 'Cotton', 'Pulses', 'Oilseeds'],
    sandy: ['Cereals', 'Vegetables', 'Groundnuts'],
    clayey: ['Rice', 'Sugarcane', 'Jute', 'Paddy']
};

getCropButton.addEventListener('click', () => {
    const soil = soilType.value;

    if (cropRecommendations[soil]) {
        recommendedCrops.textContent = cropRecommendations[soil].join(', ');
        cropResult.classList.remove('hidden');
    } else {
        alert('Error fetching crop recommendations!');
    }
});














