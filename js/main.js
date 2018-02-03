
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

    // Set auxilary variables
    var monthsNames = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
    var ampm = "AM";
    if (now.getHours() > 11) {ampm = "PM";}
    
    // Append "0" to the front of any date/time that is less than 10
    var month = now.getMonth();
    if (month < 10) { month = "0" + month;}
    var day = now.getDate();
    if (day < 10) { day = "0" + day;}
    var minute = now.getMinutes();
    if (minute < 10){minute = "0" + minute;}
    var seconds = now.getSeconds();
    if (seconds < 10){seconds = "0" + seconds;}
    
    
    var time = now.getHours() % 12 + ':' + minute + ":" + seconds + " " + ampm;
    
    var date = monthsNames[now.getMonth()] + " " + day + ", " + now.getFullYear();

    var dateTime = [now.getFullYear(), month, day].join('/')
    // set the content of the element with the ID time to the formatted string
    
    var element = document.getElementById('date');
    if (element != null){element.innerHTML = date;}
    element = document.getElementById('time');
    if (element != null){element.innerHTML = time;}
    element = document.getElementById('dateTime');
    if (element != null){element.innerHTML = [dateTime, time].join(' ');}
    
    
    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock();



