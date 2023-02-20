/*
An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.

Input
["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]
[[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]

Output
[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]

Explanation
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
undergroundSystem.getAverageTime("Paradise", "Cambridge"); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12
*/
var UndergroundSystem = function() {
    this.checkInData = {};
    this.travelData = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInData[id] = {stationName, t};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */

 /*
Approach
checkIn(35, 'Leyton', 8) // null
checkOut(35, 'Paradise', 14) // null
getAvg('Leyton','Paradise') // 6
checkIn(34, 'Leyton', 27)
checkOut(34, 'Paradise', 35)
getAvg('Leyton','Paradise') // 7

checkInData = {
    '35': {'stationName': "Leyton", 't': 8}
    '34': {'stationName': "Leyton", 't': 27}
}

travelData = {
    'Leyton': { 'Paradise': {'journeys': 2, 'totalTime': 14}}
}
 */
UndergroundSystem.prototype.checkOut = function(id, endStation, endTime) {
    let startStation = this.checkInData[id].stationName;

    //if travel data has no start station at all, set it in the object
    if (!this.travelData[startStation]) this.travelData[startStation] = {};

    //if travel data has a start station key with no end station key as its nested object
    if (!this.travelData[startStation][endStation]) {
        //then populate the values of the end station
        this.travelData[startStation][endStation] = { journeys: 0, totalTime: 0};
    }

    let startTime = this.checkInData[id].t;
    //taking the difference in check in and check out times and adding it to total time
    this.travelData[startStation][endStation].totalTime += endTime - startTime;
    //adding to the total trips taken
    this.travelData[startStation][endStation].journeys++;
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let numOfJourneys = this.travelData[startStation][endStation].journeys;
    let totalTime = this.travelData[startStation][endStation].totalTime;
    return totalTime / numOfJourneys;
};
