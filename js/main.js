//DATOS DE VALIDACION DE LOS IMPUT
function saveData(){
	var name = document.getElementById('name').value;
	var clave =document.getElementById('clave').value;
	sessionStorage.setItem(name,clave);
}

function recoverData(){
	for (var i = 0; i < sessionStorage.length; i++) {
		var name = sessionStorage.key(i);
		var clave = sessionStorage.getItem(name);
		document.getElementById('data').innerHTML = '<div>'+'Nombre :'+name+'<br/>clave :' +clave+'</div>';
	}
}

function clearData(){
	document.getElementById('data').innerHTML='Limpiada vista.los datos permanecen';
}
function borrarTodo(){
	sessionStorage.clear(); recoverData();
}