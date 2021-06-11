// Write your JavaScript code here!
window.addEventListener("load", function() {
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTaget");
         const missionDestination = Math.round(Math.random()*5);
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[missionDestination].name}</li>
            <li>Diameter: ${json[missionDestination].diameter}</li>
            <li>Star: ${json[missionDestination].star}</li>
            <li>Distance from Earth: ${json[missionDestination].moons}</li>
            </ol>
            <img src = "${json[missionDestination].image}">
         `;   
   });
});

let form = this.document.querySelector("form");
form.addEventListener("submit", function(event){
   let pilotInput = document.querySelector("input[name = pilotName]");
   let copilotInput = document.querySelector("input[name = copilotName]");
   let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
   let cargoMassInput = document.querySelector("input[name = cargoMass]");
      console.log(pilotInput.value);

if ((pilotInput.value ===") || (copilotInput.value ===") || (fuelLevelInput.value ===") || (cargoMassInput.value ===")) {
      alert("Please enter all information");
         event.preventDefault();

} else if (isNaN(pilotInput.value) === false || isNaN (copilotInput.value) === false) {
      alert("Please enter Valid name for Pilot Name or Co-pilot Name (or both)");
         event.preventDefault();

}else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
  alert("please enter valid number for Fuel Level or Cargo Mass (or both)");
   event.preventDefault();


}else {
   document.getElementById("pilotStatus").innerHTML = "pilot " + pilotInput.value + "Ready";
   document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilotInput.value + "Ready";
   
      if (fuelLevelInput.value <= 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too Low for Launch";
               } else {
                  document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for Launch";
}
      if (cargoMassInput.value >= 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
               } else {
                  document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
}


}      

})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
