<?php

$link = mysqli_connect("50.62.209.84:3306", "ScoreboardDb", "ScoreboardDb1", "Scoreboard1_");

//50.62.209.84:3306

if (mysqli_connect_error()){
    
    echo "There was an error connecting to the database";
}

$query = "INSERT INTO `users` (`id`, `email`, `password`) VALUES ('4', 'test@test.com', 'passwerd2');";

if (mysqli_query($link, $query)){
    echo "good";
}
else{
    echo "bad";
}

$query = "SELECT * FROM users";
//$query = "SELECT * FROM tblControl";

if ($result = mysqli_query($link, $query)){
    
    $row = mysqli_fetch_array($result);
    
    print_r($row);
    //echo "email: ".$row['email'].", password: ".$row[2];
}
else{
    echo "query unsuccessful :'(";
}


// New game table entry
//INSERT INTO `tblControl` (`Id`, `GameStartTime`, `GameEndTime`, `CurrentFundsRaised`, `HomeScore`, `VisitorScore`, `HomeShots`, `VisitorShots`) VALUES ('1', '2018-02-03 01:00:00', '2018-02-03 03:00:00', '0', '0', '0', '0', '0');


?>