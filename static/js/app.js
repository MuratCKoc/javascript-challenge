// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var form = d3.select("#form")
var filterButton = d3.select("#filter-btn")

var cityOptions = []
var stateOptions = []
var countryOptions = []
var shapeOptions = []
var datetimeOptions = []
//Get distinct values from data and store them into dropdown option filters

//Get distinct values from data
tableData.forEach(function(rec) {
    if (datetimeOptions.includes(rec.datetime)===false){datetimeOptions.push(rec.datetime);}
    if (cityOptions.includes(rec.city)===false){cityOptions.push(rec.city);}
    if (stateOptions.includes(rec.state)===false){stateOptions.push(rec.state);}
    if (countryOptions.includes(rec.country)===false){countryOptions.push(rec.country);}
    if (shapeOptions.includes(rec.shape)===false){shapeOptions.push(rec.shape);}
});

// Populate options
// Dates
var dateOps = d3.select("#Date-s")
datetimeOptions.forEach(function(date) {
    dateOps.append('option').html(`<option value=${date}> ${date} </option>`)});
// Cities
var cityOps = d3.select("#City-s")
cityOptions.forEach(function(city) {
    cityOps.append('option').html(`<option value=${city}> ${city} </option>`)
});
// States
var stateOps = d3.select("#State-s")
cityOptions.forEach(function(state) {
    stateOps.append('option').html(`<option value=${state}> ${state} </option>`)
});
var countryOps = d3.select("#Country-s")
countryOptions.forEach(function(country) {
    countryOps.append('option').html(`<option value=${country}> ${country} </option>`)
});
var shapeOps = d3.select("#Shape-s")
shapeOptions.forEach(function(shape) {
    shapeOps.append('option').html(`<option value=${shape}> ${shape} </option>`)
});


// To be used to prepare the form
var filterZone = {
        "City":cityOptions,
        "State":stateOptions,
        "Country":countryOptions,
        "Shape":shapeOptions};
console.log(filterZone);

// Console.log the weather data from data.js
console.log(data);

filterButton.on("click",fillTable);
form.on("submit",fillTable);

// Filter Table
function fillTable(){
    //Stop refresh
    d3.event.preventDefault();

    //Get date
    var inputValue = d3.select("#datetime").property("value");
    var tbody = d3.select("tbody");
    d3.event.target.value;

    //Filter data according to date
    var filtered = tableData.filter(item => item.datetime === inputValue);
    filtered.forEach(function(rec){
    var row = tbody.append("tr");
    Object.entries(rec).forEach(([key,value]) => row.append("td").text(value));
});
    console.log("ASDASDASD");
    console.log(inputValue);

}

