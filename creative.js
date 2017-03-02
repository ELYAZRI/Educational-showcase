//&ocirc; = ô
//&eacute;= é
//&egrave;=è
function show_connection_div(state){
	var lediv1 = document.getElementById("disconnectedDiv");
	var lediv2 = document.getElementById("connectedDiv");
	if(state=="connected"){
	lediv2.style.display="inherit";
	lediv1.style.display="none";
	}
	else{
		lediv2.style.display="none";
	    lediv1.style.display="inherit";
	}
}

function logout()
{
	show_connection_div("disconnected");
	document.getElementById("ID").value="0";
    }

function afficherLoad(){
	
	document.getElementById('latu').setAttribute('style', 'display: none;');
	document.getElementById('load').setAttribute('style', 'display: block;');
	document.getElementById('vp').setAttribute("style", 'display= none;');
	document.getElementById('rp').setAttribute("style", 'display= none;');
	
}

function receive()
{
	       var parameters = location.search.substring(1).split("&");
		   var data = "";
		   var Identif="0"
		   for (x in parameters)
		   {
		       var temp = parameters[x].split("=");
		       thevar = unescape(temp[0]);
		       thevalue = unescape(temp[1]);
		       thevalue = thevalue.replace("+", " ");
		       if (thevar=="ID") {
		    	   Identif=thevalue;
		    	   thevalue="0";
				    	  if (Identif!="0") {
				    		  document.getElementById("ID").value=Identif;
						  } 
			  }
		       data += thevar + "=" + thevalue + "\n";
		   }
}

RemoveAllChild=function(divName){
	var test=document.getElementById(divName);
	while(test.hasChildNodes())test.removeChild(test.lastChild); // innerHTML non adapté dans ce cas
}
function chercher(domaine) {
	var t=0;
	     RemoveAllChild('domaine');
	 var select = document.getElementById('domaine');
	if(domaine=="Remise-niveau"){
			var option1 = document.createElement('option');
			option1.innerHTML = 'Fractions';
			select.appendChild(option1);
			var option2 = document.createElement('option');
		    option2.innerHTML = 'Puissances';
		    select.appendChild(option2);
		    var option3 = document.createElement('option');
		    option3.innerHTML = 'D&eacute;veloppement et factorisation';
		    select.appendChild(option3);
		    var option4 = document.createElement('option');
		    option4.innerHTML = 'Equations';
		    select.appendChild(option4);
		    var option5 = document.createElement('option');
		    option5.innerHTML = 'D&eacute;riv&eacute;es';
		    select.appendChild(option5);
		    var option6 = document.createElement('option');
		    option6.innerHTML = 'Logarithmes';
		    select.appendChild(option6);
		    var option7 = document.createElement('option');
		    option7.innerHTML = 'Vecteurs';
		    select.appendChild(option7);
		    var option8 = document.createElement('option');
		    option8.innerHTML = 'Trigonom&eacute;trie';
		    select.appendChild(option8);
		    var option9 = document.createElement('option');
		    option9.innerHTML = 'Nombres complexes';
		    select.appendChild(option9);
		    t=1;
	}
if(domaine=="electro-analogique"){
		var option1 = document.createElement('option');
		option1.innerHTML = 'Diodes';
		select.appendChild(option1);
		var option2 = document.createElement('option');
	    option2.innerHTML = 'Transistors';
	    select.appendChild(option2);
	    t=1;
}
	if(domaine=="electro-numerique"){
		var option = document.createElement('option');
		option.innerHTML = 'Syst&egrave;mes combinatoires';
		select.appendChild(option);
		t=1;
}
	if(domaine=="Droit prive"){
		var option = document.createElement('option');
		option.innerHTML = 'Droit du travail / droit social';
		select.appendChild(option);
		var option2 = document.createElement('option');
	    option2.innerHTML = 'Droit des affaires';
	    select.appendChild(option2);
	    t=1;
}
	if(domaine=="Droit prive/public"){
		var option = document.createElement('option');
		option.innerHTML = 'Introduction au droit';
		select.appendChild(option);
		t=1;
}
	
	if(t==0) {
		var option = document.createElement('option');
		option.innerHTML = domaine;
		select.appendChild(option);
	}
    
	}


