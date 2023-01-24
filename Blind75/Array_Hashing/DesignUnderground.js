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

class UndergroundSystem {
    constructor() {
        this.idMap = new Map();
        this.durationMap = new Map();
    }

    checkIn(id, stationName, t) {
        this.idMap.set(id, {stationName, checkInTime: t});
    }

    checkOut(id, stationName, t) {
        const startStation = this.idMap.get(id);
        const stationRoute = `${startStation.stationName}, ${stationName}`;

        //difference between the check out and check in time
        const duration = t - startStation.checkInTime;

        //if the map contains a route between stations
        if(this.durationMap.has(stationRoute)) {
            //get the route as a key and push the time as a value
            this.durationMap.get(stationRoute).push(duration);
        } else {
            //otherwise set the calculated time of the route
            this.durationMap.set(stationRoute,[duration]);
        }
    }

    getAverageTime(startStation, endStation) {
        const durationList = this.durationMap.get(`${startStation}, ${endStation}`);

        return durationList.reduce((a, b) => a + b) / durationList.length;
    }
}
