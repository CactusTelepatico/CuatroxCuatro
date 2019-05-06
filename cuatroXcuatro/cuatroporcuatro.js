
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

		if(cambiada.style.background=="red"){
			cambiada.style.background="LawnGreen";
			document.getElementById(5).style.background="LawnGreen";
		}
		else{
			cambiada.style.background="red";
			document.getElementById(5).style.background="red";
		}






	console.log(cambiada.id);
	console.log(cambiada);




}









console.log("cuatroxcuatro.js cargado");
