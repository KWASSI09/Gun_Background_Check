function createcharts(selected){
  console.log(selected);

  


}



//d3.json("Resourses/GunCheck.json").then((data)=> {

    //console.log(data.names);
  
    //var dropdown= d3.select("#selDataset")
  
    //data.states.forEach((id)=>{
  
      //dropdown.append("option").text(id).property("value",id);
  
//});

//})
d3.json("GunCheck.json").then((data)=> {
  console.log(data.State);
var select = document.getElementById("selDataset");
    var options = Object.values(data.State);
    let uniqueItems = [...new Set(options)];
    
    for(var f = 0; f < uniqueItems.length; f++) {
        var opt = uniqueItems[f];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    };

    createcharts(el.Alabama)

  });

  function optionChanged(selected){

    createcharts(selected)
  }
