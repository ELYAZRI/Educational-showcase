
<?php

       header("Access-Control-Allow-Origin: *");
       header("Access-Control-Allow-Methods : GET,POST,PUT,DELETE,OPTIONS");
	   header("Access-Control-Allow-Headers : Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
       header("Content-Type: application/json; charset=UTF-8");
	   header("Content-Type: text/html;  charset=ISO-8859-1");
// The request is a JSON request.
// We must read the input.
// $_POST or $_GET will not work!

$data = file_get_contents("php://input");

$objData = json_decode($data);


// perform query or whatever you wish, sample:

/*
$query = 'SELECT * FROM
tbl_content
WHERE
title="'. $objData->data .'"';
*/
    $conn = new mysqli("localhost", "root", "", "Gst_Ressources");

    $result = $conn->query("SELECT Id, IdAuteur, IdContributeur,Titre,Resume, MotsCles, Chemin, Image, Etat, DateCreation,Domaine, Type, NbrVue FROM Ressources WHERE Etat='Visible' ".$objData->data);
	
    $outp = "";
			while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			    if ($outp != "") {$outp .= ",";}
			    $outp .= '{"Id":"'  . $rs["Id"] . '",';
			    $outp .= '"IdAuteur":"'  . $rs["IdAuteur"] . '",';
			    $outp .= '"IdContributeur":"'   . $rs["IdContributeur"]        . '",';
			    $outp .= '"Titre":"'   . $rs["Titre"]        . '",';
			    $outp .= '"Resume":"'   . $rs["Resume"]        . '",';
			    $outp .= '"MotsCles":"'   . $rs["MotsCles"]        . '",';
			    $outp .= '"Chemin":"'   . $rs["Chemin"]        . '",';
			    $outp .= '"Image":"'   . $rs["Image"]        . '",';
			    $outp .= '"Etat":"'   . $rs["Etat"]        . '",';
			    $outp .= '"DateCreation":"'   . $rs["DateCreation"]        . '",';
			    $outp .= '"Domaine":"'   . $rs["Domaine"]        . '",';
			    $outp .= '"Type":"'   . $rs["Type"]        . '",';
			    $outp .= '"NbrVue":"'. $rs["NbrVue"]     . '"}'; 
			}
			$outp ='{"Ressources":['.$outp.']}';
			$conn->close();
			
			echo($outp);

?>