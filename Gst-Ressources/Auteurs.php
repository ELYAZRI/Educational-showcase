<?php
       header("Access-Control-Allow-Origin: *");
       header("Access-Control-Allow-Methods : GET,POST,PUT,DELETE,OPTIONS");
	   header("Access-Control-Allow-Headers : Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
       header("Content-Type: application/json; charset=UTF-8");
	   
$data = file_get_contents("php://input");
$objData = json_decode($data);
if($objData->data!="") $objData->data= "where ".$objData->data;

    $conn = new mysqli("localhost", "root", "", "Gst_Ressources");
	$result = $conn->query("SELECT Id, Nom, Prenom,Email, Biaugraphie FROM Auteurs ".$objData->data );
    $outp = "";
			while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			    if ($outp != "") {$outp .= ",";}
			    $outp .= '{"Id":"'     . $rs["Id"]      . '",';
			    $outp .= '"Nom":"'     . $rs["Nom"]     . '",';
			    $outp .= '"Prenom":"'  . $rs["Prenom"]  . '",';
			    $outp .= '"Email":"'  . $rs["Email"]  . '",';
			    $outp .= '"Biaugraphie":"'   . $rs["Biaugraphie"]   . '"}';  
			}
			$outp ='{"Auteurs":['.$outp.']}';
			$conn->close();
			
			echo($outp);
?>