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


