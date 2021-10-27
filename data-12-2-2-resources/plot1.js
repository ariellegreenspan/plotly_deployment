//Sort the cities from that file by population size in descending order
var sortedCities = cityGrowths.sort((a, b) => a.population - b.population).reverse();
//Slice the top seven cities from the dataset
var topSevenCities = sortedCities.slice(0, 7);
//Get the names of the top seven cities
var topSevenCitiesNames = topSevenCities.map(city => city.City);
//Get the population size for the top 7 cities, while converting that value from a string to an integer
topSevenCitiesPopulation = topSevenCities.map(city => parseInt(city.population));
//Create a bar chart with the current data
var trace = {
    x: topSevenCitiesNames,
    y: topSevenCitiesPopulation,
    type: "bar"    
};
var data = [trace];
var layout = {
    title: "Cities with the Largest Populations",
    xaxis: {title: "Cities"},
    yaxis: {title: "Population Size"}
};
Plotly.newPlot("bar-plot", data, layout);

