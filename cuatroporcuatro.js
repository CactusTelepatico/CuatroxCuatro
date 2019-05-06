
colores = [
	["red", "LawnGreen ", "red", "red"],
	["red", "red", "red", "red"],
	["red", "red", "red", "red"],
	["red", "red", "red", "red"]
];


function iniciatabla(){

	tabla = document.getElementById("tabla");

	num = 1;

	for(i=1;i<=4;i++){

		fila = document.createElement("tr");
		fila.setAttribute("id","fila_"+i);

		for(j=1;j<=4;j++){

			celda = document.createElement("td");
			celda.setAttribute("id",num);
			celda.style.backgroundColor = colores[i-1][j-1];
			celda.setAttribute("onclick","cambia(this)");
			texto = document.createTextNode(num++);
			celda.appendChild(texto);
			fila.appendChild(celda);

		}

		tabla.appendChild(fila);

	}

}

function cambia(cambiada){

	switch (cambiada.id) {
	  case "1":
		if(document.getElementById(1).style.backgroundColor=="red"){
			document.getElementById(1).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(1).style.backgroundColor="red";
		}

		if(document.getElementById(2).style.backgroundColor=="red"){
			document.getElementById(2).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(2).style.backgroundColor="red";
		}

		if(document.getElementById(5).style.backgroundColor=="red"){
			document.getElementById(5).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(5).style.backgroundColor="red";
		}

		if(document.getElementById(13).style.backgroundColor=="red"){
			document.getElementById(13).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(13).style.backgroundColor="red";
		}




	  case "2":

		case "3":

		case "4":

		case "5":

	 	case "6":

	 	case "7":

	 	case "8":

	 	case "9":

	 	case "10":

	 	case "11":

	 	case "12":

	 	case "13":

	 	case "14":

	 	case "15":

	 	case "16":

	}







	console.log(cambiada.id);
	console.log(cambiada);
	console.document.getElementById(1);




}









console.log("cuatroxcuatro.js cargado");
