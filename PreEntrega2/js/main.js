// DAR BIENVENIDA AL USUARIO

function saludar(){
    alert(("¡Bienvenido/a a mi segunda pre-entrega!"));
}

saludar();

//

// MOSTRAR HORA ACTUAL

function horaActual(){
    horaActual = new Date()
    hora = horaActual.getHours()
    minuto = horaActual.getMinutes()
    segundo = horaActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("horaActual()",1000)
}

// CREANDO EL OBJETO DE EQUIPOS

function Equipo(nombre,ciudad,fundacion,titulosInternacionales){
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.fundacion = fundacion;
    this.titulosInternacionales = titulosInternacionales;
}

const equipo1 = new Equipo("Independiente", "Avellaneda", "Fundado en 1905", "18 Copas Internacionales");
const equipo2 = new Equipo("Boca Juniors", "La Boca", "Fundado en 1905", "18 Copas Internacionales");
const equipo3 = new Equipo("River Plate", "Núñez", "Fundado en 1901", "12 Copas Internacionales");
const equipo4 = new Equipo("Racing Club", "Avellaneda", "Fundado en 1903", "3 Copas Internacionales");
const equipo5 = new Equipo("San Lorenzo", "Boedo", "Fundado en 1908", "3 Copas Internacionales");

function Independiente(){
    alert(equipo1.nombre);
    alert(equipo1.ciudad);
    alert(equipo1.fundacion);
    alert(equipo1.titulosInternacionales);
}

function Boca(){
    alert(equipo2.nombre);
    alert(equipo2.ciudad);
    alert(equipo2.fundacion);
    alert(equipo2.titulosInternacionales);
}

function River(){
    alert(equipo3.nombre);
    alert(equipo3.ciudad);
    alert(equipo3.fundacion);
    alert(equipo3.titulosInternacionales);
}

function Racing(){
    alert(equipo4.nombre);
    alert(equipo4.ciudad);
    alert(equipo4.fundacion);
    alert(equipo4.titulosInternacionales);
}

function SanLorenzo(){
    alert(equipo5.nombre);
    alert(equipo5.ciudad);
    alert(equipo5.fundacion);
    alert(equipo5.titulosInternacionales);
}