function getAppropriateLength(t,taille) {
	    //titre =>25.
	    //vues+aut => 40.
	    //résumé =>130.
		if (t.length>taille){ t=t.substring(0, taille);  t=t+"...."; }
		return t;
		}


var app = angular.module('MyApp', ['services']);

	
app.controller('MyCtrlG', function($scope, $http, Logger) {
	
	 

	 $scope.setCurrent=function(x){
		NbrPages=Logger.getNbrPages();
		Current=Logger.getCurrent();
		if(x=='fp') x=1;
		if(x=='lp') x=NbrPages;
		if(x=='prev') { if(Current>1) x=Current-1; else x=1;}
		if(x=='next') { if((Current-1)<(NbrPages-1)) x=(Current-1)+2; else  x=NbrPages; }
		Logger.setCurrent(x);
		return x;
	}

	 $scope.setActivePage=function(x){
		
		x=$scope.setCurrent(x);

		var pager=document.getElementById('pager');
		var childNodes = pager.childNodes,
	    children = [];
	    i = childNodes.length;

	    while (i--) {  if (childNodes[i].nodeType == 1)    children.unshift(childNodes[i]);  }

		for (var i = 0; i < children.length; i++) {
			
			if(children[i].firstChild.innerText==x)		children[i].setAttribute("class", "active");
			else children[i].setAttribute("class", "");
		}
		
		return x;
	}
	 $scope.setActivePage2=function(x){
			
			x=$scope.setCurrent(x);

			var pager=document.getElementById('pager2');
			var childNodes = pager.childNodes,
		    children = [];
		    i = childNodes.length;

		    while (i--) {  if (childNodes[i].nodeType == 1)    children.unshift(childNodes[i]);  }

			for (var i = 0; i < children.length; i++) {
				
				if(children[i].firstChild.innerText==x)		children[i].setAttribute("class", "active");
				else children[i].setAttribute("class", "");
			}
			
			return x;
		}

	 $scope.afficherPage=function(x){
		 console.log("chui làà");
		Current=$scope.setActivePage(x);
		fin=9*Current;
		debut=fin-9;
		t=Logger.getRessources();
		max=t.length;
		console.log(max+"--"+debut+"--"+fin);
		if(fin>max) fin=max;
		for (var i = debut; i < fin; i++) {
			console.log(t[i]);
			$scope.addEllement(t[i],(i-1)+9);
		}
		
		
	}
	 
	 $scope.afficherLatu=function(x){
		Current=$scope.setActivePage(x);
		if(Current==1){
			document.getElementById('latu2').setAttribute('style', 'display: none;');
			document.getElementById('latu3').setAttribute('style', 'display: none;');
			document.getElementById('latu1').setAttribute('style', 'display: block;');
		}
		
		if(Current==2){
			document.getElementById('latu1').setAttribute('style', 'display: none;');
			document.getElementById('latu3').setAttribute('style', 'display: none;');
			document.getElementById('latu2').setAttribute('style', 'display: block;');
		}
		
		if(Current==3){
			document.getElementById('latu1').setAttribute('style', 'display: none;');
			document.getElementById('latu2').setAttribute('style', 'display: none;');
			document.getElementById('latu3').setAttribute('style', 'display: block;');
		}
	}
	 
	 $scope.affichereq=function(x){
			Current=$scope.setActivePage2(x);
			if(Current==1){
				document.getElementById('eq2').setAttribute('style', 'display: none;');
				document.getElementById('eq1').setAttribute('style', 'display: block;');
			}
			
			if(Current==2){
				document.getElementById('eq1').setAttribute('style', 'display: none;');
				document.getElementById('eq2').setAttribute('style', 'display: block;');
			}
			
		}
	 $scope.setPager=function(n){
		x=0;
		rr=n%9;
		r=n/9;
		if (rr!=0){
	    	    x=r+1;
	    	    s=""+x;
	    	    p = s.indexOf('.');
	        	x=s.substring(0, p);
		         }
		if (rr==0) x=r;
		if  (x==0) x=1;


	  var ul = document.getElementById('pager');
	  RemoveAllChild('pager');
		  var fp = document.createElement('li');
		  var lp = document.createElement('li');
		  var prev = document.createElement('li');
		  var next = document.createElement('li');

		  fp.setAttribute('class','first-page');
		  fp.innerHTML = '<a onclick="$scope.afficherPage(\'fp\')" href="#">&laquo;</a>';
		        ul.appendChild(fp);
		  prev.innerHTML = '<a onclick="$scope.afficherPage(\'prev\')" href="#" >&lsaquo;</a>';
		        ul.appendChild(prev);

		    	n=x;     if(n>10) n=10;
		for (var i = 1; i <= n; i++) {
			var li = document.createElement('li');
			if(i==1) li.setAttribute('class','active');
		    li.innerHTML = '<a onclick="$scope.afficherPage('+i+')" href="#" >'+i+'</a>';
		    ul.appendChild(li);

		
		}

		if(x>10){
			var li = document.createElement('li');
		    li.innerHTML = '<p>.....</p>';
		    ul.appendChild(li);
	    	} 
	  

	  next.innerHTML = '<a onclick="$scope.afficherPage(\'next\')" href="#">&rsaquo;</a>';
	        ul.appendChild(next);
	  lp.setAttribute('class','last-page');
	  lp.innerHTML = '<a onclick="$scope.afficherPage(\'lp\')" href="#">&raquo;</a>';
	        ul.appendChild(lp);
	 
		return x;
	    }

	  $scope.addEllement=function(T,id) {
			//alt,Rel,Aut
	    s='';
		s=s+'<a href="#" title="'+getAppropriateLength(T.Titre,28)+'" rel=\'prettyPhoto[group]\'   class="plusbg" ><img  src="'+T.Image+'" title="'+getAppropriateLength(T.Titre,28)+'" alt="'+T.Titre+'" style="height: 200px; width: 285px;" ></a>';
		s=s+'<div class="thumb-description">';
		s=s+'<span class="thumb-title">'+getAppropriateLength(T.Titre,28)+'</span>';
		s=s+'<p style="margin-left: 15px; color: #3333FF;">'+getAppropriateLength(T.NbrVue+" vues.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp de :"+$scope.getAuteur(T.IdAuteur),70)+'</p>';
		s=s+'<p>'+getAppropriateLength(T.Resume,130)+'</p>';
		s=s+'</div>';
		
		  var ul = document.getElementById('portfolio-list');

		  var newli = document.createElement('li');

		  newli.setAttribute('class','logos');
		  newli.setAttribute('id','unique_item'+id);
		  newli.innerHTML = s;
		  
		  ul.appendChild(newli);

	}
	
	
	
	$scope.AuteurID=0;
	$scope.url = "http://localhost/Gst-Ressources/Auteurs.php"; // The url of our search

		$http.post($scope.url, { "data" : ""}).success(function(response) {
			
			$scope.Auteurs = response.Auteurs;
			$scope.getAutId=function(){
		  
				   			var c=$scope.Auteurs;
				   			$scope.AuteurID=0;
					 		        for (x in c) { 
					 		              if (    document.getElementById('keyW').value.trim() == c[x].Nom + " " + c[x].Prenom
					 		                	 ||document.getElementById('keyW').value.trim() == c[x].Prenom + " " + c[x].Nom ) {
					 		            	 $scope.AuteurID=c[x].Id;
					 		                  }
				 			         }
				 			        return ""+$scope.AuteurID;
			 };
			 
			 $scope.getAuteur=function(id){
				  
		   			var c=$scope.Auteurs;
		   			$scope.Auteur="";
			 		        for (x in c) { 
			 		              if (   id == c[x].Id ) {
			 		            	 $scope.Auteur=c[x].Prenom + " " + c[x].Nom;
			 		                  }
		 			         }
		 			        return ""+$scope.Auteur;
	         };
		}).error(function(data, status) {$scope.data = data || "Request failed";$scope.status = status;});
		
		
		
		
		
		
		
		$scope.search = function(Kw) {
			$scope.url2 = "http://localhost/Gst-Ressources/Ressources.php"; // The url of our search
			$http.post($scope.url2, { "data" : kw}).success(function(response) {
				
				$scope.ressources = response.Ressources;
				Logger.setRessources($scope.ressources);
				console.log($scope.ressources.length);
				
		    	//$scope.setPager($scope.ressources.length);
				
			}).error(function(data, status) {$scope.data = data || "Request failed";$scope.status = status;});
		};
		
		
		
				$scope.afficherRessources=function(kw){
					   console.log("KW--->"+kw);
					   $scope.search(kw);
		        };  
		kw="";
		$scope.afficherRessources(kw);
		
		
				$scope.sendKeyWords=function(){
						    	kw="";
						     if(document.getElementById('Titre').checked) kw=kw+" and Titre='"+document.getElementById('keyW').value+"'";
						    if(document.getElementById('Resume').checked) kw=kw+" and Resume='"+document.getElementById('keyW').value+"'";
						   if(document.getElementById('MotsCles').checked) kw=kw+" and MotsCles='"+document.getElementById('keyW').value+"'";
						  if(document.getElementById('N de Ressource').checked) kw=kw+" and Id='"+document.getElementById('keyW').value+"'";
						 if(document.getElementById('Auteurs').checked){
							
							kw=kw+" and IdAuteur='"+$scope.getAutId()+"'";
							
								document.getElementById('load').setAttribute('style', 'display: none;');
								document.getElementById('eq').setAttribute('style', 'display: none;');
								document.getElementById('latu').setAttribute('style', 'display: block;');
							
						 }
					 else{

								console.log("eq");
								document.getElementById('load').setAttribute('style', 'display: none;');
								document.getElementById('latu').setAttribute('style', 'display: none;');
								document.getElementById('eq').setAttribute('style', 'display: block;');
						 }
					 $scope.afficherRessources(kw);
                };
	    
});


