"use strict";

window.onload = function () {
    let teams = [
      { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
      { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
      { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
      { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
    ];
  
    //Declare HTML elements needed
    let selectMenu = document.getElementById("teams");
    let moreInfoBtn = document.getElementById("moreInfo");
    let teamCode;
    let teamName;

    let numberOfTeams = teams.length;
    console.log(`number of teams: ${numberOfTeams}`); // prints out # of teams
    for (let i = 0; i < numberOfTeams; i++) {
        let theOption = new Option(teams[i].name, teams[i].code);
        selectMenu.appendChild(theOption);
    }
    
    //add event listener to button
    moreInfoBtn.addEventListener("click", getTeamName);

    //add an event handler to handle the event on the button
    function getTeamName() {
        console.log("Button Works"); // check to see if button is responsive
        teamCode = selectMenu.value;

        //teamName var is set to the team the user selects in the dropdown menu.
        teamName = selectMenu.options[selectMenu.selectedIndex].text;
        console.log(selectMenu.options[selectMenu.selectedIndex]);

        //TODO: Change alert print to an innerHTML to print information about the team
        alert(`You selected the team ${teamName}.`);

        //TODO: If the more information button was clicked and no team was selected, ALERT and return
        
    }

    //Event Listener - When the user selects an option in the dropdown menu...
    selectMenu.onchange = onTeamChanged;
    //Event Handler - ... run this function
    function onTeamChanged() {
        let selectedTeam = selectMenu.value;
        //TODO: Create an if statemenet that cathes if selectedTeam is blank. Print out no team was selected.
        console.log(`You changed your team to ${selectedTeam}`)
    }
};