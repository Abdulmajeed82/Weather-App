// Enhanced Weather Data with more details
const weatherData = {
  kaduna: {
    location: "Kaduna",
    temperature: 25,
    condition: "Cloudy",
    humidity: 44,
    windSpeed: 2,
    uvIndex: 5,
    pressure: 1013,
    visibility: 10,
    sunrise: "6:30 AM",
    sunset: "6:45 PM",
    feelsLike: 27,
    icon: "https://openweathermap.org/img/wn/10d@2x.png",
    forecast: [
      {
        day: "Monday",
        high: 29,
        low: 22,
        condition: "Thunderstorm",
        icon: "https://openweathermap.org/img/wn/11d@2x.png",
      },
      {
        day: "Tuesday",
        high: 27,
        low: 20,
        condition: "Partly Cloudy",
        icon: "https://openweathermap.org/img/wn/02d@2x.png",
      },
      {
        day: "Wednesday",
        high: 31,
        low: 24,
        condition: "Clear Sky",
        icon: "https://openweathermap.org/img/wn/01d@2x.png",
      },
      { day: "Thursday", high: 28, low: 21, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
      {
        day: "Friday",
        high: 26,
        low: 19,
        condition: "Light Rain",
        icon: "https://openweathermap.org/img/wn/10d@2x.png",
      },
      { day: "Saturday", high: 30, low: 23, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Sunday", high: 32, low: 25, condition: "Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
    ],
    hourly: [
      { time: "12 PM", temp: 25, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/10d@2x.png" },
      { time: "1 PM", temp: 26, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/10d@2x.png" },
      { time: "2 PM", temp: 27, condition: "Partly Cloudy", icon: "https://openweathermap.org/img/wn/02d@2x.png" },
      { time: "3 PM", temp: 28, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "4 PM", temp: 27, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
      { time: "5 PM", temp: 26, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
    ],
  },
  lagos: {
    location: "Lagos",
    temperature: 28,
    condition: "Sunny",
    humidity: 65,
    windSpeed: 3,
    uvIndex: 8,
    pressure: 1015,
    visibility: 15,
    sunrise: "6:15 AM",
    sunset: "6:30 PM",
    feelsLike: 32,
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    forecast: [
      { day: "Monday", high: 30, low: 25, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Tuesday", high: 32, low: 27, condition: "Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      {
        day: "Wednesday",
        high: 29,
        low: 24,
        condition: "Partly Cloudy",
        icon: "https://openweathermap.org/img/wn/02d@2x.png",
      },
      { day: "Thursday", high: 31, low: 26, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Friday", high: 28, low: 23, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
      { day: "Saturday", high: 30, low: 25, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Sunday", high: 33, low: 28, condition: "Very Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
    ],
    hourly: [
      { time: "12 PM", temp: 28, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "1 PM", temp: 29, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "2 PM", temp: 30, condition: "Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "3 PM", temp: 31, condition: "Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "4 PM", temp: 30, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "5 PM", temp: 29, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
    ],
  },
  abuja: {
    location: "Abuja",
    temperature: 23,
    condition: "Partly Cloudy",
    humidity: 52,
    windSpeed: 1,
    uvIndex: 4,
    pressure: 1018,
    visibility: 12,
    sunrise: "6:25 AM",
    sunset: "6:40 PM",
    feelsLike: 25,
    icon: "https://openweathermap.org/img/wn/02d@2x.png",
    forecast: [
      { day: "Monday", high: 25, low: 18, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
      {
        day: "Tuesday",
        high: 22,
        low: 16,
        condition: "Light Rain",
        icon: "https://openweathermap.org/img/wn/10d@2x.png",
      },
      {
        day: "Wednesday",
        high: 26,
        low: 19,
        condition: "Partly Cloudy",
        icon: "https://openweathermap.org/img/wn/02d@2x.png",
      },
      { day: "Thursday", high: 24, low: 17, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
      { day: "Friday", high: 21, low: 15, condition: "Rain", icon: "https://openweathermap.org/img/wn/09d@2x.png" },
      { day: "Saturday", high: 27, low: 20, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Sunday", high: 29, low: 22, condition: "Clear", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
    ],
    hourly: [
      { time: "12 PM", temp: 23, condition: "Partly Cloudy", icon: "https://openweathermap.org/img/wn/02d@2x.png" },
      { time: "1 PM", temp: 24, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
      { time: "2 PM", temp: 25, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
      { time: "3 PM", temp: 24, condition: "Partly Cloudy", icon: "https://openweathermap.org/img/wn/02d@2x.png" },
      { time: "4 PM", temp: 23, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
      { time: "5 PM", temp: 22, condition: "Light Rain", icon: "https://openweathermap.org/img/wn/10d@2x.png" },
    ],
  },
  kano: {
    location: "Kano",
    temperature: 30,
    condition: "Hot",
    humidity: 35,
    windSpeed: 4,
    uvIndex: 9,
    pressure: 1010,
    visibility: 20,
    sunrise: "6:10 AM",
    sunset: "6:25 PM",
    feelsLike: 35,
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    forecast: [
      { day: "Monday", high: 33, low: 26, condition: "Very Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Tuesday", high: 31, low: 24, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      {
        day: "Wednesday",
        high: 28,
        low: 21,
        condition: "Partly Cloudy",
        icon: "https://openweathermap.org/img/wn/02d@2x.png",
      },
      { day: "Thursday", high: 32, low: 25, condition: "Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Friday", high: 34, low: 27, condition: "Very Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Saturday", high: 29, low: 22, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Sunday", high: 31, low: 24, condition: "Clear", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
    ],
    hourly: [
      { time: "12 PM", temp: 30, condition: "Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "1 PM", temp: 32, condition: "Very Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "2 PM", temp: 34, condition: "Very Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "3 PM", temp: 35, condition: "Extreme Heat", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "4 PM", temp: 33, condition: "Very Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { time: "5 PM", temp: 31, condition: "Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
    ],
  },
  "port harcourt": {
    location: "Port Harcourt",
    temperature: 26,
    condition: "Rainy",
    humidity: 78,
    windSpeed: 2,
    uvIndex: 3,
    pressure: 1008,
    visibility: 8,
    sunrise: "6:20 AM",
    sunset: "6:35 PM",
    feelsLike: 29,
    icon: "https://openweathermap.org/img/wn/10d@2x.png",
    forecast: [
      {
        day: "Monday",
        high: 24,
        low: 20,
        condition: "Heavy Rain",
        icon: "https://openweathermap.org/img/wn/09d@2x.png",
      },
      {
        day: "Tuesday",
        high: 25,
        low: 21,
        condition: "Light Rain",
        icon: "https://openweathermap.org/img/wn/10d@2x.png",
      },
      {
        day: "Wednesday",
        high: 27,
        low: 23,
        condition: "Cloudy",
        icon: "https://openweathermap.org/img/wn/04d@2x.png",
      },
      { day: "Thursday", high: 26, low: 22, condition: "Rain", icon: "https://openweathermap.org/img/wn/09d@2x.png" },
      {
        day: "Friday",
        high: 23,
        low: 19,
        condition: "Thunderstorm",
        icon: "https://openweathermap.org/img/wn/11d@2x.png",
      },
      {
        day: "Saturday",
        high: 28,
        low: 24,
        condition: "Partly Cloudy",
        icon: "https://openweathermap.org/img/wn/02d@2x.png",
      },
      { day: "Sunday", high: 30, low: 26, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
    ],
    hourly: [
      { time: "12 PM", temp: 26, condition: "Rainy", icon: "https://openweathermap.org/img/wn/10d@2x.png" },
      { time: "1 PM", temp: 25, condition: "Heavy Rain", icon: "https://openweathermap.org/img/wn/09d@2x.png" },
      { time: "2 PM", temp: 24, condition: "Thunderstorm", icon: "https://openweathermap.org/img/wn/11d@2x.png" },
      { time: "3 PM", temp: 23, condition: "Heavy Rain", icon: "https://openweathermap.org/img/wn/09d@2x.png" },
      { time: "4 PM", temp: 25, condition: "Light Rain", icon: "https://openweathermap.org/img/wn/10d@2x.png" },
      { time: "5 PM", temp: 26, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/04d@2x.png" },
    ],
  },
}

// App State
let currentUnit = "celsius"
let currentTheme = "auto"
let animationsEnabled = true
const favorites = JSON.parse(localStorage.getItem("weatherFavorites")) || []
let currentLocation = "kaduna"

// DOM Elements
const cityInput = document.getElementById("cityInput")
const searchButton = document.getElementById("searchButton")
const locationBtn = document.getElementById("locationBtn")
const favoritesBtn = document.getElementById("favoritesBtn")
const settingsBtn = document.getElementById("settingsBtn")
const settingsPanel = document.getElementById("settingsPanel")
const closeSettings = document.getElementById("closeSettings")
const locationText = document.getElementById("locationText")
const dateText = document.getElementById("dateText")
const timeText = document.getElementById("timeText")
const temperatureText = document.getElementById("temperatureText")
const conditionText = document.getElementById("conditionText")
const feelsLikeText = document.getElementById("feelsLikeText")
const weatherIcon = document.getElementById("weatherIcon")
const humidityText = document.getElementById("humidityText")
const windText = document.getElementById("windText")
const uvText = document.getElementById("uvText")
const pressureText = document.getElementById("pressureText")
const visibilityText = document.getElementById("visibilityText")
const sunriseText = document.getElementById("sunriseText")
const favoriteToggle = document.getElementById("favoriteToggle")
const mainContainer = document.querySelector(".main-container")
const weatherAnimation = document.getElementById("weatherAnimation")
const hourlyForecast = document.getElementById("hourlyForecast")
const forecastList = document.getElementById("forecastList")
const quickCities = document.getElementById("quickCities")
const favoritesContainer = document.getElementById("favoritesContainer")
const favoritesList = document.getElementById("favoritesList")

// Utility Functions
function convertTemperature(temp, unit) {
  if (unit === "fahrenheit") {
    return Math.round((temp * 9) / 5 + 32)
  }
  return temp
}

function getTemperatureUnit() {
  return currentUnit === "celsius" ? "°C" : "°F"
}

function updateDateTime() {
  const now = new Date()
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }

  dateText.textContent = now.toLocaleDateString("en-US", dateOptions)
  timeText.textContent = now.toLocaleTimeString("en-US", timeOptions)
}

// Weather Animations
function createWeatherAnimation(condition) {
  if (!animationsEnabled) return

  weatherAnimation.innerHTML = ""

  if (condition.toLowerCase().includes("rain") || condition.toLowerCase().includes("storm")) {
    document.body.className = "rainy"
    createRainAnimation()
  } else if (condition.toLowerCase().includes("snow")) {
    document.body.className = "snowy"
    createSnowAnimation()
  } else if (condition.toLowerCase().includes("sunny") || condition.toLowerCase().includes("clear")) {
    document.body.className = "sunny"
  } else if (condition.toLowerCase().includes("storm")) {
    document.body.className = "stormy"
  } else {
    document.body.className = ""
  }
}

function createRainAnimation() {
  for (let i = 0; i < 50; i++) {
    const drop = document.createElement("div")
    drop.className = "rain-drop"
    drop.style.left = Math.random() * 100 + "%"
    drop.style.animationDelay = Math.random() * 2 + "s"
    drop.style.animationDuration = Math.random() * 0.5 + 0.5 + "s"
    weatherAnimation.appendChild(drop)
  }
}

function createSnowAnimation() {
  for (let i = 0; i < 30; i++) {
    const flake = document.createElement("div")
    flake.className = "snow-flake"
    flake.style.left = Math.random() * 100 + "%"
    flake.style.animationDelay = Math.random() * 3 + "s"
    flake.style.animationDuration = Math.random() * 2 + 2 + "s"
    weatherAnimation.appendChild(flake)
  }
}

// Geolocation
function getCurrentLocation() {
  if (!navigator.geolocation) {
    showError("Geolocation is not supported by this browser")
    return
  }

  showInfo("Getting your location...")

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords
      // In a real app, you'd use these coordinates with a geocoding API
      // For demo purposes, we'll simulate finding a nearby city
      const nearbyCity = findNearbyCity(latitude, longitude)
      if (nearbyCity) {
        cityInput.value = nearbyCity
        searchWeather()
      } else {
        showError("Could not determine your location")
      }
    },
    (error) => {
      showError("Unable to get your location: " + error.message)
    },
  )
}

function findNearbyCity(lat, lon) {
  // Simulate finding nearby city based on coordinates
  // In a real app, you'd use a reverse geocoding API
  const cities = ["lagos", "abuja", "kano", "port harcourt", "kaduna"]
  return cities[Math.floor(Math.random() * cities.length)]
}

// Favorites System
function toggleFavorite() {
  const location = currentLocation.toLowerCase()
  const index = favorites.indexOf(location)

  if (index > -1) {
    favorites.splice(index, 1)
    favoriteToggle.classList.remove("active")
    showInfo(`Removed ${weatherData[location].location} from favorites`)
  } else {
    favorites.push(location)
    favoriteToggle.classList.add("active")
    showInfo(`Added ${weatherData[location].location} to favorites`)
  }

  localStorage.setItem("weatherFavorites", JSON.stringify(favorites))
  updateFavoritesList()
}

function updateFavoritesList() {
  favoritesList.innerHTML = ""

  if (favorites.length === 0) {
    favoritesContainer.style.display = "none"
    return
  }

  favoritesContainer.style.display = "block"

  favorites.forEach((city) => {
    if (weatherData[city]) {
      const favoriteItem = document.createElement("div")
      favoriteItem.className = "favorite-item"
      favoriteItem.innerHTML = `
        <span>${weatherData[city].location}</span>
        <button class="remove-favorite" onclick="removeFavorite('${city}')">×</button>
      `
      favoriteItem.addEventListener("click", (e) => {
        if (!e.target.classList.contains("remove-favorite")) {
          cityInput.value = city
          searchWeather()
        }
      })
      favoritesList.appendChild(favoriteItem)
    }
  })
}

function removeFavorite(city) {
  const index = favorites.indexOf(city)
  if (index > -1) {
    favorites.splice(index, 1)
    localStorage.setItem("weatherFavorites", JSON.stringify(favorites))
    updateFavoritesList()

    if (currentLocation === city) {
      favoriteToggle.classList.remove("active")
    }
  }
}

// Update Weather Display
function updateWeatherDisplay(data) {
  currentLocation = data.location.toLowerCase().replace(" ", " ")

  // Update main weather info
  locationText.textContent = data.location
  temperatureText.textContent = `${convertTemperature(data.temperature, currentUnit)}${getTemperatureUnit()}`
  conditionText.textContent = data.condition
  feelsLikeText.textContent = `Feels like ${convertTemperature(data.feelsLike, currentUnit)}${getTemperatureUnit()}`
  weatherIcon.src = data.icon
  weatherIcon.alt = `${data.condition} weather icon`

  // Update weather details
  humidityText.textContent = `${data.humidity}%`
  windText.textContent = `${data.windSpeed} M/s`
  uvText.textContent = `${data.uvIndex} ${getUVDescription(data.uvIndex)}`
  pressureText.textContent = `${data.pressure} hPa`
  visibilityText.textContent = `${data.visibility} km`
  sunriseText.textContent = data.sunrise

  // Update favorite status
  const locationKey = data.location.toLowerCase().replace(" ", " ")
  if (favorites.includes(locationKey)) {
    favoriteToggle.classList.add("active")
  } else {
    favoriteToggle.classList.remove("active")
  }

  // Update forecasts
  updateHourlyForecast(data.hourly)
  updateExtendedForecast(data.forecast)

  // Create weather animation
  createWeatherAnimation(data.condition)
}

function getUVDescription(uvIndex) {
  if (uvIndex <= 2) return "Low"
  if (uvIndex <= 5) return "Moderate"
  if (uvIndex <= 7) return "High"
  if (uvIndex <= 10) return "Very High"
  return "Extreme"
}

function updateHourlyForecast(hourlyData) {
  hourlyForecast.innerHTML = ""

  hourlyData.forEach((hour) => {
    const hourlyItem = document.createElement("div")
    hourlyItem.className = "hourly-item"
    hourlyItem.innerHTML = `
      <div class="hourly-time">${hour.time}</div>
      <img class="hourly-icon" src="${hour.icon}" alt="${hour.condition}">
      <div class="hourly-temp">${convertTemperature(hour.temp, currentUnit)}${getTemperatureUnit()}</div>
      <div class="hourly-condition">${hour.condition}</div>
    `
    hourlyForecast.appendChild(hourlyItem)
  })
}

function updateExtendedForecast(forecastData) {
  forecastList.innerHTML = ""

  forecastData.forEach((day) => {
    const forecastItem = document.createElement("div")
    forecastItem.className = "forecast-item"
    forecastItem.innerHTML = `
      <div class="forecast-left">
        <div class="forecast-day">${day.day}</div>
        <img class="forecast-icon" src="${day.icon}" alt="${day.condition}">
        <div class="forecast-condition">${day.condition}</div>
      </div>
      <div class="forecast-right">
        <div class="forecast-high">${convertTemperature(day.high, currentUnit)}°</div>
        <div class="forecast-low">${convertTemperature(day.low, currentUnit)}°</div>
      </div>
    `
    forecastList.appendChild(forecastItem)
  })
}

// Search Weather Function
function searchWeather() {
  const city = cityInput.value.trim().toLowerCase()

  if (!city) {
    showError("Please enter a city name")
    return
  }

  mainContainer.classList.add("loading")
  showInfo(`Searching weather for "${city}"...`)

  setTimeout(() => {
    if (weatherData[city]) {
      updateWeatherDisplay(weatherData[city])
      cityInput.value = ""
      showSuccess(`Weather updated for ${weatherData[city].location}! 🌤️`)
    } else {
      showError(`Weather data not found for "${city}". Try: Lagos, Abuja, Kano, Port Harcourt, or Kaduna`)
    }

    mainContainer.classList.remove("loading")
  }, 1000)
}

// Settings Functions
function updateUnits() {
  if (currentLocation && weatherData[currentLocation]) {
    updateWeatherDisplay(weatherData[currentLocation])
  }
}

function updateTheme(theme) {
  currentTheme = theme
  document.body.setAttribute("data-theme", theme)
  localStorage.setItem("weatherTheme", theme)
}

function toggleAnimations(enabled) {
  animationsEnabled = enabled
  localStorage.setItem("weatherAnimations", enabled)

  if (!enabled) {
    weatherAnimation.innerHTML = ""
    document.body.className = ""
  } else if (currentLocation && weatherData[currentLocation]) {
    createWeatherAnimation(weatherData[currentLocation].condition)
  }
}

// Message Functions
function showInfo(message) {
  removeExistingMessages()
  const infoDiv = createMessage(message, "rgba(0, 123, 255, 0.9)")
  setTimeout(() => infoDiv.remove(), 2000)
}

function showError(message) {
  removeExistingMessages()
  const errorDiv = createMessage(message, "rgba(255, 0, 0, 0.8)")
  setTimeout(() => errorDiv.remove(), 3000)
}

function showSuccess(message) {
  removeExistingMessages()
  const successDiv = createMessage(message, "rgba(0, 255, 0, 0.8)")
  setTimeout(() => successDiv.remove(), 2000)
}

function createMessage(message, backgroundColor) {
  const messageDiv = document.createElement("div")
  messageDiv.className = "message"
  messageDiv.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: ${backgroundColor};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1000;
    font-size: 14px;
    max-width: 90%;
    text-align: center;
  `
  messageDiv.textContent = message
  document.body.appendChild(messageDiv)
  return messageDiv
}

function removeExistingMessages() {
  document.querySelectorAll(".message").forEach((msg) => msg.remove())
}

// Quick Cities Setup
function setupQuickCities() {
  const cities = ["Lagos", "Abuja", "Kano", "Port Harcourt", "Kaduna"]

  cities.forEach((city) => {
    const button = document.createElement("button")
    button.textContent = city
    button.className = "quick-city-btn"

    button.addEventListener("click", () => {
      cityInput.value = city.toLowerCase()
      searchWeather()
    })

    quickCities.appendChild(button)
  })
}

// Event Listeners
searchButton.addEventListener("click", searchWeather)
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchWeather()
  }
})

locationBtn.addEventListener("click", getCurrentLocation)
favoriteToggle.addEventListener("click", toggleFavorite)

favoritesBtn.addEventListener("click", () => {
  const isVisible = favoritesContainer.style.display !== "none"
  favoritesContainer.style.display = isVisible ? "none" : "block"
})

settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.add("active")
})

closeSettings.addEventListener("click", () => {
  settingsPanel.classList.remove("active")
})

// Settings Event Listeners
document.querySelectorAll(".unit-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".unit-btn").forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    currentUnit = btn.dataset.unit
    localStorage.setItem("weatherUnit", currentUnit)
    updateUnits()
  })
})

document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".theme-btn").forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    updateTheme(btn.dataset.theme)
  })
})

document.querySelectorAll(".animation-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".animation-btn").forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    toggleAnimations(btn.dataset.animation === "on")
  })
})

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  // Load saved settings
  currentUnit = localStorage.getItem("weatherUnit") || "celsius"
  currentTheme = localStorage.getItem("weatherTheme") || "auto"
  animationsEnabled = localStorage.getItem("weatherAnimations") !== "false"

  // Apply saved settings
  document.querySelector(`[data-unit="${currentUnit}"]`).classList.add("active")
  document.querySelector(`[data-theme="${currentTheme}"]`).classList.add("active")
  document.querySelector(`[data-animation="${animationsEnabled ? "on" : "off"}"]`).classList.add("active")

  updateTheme(currentTheme)

  // Setup UI
  setupQuickCities()
  updateFavoritesList()
  updateDateTime()

  // Initialize with default weather
  updateWeatherDisplay(weatherData.kaduna)

  // Update time every minute
  setInterval(updateDateTime, 60000)
})

// Responsive handling
function handleResize() {
  const width = window.innerWidth

  if (width < 350) {
    mainContainer.style.width = "98%"
    mainContainer.style.padding = "15px"
  }
}

window.addEventListener("resize", handleResize)
window.addEventListener("orientationchange", () => {
  setTimeout(handleResize, 100)
})

// Prevent zoom on iOS
let lastTouchEnd = 0
document.addEventListener(
  "touchend",
  (event) => {
    const now = new Date().getTime()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }
    lastTouchEnd = now
  },
  false,
)

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case "k":
        e.preventDefault()
        cityInput.focus()
        break
      case "l":
        e.preventDefault()
        getCurrentLocation()
        break
      case ",":
        e.preventDefault()
        settingsPanel.classList.add("active")
        break
    }
  }
})

handleResize()
