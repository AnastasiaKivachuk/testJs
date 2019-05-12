function Map(list) {
    this.list = list;
    //create and full needed parameters
    let cityAndAbbreviations = [], //array of names of city and abbreviations
        latitudes = [], //array of latitudes every city
        longitudes = []; //array of longitudes every city
    for (let i = 0; i < list.length; i++) { //enumeration of all arrays of list
        cityAndAbbreviations.push(list[i][0]);
        latitudes.push(list[i][1]);
        longitudes.push(list[i][2]);
    }

    //create and full names of city and abbreviations
    let cities = [];
    let abbreviations = [];
    for (let k = 0; k < cityAndAbbreviations.length; k++) {
        let a;
        a = cityAndAbbreviations[k].split(',');
        cities.push(a[0]);
        abbreviations.push(a[1]);
    }

    //first paragraph of task
    //method - find norther city
    this.northernmost = function () {
        let maxNorth, indexMaxNorth;
        maxNorth = Math.max.apply(null, latitudes);
        indexMaxNorth = latitudes.indexOf(maxNorth);
        console.log(cities[indexMaxNorth]);
    };
    //method - find souther city
    this.southernmost = function () {
        let minSouth, indexMinSouth;
        minSouth = Math.min.apply(null, latitudes);
        indexMinSouth = latitudes.indexOf(minSouth);
        console.log(cities[indexMinSouth]);
    };
    //method - find easter city
    this.easternmost = function () {
        let maxEast, indexMaxEast;
        maxEast = Math.max.apply(null, longitudes);
        indexMaxEast = longitudes.indexOf(maxEast);
        console.log(cities[indexMaxEast]);
    };
    //method - find wester city
    this.westernmost = function () {
        let minWest, indexMinWest;
        minWest = Math.min.apply(null, longitudes);
        indexMinWest = longitudes.indexOf(minWest);
        console.log(cities[indexMinWest]);
    };

    //second paragraph of task
    //
    this.closestCity = function (latitude, longitude) {
        let distance = [];
        for (let s = 0; s < latitudes.length; s++) {
            let r = 0;
            r = Math.sqrt(((latitudes[s] - latitude) ** 2) + ((longitudes[s] - longitude) ** 2));   //distance find with ((a-a')^2+(b-b')^2)^(1/2)
            distance.push(r);
        }
        let minDistance;
        minDistance = Math.min.apply(null, distance);   //find  min distance between given parameter and city's coordinates
        indexMinDistance = distance.indexOf(minDistance);   //return index of the smalest distance
        console.log(cities[indexMinDistance]);  //show name of this city

    };

    //third paragraph of task
    //create string of abbreviations
    this.stateAbbreviations = function () {
        let uniqueArray = [...new Set(abbreviations)];  //create unique array with SET
        console.log(uniqueArray.join(',').trim());  //join array in string and delete leading and trailing spaces with trim()
    };
}



const list1 = [
    ["Nashville, TN", 36.17, -86.78],
    ["New York, NY", 40.71, -74.00],
    ["Atlanta, GA", 33.75, -84.39],
    ["Denver, CO", 39.74, -104.98],
    ["Seattle, WA", 47.61, -122.33],
    ["Los Angeles, CA", 34.05, -118.24],
    ["Memphis, TN", 35.15, -90.05]
];

let test = new Map(list1);
test.northernmost();
test.westernmost();
test.easternmost();
test.southernmost();
test.closestCity(39, -104);
test.stateAbbreviations();