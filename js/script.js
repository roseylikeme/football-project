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
        //TODO: If the more information button was clicked and no team was selected, ALERT and return
        if (teamCode == ""){
            alert('No team was selected.');
            // Clears the paragraph text after something was picked
            document.getElementById("main-bg").className = "football";
            document.getElementById("html-bg").className = "football";
            document.getElementById("paragraph-field").innerHTML = "";
        } else {
            alert(`You selected the team ${teamName}.`);
            changeBackgroundandText();
        }
    }

    function changeBackgroundandText(){
        console.log("Should change background and text with corresponding code.")
        if (teamCode == "DAL") {
            console.log(teamCode)
            // Edits the background
            document.getElementById("main-bg").className = "dal";
            document.getElementById("html-bg").className = "dal";
            // Edits the paragraph text
            document.getElementById("paragraph-field").innerHTML = "You selected the Dallas Cowboys (DAL) who play in Arlington, TX"
        }
        if (teamCode == "DEN") {
            console.log(teamCode)
            // Edits the background
            document.getElementById("main-bg").className = "den";
            document.getElementById("html-bg").className = "den";
            // Edits the paragraph text
            document.getElementById("paragraph-field").innerHTML = "You selected the Denver Broncos (DEN) who play in Denver, CO"
        }
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