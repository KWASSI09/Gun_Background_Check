

function createcharts(selected){
  console.log(selected);

  d3.json("GunCheck.json").then((data)=> {

    let sum = 0;
    data.forEach(element=>{
      sum+=element.Permit;
    });

    console.log(sum);

  
    
    
 })

  


}



//d3.json("Resourses/GunCheck.json").then((data)=> {

    //console.log(data.names);
  
    //var dropdown= d3.select("#selDataset")
  
    //data.states.forEach((id)=>{
  
      //dropdown.append("option").text(id).property("value",id);
  
//});

//})
d3.json("GunCheck.json").then((data)=> {
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

  function optionChanged(selected){

    createcharts(selected)
  }
