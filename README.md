# Weather

A city weather dashboard. Search any city, see current conditions, clothing advice, sun safety, and daylight remaining. Built on the Open-Meteo API.

## [Live Demo](https://icedpepperminttea.github.io/weather-app/)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)

---

## About

A React weather app for looking up any city and seeing a full picture of current conditions at a glance — temperature, feels-like, humidity, wind, UV index, sun safety, daylight left, and what to wear. All data comes live from Open-Meteo's free geocoding and forecast APIs (no API key required).

## Features

- Debounced city search with live geocoding matches (name, region, country, population, elevation)
- Current conditions: temperature, feels-like, humidity, wind speed/direction, UV index
- Animated weather icons (14 conditions: clear, partly cloudy, overcast, fog, drizzle, rain, snow, sleet, thunder — day/night variants)
- Clothing advice based on temperature, precipitation, and wind
- Sun safety (UV index + guidance) and daylight-remaining countdown
- Responsive layout

## Getting Started

### Prerequisites

- Node.js and npm
- No API key needed: Open-Meteo's geocoding, forecast, and air-quality endpoints are free and don't require authentication keys

### Installation

1. Clone the repository
   ```bash
   git clone <repo url - https or ssh>
   cd weather
   ```
2. Install dependencies
   ```bash
   npm install
   ```

## Usage

```bash
npm run dev
```

Type a city name in the search bar, select a match, and the dashboard populates with live forecast data for that location.

## Configuration

No environment variables are required. All requests hit Open-Meteo's public endpoints directly:

| Endpoint                                        | Purpose                                 |
| ----------------------------------------------- | --------------------------------------- |
| `geocoding-api.open-meteo.com/v1/search`        | City search/autocomplete                |
| `api.open-meteo.com/v1/forecast`                | Current, hourly, and daily forecast     |
| `air-quality-api.open-meteo.com/v1/air-quality` | US AQI (planned for future enhancement) |

## Project Structure

```
.
├── src/
│   ├── App.jsx               # Root state: selectedCity, forecast
│   ├── App.css                # Component styling (CSS variables + classes)
│   ├── index.css              # Global/base styles
│   └── components/
│       ├── Search.jsx            # city search input
│       ├── Matches.jsx           # Search results dropdown
│       ├── Match.jsx             # Single search result row
│       ├── CityHeader.jsx        # City name / admin1 / country
│       ├── CityMeta.jsx          # Population / elevation / coords
│       ├── WeatherDashboard.jsx  # Main dashboard
│       ├── CurrentTemp.jsx       # Temp + weather icon + feels-like
│       ├── CurrentConditions.jsx # Humidity / wind / UV strip
│       ├── WeatherIcon.jsx       # Layered CSS icon renderer
│       ├── ToWear.jsx            # Clothing advice
│       └── ExtraCards.jsx        # Sun safety / daylight left / air quality
└── README.md
```

## Roadmap

- [x] City search + geocoding
- [x] Current conditions dashboard
- [x] Weather icon set
- [x] Clothing advice
- [x] Sun safety + daylight countdown
- [ ] Air quality (US AQI) inclusion
- [ ] Hourly forecast strip
- [ ] 7-day forecast
- [ ] Geolocation button + recents (localStorage)
- [ ] Theme swap based on conditions (sunny/overcast/rainy)
- [ ] Daylight hour remaining not live-ticking (recompute with useEffect and setInterval)
