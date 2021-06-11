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
