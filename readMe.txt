# Weather App

## Overview

The Weather App is a web application that provides weather information for a given location. It fetches weather data from a third-party API and displays it in a user-friendly interface.

## Features

- Display current weather conditions including temperature, humidity, wind speed, and UV index.
- Show a 5-day weather forecast with details for each day.
- Visual representation of weather conditions using icons.
- Responsive design for a seamless experience on different devices.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- HTML/CSS: Markup and styling for the application.
- Typescript: The primary programming language used in the backend.
- Axios: A library for making HTTP requests to fetch weather data.
- [Third-party Weather API]: The API used to retrieve weather information.
- ChatGPT: Used in the generation of this readMe, unitTests and bug fixing
- Figma: Used in the design and generation of the client

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your system.

### Installation

1. Clone the repository to your local machine:

### Getting started

- Npm install on both backend and frontend
- Do npx tsc on the backend directory
- Navigate to the backend directory and do npm start (do this first, it is crucial)
- Navigate to the frontend directory and do npm start

### Notes

- Tech debt introduced due to time constraints:
    - the react component could be cleaned up, as of now im feeding the backend data straight to the client with no previous parsing
    - the css needs to be touched up in order to remove the extra scroll wheel and size up everything to fit in one screen
    - clean up the index file, the funcs calculating the data should be happening in a separate js file that is obuscated to users

- Missing/potential features
    - Swapping between fahrenheit and celsius
    - clicking on the forecasted date and maximising its data (plus presenting the data that is present in current view on it when clicked)
    - dark mode (a must have in modern apps :))
    - API limiter to not hit the ceiling where you need to pay for the api usage
    - option to select different cities
    - add an npm script to fire both backend and frontend at the same time
    - hardcode the ports for the front end and backend so they dont conflict
