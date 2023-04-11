// DARLE LA BIENVENIDA AL USUARIO
function saludar(){
    alert(("Bienvenido a mi sitio!"));
}

saludar();

// DÍAS DE LA SEMANA

function empezar(){
    let dia1 = "Lunes";
    let dia2 = "Martes";
    let dia3 = "Miercoles";
    let dia4 = "Jueves";
    let dia5 = "Viernes";
    let dia6 = "Sabado";
    let dia7 = "Domingo";

    let dia = prompt("Ingrese un número del 1 al 7");
    if (dia == 1){ 
        alert(dia1);
    } else if (dia == 2){
        alert(dia2);
    } else if (dia == 3){
        alert(dia3);
    } else if (dia == 4){
        alert(dia4);
    } else if (dia == 5){
        alert(dia5);
    } else if (dia == 6){
        alert(dia6);
    } else if (dia == 7){
        alert(dia7);
    } else {
        prompt("¿Acaso creías que existían más días?")
        alert("No hacía falta responder, era sarcasmo.")
        alert("Gracias por jugar")
    }
}