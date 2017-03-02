<?php
class View{
	public static function table($rs){
		 $nc=$rs->columnCount();
         echo "<table border ='1' cellspacing ='0' cellpadding ='10' width='100%'>";
				echo"<tr style='background-color :gray;font-weight:bold;'>";
				for($i=0;$i<$nc;$i++){
					$md =$rs->getColumnMeta($i);
					echo"<td>".$md["name"]."</td>";
				}
				echo"</tr>";
				
						foreach ($rs as $row){
							echo"<tr>";
							for ($i =0;$i<$nc;$i++){
								 echo  "<td>" .$row[$i]."</td>";
				}
				echo "</tr>";
			}
			echo "</table>";
		}
		public static function recordSetToJson($rs,$tableName) {
			$s="{"."&nbsp\"".$tableName."\":[";
					     $nc=$rs->columnCount();
					     
				        for($i=0;$i<$nc;$i++){
							$md[$i] =$rs->getColumnMeta($i);
						}

				$ii=0;
		        foreach ($rs as $row){
		        		$j=0;
						if($ii==0){
								$s=$s."&nbsp{";
						         for ($i =0;$i<$nc;$i++){
							         	if($j==0){
							         		$s=$s."\"".$md[$i]["name"]." \":\" ".$row[$i]." \" ";
							         	}
							         	else {
							         		$s=$s.",\"".$md[$i]["name"]." \":\" ".$row[$i]." \" ";
							         	}
							         	$j=1;
					             }
					             $s=$s."}";
						}
						else {
							$s=$s.",&nbsp{";
						         for ($i =0;$i<$nc;$i++){
							         	if($j==0){
							         		$s=$s."\"".$md[$i]["name"]." \":\" ".$row[$i]." \" ";
							         	}
							         	else {
							         		$s=$s.",\"".$md[$i]["name"]." \":\" ".$row[$i]." \" ";
							         	}
							         	$j=1;
					             }
					             $s=$s."}";
						}	
					$ii=1;		
			     }
			     $s=$s . "&nbsp]&nbsp}";
			 return $s;
		}
		public static function struct($rs){
			echo "<table border ='1' cellspacing ='0' cellpadding ='10' >";
			$md = $rs->getColumnMeta(0);//metadonnée
			foreach ($md as $key=>$value){
				echo "<tr><td>$key</td><td>$value</td></tr>";
			}
			echo "</table>";
		}
		
		public static function printRow($titles, $row){
			// if(count($titles) != count($row) ){echo count($titles),count($row);  return -1; }
			echo "<table border='1'>";
					
			        for($i=0;$i<count($titles);$i++){
						echo"<tr><td>".$titles[$i]."</td><td>" .$row[$i]."</td></tr>";
					}
				
			echo "</table>";
		}
		
	}