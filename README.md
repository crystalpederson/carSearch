# 🚗 carSearch - Crystal Pederson 🚙

## Description
This app allows you to search for a vehicle and filter by make, type, and model year.
Data is sourced from the [NHTSA API](https://vpic.nhtsa.dot.gov/api/).
For demonstration purposes, the app uses car images sourced from [Pexels](https://www.pexels.com/).

## App Preview
Try out the app on [Expo Snack](https://snack.expo.dev/@crystalpederson/crystal-pederson---carsearch)

![App demo gif](/assets/demo.gif)

## Local Set-up
1. Clone this repository onto your local machine.
2. Install Expo CLI.  See Expo docs [here](https://docs.expo.dev/get-started/installation/)

```javascript
$ npm install --global expo-cli
```

3. Run `npm start` to start the server.
4. Press `i` to open the iOS Simulator or `a` to open Android.

## Using The App

### Home Page
* Select a car make from the dropdown menu.  You can type into the search bar to find a particular make or scroll through the dropdown list to find a make.

* Press the "Search" button to see the resulting list of cars.

### Results Page
* The results of the search will display in a scrollable list.  If there are many results returned, scroll down to load and view more results.

* At the top of the results page, you can filter your search further.  You have the option to:
  - Change the car make
    - Select a new make from the dropdown menu
  - Filter by vehicle type
    - Click the dropdown menu and select from Car, Truck, or MPV (types from NHTSA data).
    - Select "Any Type" to remove the type filter.
  - Filter by year
    - Click the button labeled "Any Year" to open a menu with a year picker slider.
    - Drag the points on the slider to select a year or year range.
    - Click "Done" to see the updated results within the year you selected.
    - Clear "Clear" to remove the year filter and display results from all years.

* You can also click the back arrow at the top of the page to return to the Home Page and start over.

* Note: Due to the way the NHTSA's API structure, the cars' model year can only be displayed if a year or range of years is selected.
