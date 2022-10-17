
function createcharts(selected){
  console.log(selected);
}

  d3.json("resources/GunCheck.json").then((data)=> {

    console.log(data)

  
    $('#example').DataTable( {
        data: data['table'],
        columns: [
            { title: "Date" },
            { title: "State" },
            { title: "Permit" },
            { title: "Permit_Rechecked" },
            { title: "Handgun" },
            { title: "Long_Gun" },
            { title: "Multiple" },
            { title: "Other" },
        ]
  } );
})



//d3.json("Resourses/GunCheck.json").then((data)=> {

  //console.log(data.names);

  //var dropdown= d3.select("#selDataset")

  //data.states.forEach((id)=>{

    //dropdown.append("option").text(id).property("value",id);

//});

//})
d3.json("resources/GunCheck.json").then((data)=> {
//console.log(data.State);
var dropdown = document.getElementById("selDataset");
  var options = Object.values(data.State);
  let uniqueItems = [...new Set(options)];
  
  for(var i = 0; i < uniqueItems.length; i++) {
      var opt = uniqueItems[i];
      var element = document.createElement("option");
      element.textContent = opt;
      element.value = opt;
      dropdown.appendChild(element);
  };

  createcharts(uniqueItems[0])

});

d3.json("resources/GunCheck.json").then((data)=>{
console.log(data.Permit);

 


})

function optionChanged(selected){

  createcharts(selected)
}

