const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => {
    console.log(receivedData);
    //Skill Drill 12.3.1
    var locator = receivedData.map(data => data.location["latitude", "longitude"]);
    console.log(locator);
});


//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));


//Say hello
d3.json("samples.json").then(function(data){
    console.log("hello");
});

//Extract the data from samples.json
d3.json("samples.json").then(function(data){
    console.log(data);
});

//Extract the belly button washing frequency
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

//Sort the wfreq array in descending order.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
        person.wfreq).sort((a,b) => b - a);
            console.log(wfreq);
        });

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
        person.wfreq).sort((a,b) => b - a);
            filteredWfreq = wfreq.filter(element => element !=
        null);
            console.log(filteredWfreq);
        });
  //Print each key:value pair in an array from the following:
 researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};
 
 console.log(Object.entries(researcher1));

 //Use Object.entries()and forEach() to print all the metadata of the first person in the samples.json() dataset (ID 940).
 d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});