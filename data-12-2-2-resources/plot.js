//Sort the cities from that file by population growth in descending order
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
//Slice the top five cities from the dataset
var topFiveCities = sortedCities.slice(0,5);
//Get the names of the top five cities
var topFiveCityNames = topFiveCities.map(city => city.City);
//Get the population increase from 2016 for the top 5 cities, while converting that value from a string to an integer
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
//Create a bar chart with the current data
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing  Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);