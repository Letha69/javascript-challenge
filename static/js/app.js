// from data.js
var tableData = data;

//console.log(tableData);
var tbody = d3.select("tbody");
//console.log(tableData);


// Loop through the data


tableData.forEach(ufoSighting =>{
    console.log(ufoSighting);
    var tr = tbody.append("tr") // append one table row 'tr'
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
        var td = tbody.append("td");
        td.text(value);
    });
});

var button = d3.select("#button");

button.on("click",function(){

    d3.event.preventDefault();
    d3.select(".button").html("");
    
    var inputElement = d3.select("#datetime");
    filteredtable(inputElement,"datetime");
    
    // get the vlue property of the input element
    var inputValue = inputElement.property("value");
    var selectedData = tableData.filter(tableData =>tableData.datetime === inputValue);
    
    // loop through
    selectedData.forEach((dateData) =>{
        var tr = tbody.append("tr");
        Object.entries(dateData).forEach(([key,value]) =>{
            var td = tbody.append("td");
            td.text(value);
        })
    })
})

function filteredtable(inputElement,inputType){
    // Get the value property of the input element   
    var inputValue = inputElement.property("value");


    var selectedData = tableData.filter(tableData => tableData[inputType] === inputValue);

    // loop through
    selectedData.forEach((dateData)=>{
        var tr = tbody.append("tr");
        Object.entries(dateData).forEach(([key, value]) =>{
            var td = tbody.append("td");
            td.text(value);           

        })
        
    })

}
