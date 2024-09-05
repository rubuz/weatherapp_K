# Weather App

The Weather App is a SPA (Single-Page Application) built with React. It allows users to search for weather information in different cities and displays the current weather conditions for the selected cities.

![screenshot of an app](https://i.ibb.co/GWBjXh6/weatherapp.png)

## Table of Contents

- [Features](#features)
- [Built with](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contact](#contact)

## Features

- Search for weather information by city name.
- Display current temperature, "feels like" temperature, minimum and maximum temperatures, humidity, and weather icons.
- Display weather information for up to 5 cities.
- Click on a city card to refresh the information and move the updated card to the top of the list.
- Show an error message for invalid or empty input.

## Built with

- React
- Typescript
- Vite
- TailwindCSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) and npm installed on your machine
- An [OpenWeather](https://openweathermap.org/api) account and an API key

### Installation

1. Clone the repository:

```
git clone https://github.com/rubuz/weatherapp_K.git
```

2. Install the dependencies:

```
npm install
```

3. Create a **.env.local** file in the root directory and add your **OpenWeather API key**:

```
VITE_OPENWEATHER_API=your_openweather_api_key
```

## Usage

### Development

To start the development server, run:

```
npm run dev
```

This will start the Vite development server and open the application in your default browser.

### Build

To build the project for production, run:

```
npm run build
```

This will create a **dist** directory with the production build of the application.

### Preview

To preview the production build, run:

```
npm run preview
```

This will start a local server to preview the production build.

## Contact

Matjaž - rubuz23@gmail.com

Project link: [GitHub Repository](https://github.com/rubuz/weatherapp_K.git)

Live demo: [WeatherAPP](https://weatherapp-k.vercel.app/)
