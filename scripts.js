
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
  
    const missionAbort = document.getElementById('missionAbort');
    const takeoff = document.getElementById('takeoff');
    const landing = document.getElementById('landing');
    const flightStatus = document.getElementById('flightStatus');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
 
    // When the "Take off" button is clicked, the following should happen:
    takeoff.addEventListener('click', event=> {
        let takeoffInput = window.confirm("Confirm that the shuttle is ready for takeoff");
       // if true
        if (takeoffInput){
           // The flight status should change to "Shuttle in flight."
            flightStatus.innerHTML = ("Shuttle in flight");
           // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            shuttleBackground.style.backgroundColor = 'blue';
            // The shuttle height should increase by 10,000 miles.
            spaceShuttleHeight.innerHTML = 10000
        }     
    });   

    // When the "Land" button is clicked, the following should happen:
    // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        landing.addEventListener('click', event=> { 
            let landing = window.alert("The shuttle is landing. Landing gear engaged.");
    // The flight status should change to "The shuttle has landed."
        flightStatus.innerHTML = ("The shuttle has landed.");

    // The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground.style.backgroundColor = 'green';
    // The shuttle height should go down to 0.
        spaceShuttleHeight.innerHTML = 0
});
    // When the "Abort Mission" button is clicked, the following should happen:
    // A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
    missionAbort.addEventListener('click', event=> {
        let missionAbort = window.confirm("Confirm that you want to abort the mission.");
    // The flight status should change to "Mission aborted."
    // The background color of the shuttle flight screen should change from blue to green.
    // The shuttle height should go to 0.
    if (missionAbort){
        flightStatus.innerHTML = ("Mission aborted");
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
        }   
});

// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
up.addEventListener('click', event=> {
    
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles. (accumulator =+)

});


// A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d