app.controller('MyCtrl', function($scope, $http) {
	
		         $http.get("http://localhost/Gst-Ressources/AfficherActeurs.php")
		         .success(function (response) {
		        	 receive();

		        	 $scope.acteurs = response.Acteurs;
		 			        console.log($scope.acteurs);
					 			   $scope.afficherProfile=function(){
					 		              var c=$scope.acteurs;
					 		              var t=0;
								 		        for (x in c) { 
								 		        	if (   c[x].Id==document.getElementById("ID").value) {
								 		            	t=1;
								 		            	$scope.Id=c[x].Id;
								 		            	$scope.fullName=c[x].Nom + "&nbsp&nbsp&nbsp" + c[x].Prenom + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
								 		            	document.getElementById("NomUser1").innerHTML=$scope.fullName;
											    	    document.getElementById("NomUser2").innerHTML=$scope.fullName;
											    	    show_connection_div("connected");
								 		    	     }
							 			         }
							 			         if(t==0) show_connection_div("disconnected");
					 			           };
					 			  
					 $scope.afficherProfile();
		    });
				    
		 });



var services = angular.module('services', []);

services.factory('Logger', function() {
  var logger = {};

  var Ressources;
  var Current=1;
  var NbrPages=3;

  logger.setRessources = function(r){
	  Ressources=r;
  };
  logger.getRessources = function(){
	  return Ressources;
  };
  logger.setCurrent= function(c){
	  Current=c;
  };
  logger.getCurrent= function(){
	  return Current;
  };
  logger.setNbrPages= function(n){
	  NbrPages=n;
  };
  logger.getNbrPages= function(){
	  return NbrPages;
  };
  
  return logger;
});

