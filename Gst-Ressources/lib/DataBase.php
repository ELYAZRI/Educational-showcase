<?php
class DataBase{
	private $source;
	private $password;
	private $user;
	private $host;
	private $url;
	private $db; //PDO

	public function DataBase($host,$source,$user,$password){
		
		$this->host=$host;
		$this->source=$source;
		$this->user=$user;
		$this->password=$password;
			
		$url = "mysql:host=$host;dbname=$source";//chaine de connexion
			try {
					$this->db=new PDO($url,$user,$password);
				}
			catch(PDOException $e){
					echo "Erreur de connexion :" .$e->getMessage() ."<br />";
		                          }
	    }
		public function selectAll($tableName){
			return $this->db->query("SELECT * FROM $tableName");
		}
		public function select($tableName,$key,$value){
			$rs = $this->db->query("SELECT * FROM $tableName where $key='$value'");
		    $row =$rs->fetch();
		    return $row;
		}
		public function insert($tableName,$row){
			 $req = "INSERT INTO  " . $tableName . " VALUES('" . $row[0] . "'";
		 for ($i = 1; $i < count($row); $i++) {
				$req= $req . ", '" . $row[$i] . "'"; 
		  		}
		    $req= $req . ")";
			return $this->db->exec($req);
		}
        public function Delete($tableName,$key, $value){
		 $req = "DELETE FROM " . $tableName . " WHERE " . $key ." = '".$value."'";
		 return $this->db->exec($req);
	    }
        
	    public function Update($tableName,$key, $value,$row){
	    	echo $value;
    	 $fields=$this->getFieldsNames($tableName);
    	 if(count($fields) != count($row) ) return -1;
    	 $req = "UPDATE  " . $tableName. " SET ";
    	 $req=$req . $fields[0]["name"]."= '" . $row[0]. "'";
		 for ($i = 1; $i < count($row); $i++) {
			$req=$req . ", " .$fields[$i]["name"] . " = '" . $row[$i] . "'"; 
		  }
		  $req=$req . " WHERE " . $key . " = '" . $value . "'";
		
		 return $this->db->exec($req);
        }
        
        public function getFieldsNames($tableName){
    	 $rs =$this->db->query("SELECT * FROM  " . $tableName);
    	 $nc=$rs->columnCount();
          for($i=0;$i<$nc;$i++){
					
					$md[$i] = $rs->getColumnMeta($i);
					
				}
         return $md;
     }
    
     
     
     
}