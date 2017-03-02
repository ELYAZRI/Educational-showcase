	<?php
	  
      header("Access-Control-Allow-Origin: *");
      header("Content-Type: application/json; charset=UTF-8");

		  
        
  $conn = new mysqli("localhost", "root", "", "Gst_Ressources");

$result = $conn->query("SELECT Id, Nom, Prenom,Email FROM Acteurs");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Id":"'  . $rs["Id"] . '",';
    $outp .= '"Nom":"'  . $rs["Nom"] . '",';
    $outp .= '"Prenom":"'   . $rs["Prenom"]        . '",';
    $outp .= '"Email":"'. $rs["Email"]     . '"}'; 
}
$outp ='{"Acteurs":['.$outp.']}';
$conn->close();

echo($outp);
        ?>