
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

		if(document.getElementById(4).style.backgroundColor=="red"){
			document.getElementById(4).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(4).style.backgroundColor="red";
		}

		 break;


	  case "2":

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

		if(document.getElementById(6).style.backgroundColor=="red"){
			document.getElementById(6).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(6).style.backgroundColor="red";
		}

		if(document.getElementById(3).style.backgroundColor=="red"){
			document.getElementById(3).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(3).style.backgroundColor="red";
		}

		if(document.getElementById(14).style.backgroundColor=="red"){
			document.getElementById(14).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(14).style.backgroundColor="red";
		}


 break;


		case "3":


		if(document.getElementById(4).style.backgroundColor=="red"){
			document.getElementById(4).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(4).style.backgroundColor="red";
		}

		if(document.getElementById(2).style.backgroundColor=="red"){
			document.getElementById(2).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(2).style.backgroundColor="red";
		}

		if(document.getElementById(7).style.backgroundColor=="red"){
			document.getElementById(7).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(7).style.backgroundColor="red";
		}

		if(document.getElementById(3).style.backgroundColor=="red"){
			document.getElementById(3).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(3).style.backgroundColor="red";
		}

		if(document.getElementById(15).style.backgroundColor=="red"){
			document.getElementById(15).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(15).style.backgroundColor="red";
		}


 break;


		case "4":


		if(document.getElementById(4).style.backgroundColor=="red"){
			document.getElementById(4).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(4).style.backgroundColor="red";
		}

		if(document.getElementById(1).style.backgroundColor=="red"){
			document.getElementById(1).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(1).style.backgroundColor="red";
		}

		if(document.getElementById(8).style.backgroundColor=="red"){
			document.getElementById(8).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(8).style.backgroundColor="red";
		}

		if(document.getElementById(3).style.backgroundColor=="red"){
			document.getElementById(3).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(3).style.backgroundColor="red";
		}

		if(document.getElementById(16).style.backgroundColor=="red"){
			document.getElementById(16).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(16).style.backgroundColor="red";
		}

 break;


		case "5":


		if(document.getElementById(5).style.backgroundColor=="red"){
			document.getElementById(5).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(5).style.backgroundColor="red";
		}

		if(document.getElementById(1).style.backgroundColor=="red"){
			document.getElementById(1).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(1).style.backgroundColor="red";
		}

		if(document.getElementById(8).style.backgroundColor=="red"){
			document.getElementById(8).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(8).style.backgroundColor="red";
		}

		if(document.getElementById(6).style.backgroundColor=="red"){
			document.getElementById(6).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(6).style.backgroundColor="red";
		}

		if(document.getElementById(9).style.backgroundColor=="red"){
			document.getElementById(9).style.backgroundColor="LawnGreen";
		}
		else{
			document.getElementById(9).style.backgroundColor="red";
		}

		break;


	 	case "6":


				if(document.getElementById(5).style.backgroundColor=="red"){
					document.getElementById(5).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(5).style.backgroundColor="red";
				}

				if(document.getElementById(2).style.backgroundColor=="red"){
					document.getElementById(2).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(2).style.backgroundColor="red";
				}

				if(document.getElementById(7).style.backgroundColor=="red"){
					document.getElementById(7).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(7).style.backgroundColor="red";
				}

				if(document.getElementById(6).style.backgroundColor=="red"){
					document.getElementById(6).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(6).style.backgroundColor="red";
				}

				if(document.getElementById(10).style.backgroundColor=="red"){
					document.getElementById(10).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(10).style.backgroundColor="red";
				}

				break;


	 	case "7":


				if(document.getElementById(3).style.backgroundColor=="red"){
					document.getElementById(3).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(3).style.backgroundColor="red";
				}

				if(document.getElementById(7).style.backgroundColor=="red"){
					document.getElementById(7).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(7).style.backgroundColor="red";
				}

				if(document.getElementById(11).style.backgroundColor=="red"){
					document.getElementById(11).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(11).style.backgroundColor="red";
				}

				if(document.getElementById(8).style.backgroundColor=="red"){
					document.getElementById(8).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(8).style.backgroundColor="red";
				}

				if(document.getElementById(6).style.backgroundColor=="red"){
					document.getElementById(6).style.backgroundColor="LawnGreen";
				}
				else{
					document.getElementById(6).style.backgroundColor="red";
				}

				break;


	 	case "8":


						if(document.getElementById(5).style.backgroundColor=="red"){
							document.getElementById(5).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(5).style.backgroundColor="red";
						}

						if(document.getElementById(7).style.backgroundColor=="red"){
							document.getElementById(7).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(7).style.backgroundColor="red";
						}

						if(document.getElementById(4).style.backgroundColor=="red"){
							document.getElementById(4).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(4).style.backgroundColor="red";
						}

						if(document.getElementById(8).style.backgroundColor=="red"){
							document.getElementById(8).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(8).style.backgroundColor="red";
						}

						if(document.getElementById(12).style.backgroundColor=="red"){
							document.getElementById(12).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(12).style.backgroundColor="red";
						}

						break;


	 	case "9":

						if(document.getElementById(9).style.backgroundColor=="red"){
							document.getElementById(9).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(9).style.backgroundColor="red";
						}

						if(document.getElementById(10).style.backgroundColor=="red"){
							document.getElementById(10).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(10).style.backgroundColor="red";
						}

						if(document.getElementById(13).style.backgroundColor=="red"){
							document.getElementById(13).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(13).style.backgroundColor="red";
						}

						if(document.getElementById(12).style.backgroundColor=="red"){
							document.getElementById(12).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(12).style.backgroundColor="red";
						}

						if(document.getElementById(5).style.backgroundColor=="red"){
							document.getElementById(5).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(5).style.backgroundColor="red";
						}

						break;

	 	case "10":
						if(document.getElementById(10).style.backgroundColor=="red"){
							document.getElementById(10).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(10).style.backgroundColor="red";
						}

						if(document.getElementById(9).style.backgroundColor=="red"){
							document.getElementById(9).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(9).style.backgroundColor="red";
						}

						if(document.getElementById(11).style.backgroundColor=="red"){
							document.getElementById(11).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(11).style.backgroundColor="red";
						}

						if(document.getElementById(14).style.backgroundColor=="red"){
							document.getElementById(14).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(14).style.backgroundColor="red";
						}

						if(document.getElementById(6).style.backgroundColor=="red"){
							document.getElementById(6).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(6).style.backgroundColor="red";
						}

						break;

	 	case "11":
						if(document.getElementById(11).style.backgroundColor=="red"){
							document.getElementById(11).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(11).style.backgroundColor="red";
						}

						if(document.getElementById(10).style.backgroundColor=="red"){
							document.getElementById(10).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(10).style.backgroundColor="red";
						}

						if(document.getElementById(12).style.backgroundColor=="red"){
							document.getElementById(12).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(12).style.backgroundColor="red";
						}

						if(document.getElementById(7).style.backgroundColor=="red"){
							document.getElementById(7).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(7).style.backgroundColor="red";
						}

						if(document.getElementById(15).style.backgroundColor=="red"){
							document.getElementById(15).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(15).style.backgroundColor="red";
						}

						break;

	 	case "12":
						if(document.getElementById(12).style.backgroundColor=="red"){
							document.getElementById(12).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(12).style.backgroundColor="red";
						}

						if(document.getElementById(11).style.backgroundColor=="red"){
							document.getElementById(11).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(11).style.backgroundColor="red";
						}

						if(document.getElementById(9).style.backgroundColor=="red"){
							document.getElementById(9).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(9).style.backgroundColor="red";
						}

						if(document.getElementById(8).style.backgroundColor=="red"){
							document.getElementById(8).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(8).style.backgroundColor="red";
						}

						if(document.getElementById(16).style.backgroundColor=="red"){
							document.getElementById(16).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(16).style.backgroundColor="red";
						}

						break;

	 	case "13":
						if(document.getElementById(13).style.backgroundColor=="red"){
							document.getElementById(13).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(13).style.backgroundColor="red";
						}

						if(document.getElementById(14).style.backgroundColor=="red"){
							document.getElementById(14).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(14).style.backgroundColor="red";
						}

						if(document.getElementById(16).style.backgroundColor=="red"){
							document.getElementById(16).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(16).style.backgroundColor="red";
						}

						if(document.getElementById(9).style.backgroundColor=="red"){
							document.getElementById(9).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(9).style.backgroundColor="red";
						}

						if(document.getElementById(1).style.backgroundColor=="red"){
							document.getElementById(1).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(1).style.backgroundColor="red";
						}

						break;

	 	case "14":
						if(document.getElementById(14).style.backgroundColor=="red"){
							document.getElementById(14).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(14).style.backgroundColor="red";
						}

						if(document.getElementById(13).style.backgroundColor=="red"){
							document.getElementById(13).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(13).style.backgroundColor="red";
						}

						if(document.getElementById(15).style.backgroundColor=="red"){
							document.getElementById(15).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(15).style.backgroundColor="red";
						}

						if(document.getElementById(10).style.backgroundColor=="red"){
							document.getElementById(10).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(10).style.backgroundColor="red";
						}

						if(document.getElementById(2).style.backgroundColor=="red"){
							document.getElementById(2).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(2).style.backgroundColor="red";
						}

						break;

	 	case "15":
						if(document.getElementById(15).style.backgroundColor=="red"){
							document.getElementById(15).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(15).style.backgroundColor="red";
						}

						if(document.getElementById(16).style.backgroundColor=="red"){
							document.getElementById(16).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(16).style.backgroundColor="red";
						}

						if(document.getElementById(14).style.backgroundColor=="red"){
							document.getElementById(14).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(14).style.backgroundColor="red";
						}

						if(document.getElementById(11).style.backgroundColor=="red"){
							document.getElementById(11).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(11).style.backgroundColor="red";
						}

						if(document.getElementById(3).style.backgroundColor=="red"){
							document.getElementById(3).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(3).style.backgroundColor="red";
						}

						break;

	 	case "16":
						if(document.getElementById(16).style.backgroundColor=="red"){
							document.getElementById(16).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(16).style.backgroundColor="red";
						}

						if(document.getElementById(15).style.backgroundColor=="red"){
							document.getElementById(15).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(15).style.backgroundColor="red";
						}

						if(document.getElementById(12).style.backgroundColor=="red"){
							document.getElementById(12).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(12).style.backgroundColor="red";
						}

						if(document.getElementById(13).style.backgroundColor=="red"){
							document.getElementById(13).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(13).style.backgroundColor="red";
						}

						if(document.getElementById(4).style.backgroundColor=="red"){
							document.getElementById(4).style.backgroundColor="LawnGreen";
						}
						else{
							document.getElementById(4).style.backgroundColor="red";
						}

						break;

	}







	console.log(cambiada.id);
	console.log(cambiada);
	console.document.getElementById(1);




}









console.log("cuatroxcuatro.js cargado");
