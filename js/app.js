var estudiantes = [
	{
		"codigo": 1,
		"nombre": "alan",
		"nota": 8.5
	},
	{
		"codigo": 2,
		"nombre": "brenda",
		"nota": 9.0
	},
	{
		"codigo": 3,
		"nombre": "richard",
		"nota": 9.7
	},
	{
		"codigo": 4,
		"nombre": "brenda",
		"nota": 9.1
	},
	{
		"codigo": 5,
		"nombre": "sebas",
		"nota": 7.0
	},
	{
		"codigo": 6,
		"nombre": "diana",
		"nota": 6.7
	},
	{
		"codigo": 7,
		"nombre": "danny",
		"nota": 8.5
	},
	{
		"codigo": 8,
		"nombre": "mariana",
		"nota": 9.0
	},
	{
		"codigo": 9,
		"nombre": "jacqueline",
		"nota": 9.2
	},
	{
		"codigo": 10,
		"nombre": "fabiola",
		"nota": 9.0
	},
];

// Estudiantes
function mostrarEstudiantes(){
	document.getElementById('alumnos').style.display = "table";
	var notasTBody = document.getElementById('notas');
	
	while(notasTBody.hasChildNodes()){
		notasTBody.removeChild(notasTBody.lastChild);
	}
	
	for(var i = 0; i < estudiantes.length; i++){
		var nuevoTr = document.createElement('tr');
		
		var idTd = document.createElement('td');
		idTd.textContent = estudiantes[i].codigo;
		nuevoTr.appendChild(idTd);
		
		var nombreTd = document.createElement('td');
		nombreTd.textContent = estudiantes[i].nombre;
		nuevoTr.appendChild(nombreTd);
		
		var notaTd = document.createElement('td');
		notaTd.textContent = estudiantes[i].nota;
		nuevoTr.appendChild(notaTd);
		
		notasTBody.appendChild(nuevoTr);
	}
}

// Nota mayor
function calcularNotamayor(){
	var indiceNotamayor = 0;
	var notaMayor = estudiantes[indiceNotamayor].nota;
	
	for(var i = 1; i < estudiantes.length; i++){
		if(estudiantes[i].nota > notaMayor){
			notaMayor = estudiantes[i].nota;
			indiceNotamayor = i;
		}
	}
	alert("El estudiante " + estudiantes[indiceNotamayor].nombre + " tiene la nota mayor: " + notaMayor);
}

// Nota menor
function calcularNotamenor(){
	var indiceNotamenor = 0;
	var notaMenor = estudiantes[indiceNotamenor].nota;
	
	for(var i = 1; i < estudiantes.length; ++i){
		if(estudiantes[i].nota < notaMenor){
			notaMenor = estudiantes[i].nota;
			indiceNotamenor = i;
		}
	}
	alert("El estudiante " + estudiantes[indiceNotamenor].nombre + " tiene la nota menor: " + notaMenor);
}
// Promedio
function calcularNotapromedio(){
	var sumaNotas = 0.0;
	
	for(var i = 0; i < estudiantes.length; ++i){
		sumaNotas += estudiantes[i].nota;
	}
	
	alert("La nota promedio es: " + (sumaNotas/estudiantes.length).toFixed(2));
}
