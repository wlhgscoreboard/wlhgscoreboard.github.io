
var team1Score = 0;
var team2Score = 0;
var team1Shots = 0;
var team2Shots = 0;

//Add Team one goal
$("#team1AddGoal").click(function()  {
    team1Score += 1;
    $("#team1Score1").html(team1Score.toString());
    $("#team1Score2").html(team1Score.toString());
                
});  


//Add team two goal
$("#team2AddGoal").click(function()  {
    team2Score += 1;
    $("#team2Score").html(team2Score.toString());
                
});   


//Add team one shot
$("#team1AddShot").click(function()  {
    team1Shots += 1;
    $("#team1Shots").html(team1Shots.toString());
                
});  


//Add team two shot
$("#team2AddShot").click(function()  {
    team2Shots += 1;
    $("#team2Shots").html(team2Shots.toString());   
});


//Subtract Team one goal
$("#team1SubtractGoal").click(function()  {
    if (team1Score >= 1){
        team1Score -= 1;
        $(".team1Score").html(team1Score.toString());
    }               
});  


//Subtract team two goal
$("#team2SubtractGoal").click(function()  {
    if (team2Score >= 1){
        team2Score -= 1;
        $("#team2Score").html(team2Score.toString());
    }               
});   


//Subtract team one shot
$("#team1SubtractShot").click(function()  {
    if (team1Shots >= 1){
        team1Shots -= 1;
        $("#team1Shots").html(team1Shots.toString());
    }         
});  

//Subtract team two shot
$("#team2SubtractShot").click(function()  {
    if (team2Shots >= 1){
        team2Shots -= 1;
        $("#team2Shots").html(team2Shots.toString());
    }      
});   


function updateClock() {
    var now = new Date(); // current date
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var ampm = "AM";
    if (now.getHours() > 11) {ampm = "PM";}
    var time = now.getHours() % 12 + ':' + now.getMinutes() + ":" + now.getSeconds() + " " + ampm;
    var day = now.getDate();
    if (day < 10) { day = "0" + day;}
    date = [now.getFullYear(), months[now.getMonth()], day ].join('/');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = [date, time].join(' ');

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock();



