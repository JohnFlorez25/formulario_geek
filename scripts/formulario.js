console.log("Mi ejercicio de formulario con storage");

//Definir variables
let miNombre = "";

//Prevenir que se realice la acción SUBMIT
document.getElementById('form')
    .addEventListener(
            'submit', 
            function formSumbit(event){
              event.preventDefault();
            }
    );

//Agregar un evento al boton enviar "btnEnviar"
let buttonEnviar = document.getElementById('btnEnviar');
buttonEnviar.addEventListener('click', capturarDatos);
function capturarDatos(){
    console.log("El evento CLICK se está disparando");
    //Captura la información del input relacionado con el Nombre;
    miNombre = document.getElementById("inputNombre").value;

    //imprimir lo que se captura del input
    console.log(miNombre);
}


