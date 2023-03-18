/*
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

Time | Space: O(n log n)
Approach
 - Sort the costs by priceA - priceB -> O(n log n)
 - Get the length of n people
 - Iterate through people
    - add persons w/ smallest price to city A, the rest to city B
*/

var twoCitySchedCost = function (costs) {
                 //CityB                 //CityA
    //[ [ 400, 50 ], [ 30, 20 ], [ 10, 20 ], [ 30, 200 ] ]
    costs.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

    let totalCost = 0;
    let N = costs.length / 2;
    for (let i = 0; i < N; i++) {
        //Get the first values (lowest), assign to CityA
        const cityA = costs[i + N][0] //10, 30

        //Get the second values (greatest), assign to CityB
        const cityB = costs[i][1] //50, 20
        totalCost += cityA + cityB;
    }
    return totalCost;
};
