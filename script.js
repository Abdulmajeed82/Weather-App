// Weather data simulation with forecast data
const weatherData = {
  kaduna: {
    location: "Kaduna",
    temperature: 25,
    condition: "Cloudy",
    humidity: 44,
    windSpeed: 2,
    icon: "https://openweathermap.org/img/wn/10d@2x.png",
    forecast: [
      { day: "Monday", temp: 29, condition: "Thunderstorm", icon: "https://openweathermap.org/img/wn/11d@2x.png" },
      { day: "Tuesday", temp: 27, condition: "Partly Cloudy", icon: "https://openweathermap.org/img/wn/02d@2x.png" },
      { day: "Wednesday", temp: 31, condition: "Clear Sky", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
    ],
  },
  lagos: {
    location: "Lagos",
    temperature: 28,
    condition: "Sunny",
    humidity: 65,
    windSpeed: 3,
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    forecast: [
      { day: "Monday", temp: 30, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Tuesday", temp: 32, condition: "Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Wednesday", temp: 29, condition: "Partly Cloudy", icon: "https://openweathermap.org/img/wn/02d@2x.png" },
    ],
  },
  abuja: {
    location: "Abuja",
    temperature: 23,
    condition: "Partly Cloudy",
    humidity: 52,
    windSpeed: 1,
    icon: "https://openweathermap.org/img/wn/02d@2x.png",
    forecast: [
      { day: "Monday", temp: 25, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/03d@2x.png" },
      { day: "Tuesday", temp: 22, condition: "Light Rain", icon: "https://openweathermap.org/img/wn/10d@2x.png" },
      { day: "Wednesday", temp: 26, condition: "Partly Cloudy", icon: "https://openweathermap.org/img/wn/02d@2x.png" },
    ],
  },
  kano: {
    location: "Kano",
    temperature: 30,
    condition: "Hot",
    humidity: 35,
    windSpeed: 4,
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
    forecast: [
      { day: "Monday", temp: 33, condition: "Very Hot", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Tuesday", temp: 31, condition: "Sunny", icon: "https://openweathermap.org/img/wn/01d@2x.png" },
      { day: "Wednesday", temp: 28, condition: "Partly Cloudy", icon: "https://openweathermap.org/img/wn/02d@2x.png" },
    ],
  },
  "port harcourt": {
    location: "Port Harcourt",
    temperature: 26,
    condition: "Rainy",
    humidity: 78,
    windSpeed: 2,
    icon: "https://openweathermap.org/img/wn/10d@2x.png",
    forecast: [
      { day: "Monday", temp: 24, condition: "Heavy Rain", icon: "https://openweathermap.org/img/wn/09d@2x.png" },
      { day: "Tuesday", temp: 25, condition: "Light Rain", icon: "https://openweathermap.org/img/wn/10d@2x.png" },
      { day: "Wednesday", temp: 27, condition: "Cloudy", icon: "https://openweathermap.org/img/wn/04d@2x.png" },
    ],
  },
}

// DOM elements
const cityInput = document.getElementById("cityInput")
const searchButton = document.getElementById("searchButton")
const locationText = document.getElementById("locationText")
const dateText = document.getElementById("dateText")
const temperatureText = document.getElementById("temperatureText")
const conditionText = document.getElementById("conditionText")
const weatherIcon = document.getElementById("weatherIcon")
const humidityText = document.getElementById("humidityText")
const windText = document.getElementById("windText")
const mainContainer = document.querySelector(".main-container")

// Initialize date
function updateDate() {
  const now = new Date()
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  dateText.textContent = now.toLocaleDateString("en-US", options)
}

// Update weather display with enhanced animations
function updateWeatherDisplay(data) {
  
  const weatherSummary = document.querySelector(".weather-summary-container")
  weatherSummary.style.opacity = "0.5"
  weatherSummary.style.transform = "scale(0.95)"

  setTimeout(() => {
    locationText.textContent = data.location
    temperatureText.textContent = `${data.temperature}°C`
    conditionText.textContent = data.condition
    humidityText.textContent = `${data.humidity}%`
    windText.textContent = `${data.windSpeed} M/s`
    weatherIcon.src = data.icon
    weatherIcon.alt = `${data.condition} weather icon`

    // Restore animation
    weatherSummary.style.opacity = "1"
    weatherSummary.style.transform = "scale(1)"

    
    updateForecast(data.forecast)
  }, 200)
}

function updateForecast(forecastData) {
  forecastData.forEach((day, index) => {
    const forecastItem = document.getElementById(`forecast-day-${index + 1}`)
    if (forecastItem) {
      
      setTimeout(() => {
        const dayElement = forecastItem.querySelector(".forecast-item-date")
        const iconElement = forecastItem.querySelector(".forecast-item-icon")
        const tempElement = forecastItem.querySelector(".forecast-item-temp")

      
        forecastItem.style.opacity = "0.5"
        forecastItem.style.transform = "translateX(-10px)"

        setTimeout(() => {
          dayElement.textContent = day.day
          iconElement.src = day.icon
          iconElement.alt = day.condition
          tempElement.textContent = `${day.temp}°C`

          
          forecastItem.style.opacity = "1"
          forecastItem.style.transform = "translateX(0)"
        }, 150)
      }, index * 100) // Staggered delay
    }
  })
}

// Search weather function
function searchWeather() {
  const city = cityInput.value.trim().toLowerCase()

  if (!city) {
    showError("Please enter a city name")
    return
  }

  // Add loading state
  mainContainer.classList.add("loading")

  // Show loading message
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


function showInfo(message) {
  const existingInfo = document.querySelector(".info-message")
  if (existingInfo) {
    existingInfo.remove()
  }

  const infoDiv = document.createElement("div")
  infoDiv.className = "info-message"
  infoDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 123, 255, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-size: 14px;
    `
  infoDiv.textContent = message
  document.body.appendChild(infoDiv)

  setTimeout(() => {
    infoDiv.remove()
  }, 2000)
}


function showError(message) {
  const existingError = document.querySelector(".error-message")
  if (existingError) {
    existingError.remove()
  }

  const errorDiv = document.createElement("div")
  errorDiv.className = "error-message"
  errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-size: 14px;
    `
  errorDiv.textContent = message
  document.body.appendChild(errorDiv)

  setTimeout(() => {
    errorDiv.remove()
  }, 3000)
}


function showSuccess(message) {
  const existingSuccess = document.querySelector(".success-message")
  if (existingSuccess) {
    existingSuccess.remove()
  }

  const successDiv = document.createElement("div")
  successDiv.className = "success-message"
  successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 255, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-size: 14px;
    `
  successDiv.textContent = message
  document.body.appendChild(successDiv)

  setTimeout(() => {
    successDiv.remove()
  }, 2000)
}


function addQuickCityButtons() {
  const quickCitiesContainer = document.createElement("div")
  quickCitiesContainer.className = "quick-cities"
  quickCitiesContainer.style.cssText = `
    display: flex;
    gap: 8px;
    margin-bottom: 15px;
    flex-wrap: wrap;
    justify-content: center;
  `

  const cities = ["Lagos", "Abuja", "Kano", "Port Harcourt", "Kaduna"]

  cities.forEach((city) => {
    const button = document.createElement("button")
    button.textContent = city
    button.className = "quick-city-btn"
    button.style.cssText = `
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      padding: 5px 12px;
      border-radius: 15px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
    `

    button.addEventListener("click", () => {
      cityInput.value = city.toLowerCase()
      searchWeather()
    })

    button.addEventListener("mouseenter", function () {
      this.style.background = "rgba(255, 255, 255, 0.3)"
      this.style.transform = "scale(1.05)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.background = "rgba(255, 255, 255, 0.2)"
      this.style.transform = "scale(1)"
    })

    quickCitiesContainer.appendChild(button)
  })

  const inputContainer = document.querySelector(".input-container")
  inputContainer.parentNode.insertBefore(quickCitiesContainer, inputContainer.nextSibling)
}

// Event listeners
searchButton.addEventListener("click", searchWeather)

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchWeather()
  }
})

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  updateDate()
  addQuickCityButtons()

  
  updateForecast(weatherData.kaduna.forecast)

  
  setInterval(updateDate, 60000)
})


searchButton.addEventListener("mouseenter", function () {
  this.style.transform = "scale(1.05)"
})

searchButton.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)"
})


cityInput.addEventListener("focus", function () {
  this.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.3)"
})

cityInput.addEventListener("blur", function () {
  this.style.boxShadow = "none"
})


function handleResize() {
  const width = window.innerWidth
  const height = window.innerHeight

  
  if (width < 350) {
    mainContainer.style.width = "98%"
    mainContainer.style.padding = "15px"
  }

  
  if (width > height && width < 768) {
    document.body.style.padding = "5px"
    mainContainer.style.maxHeight = "95vh"
    mainContainer.style.overflowY = "auto"
  } else {
    document.body.style.padding = ""
    mainContainer.style.maxHeight = ""
    mainContainer.style.overflowY = ""
  }
}


window.addEventListener("resize", handleResize)
window.addEventListener("orientationchange", () => {
  setTimeout(handleResize, 100) // Delay to ensure orientation change is complete
})


handleResize()


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


document.querySelectorAll(".forecast-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
    this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)"
  })

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
    this.style.boxShadow = "none"
  })
})
