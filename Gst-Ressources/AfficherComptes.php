	<?php
	  
      header("Access-Control-Allow-Origin: *");
      header("Content-Type: application/json; charset=UTF-8");

		  
        
  $conn = new mysqli("localhost", "root", "", "Gst_Ressources");

$result = $conn->query("SELECT Id, Login, Passwd,DateDeCreation FROM Comptes");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Id":"'  . $rs["Id"] . '",';
    $outp .= '"Login":"'  . $rs["Login"] . '",';
    $outp .= '"Passwd":"'   . $rs["Passwd"]        . '",';
    $outp .= '"DateDeCreation":"'. $rs["DateDeCreation"]     . '"}'; 
}
$outp ='{"Comptes":['.$outp.']}';
$conn->close();

echo($outp);
        ?>