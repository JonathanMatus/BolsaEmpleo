/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function ()
{
    $("#ingresar").click(function () {
        Entrar();
    });
    $("#ingresar2").click(function () {
        Entrar2();
    });
    $("#logout").on("click", function () {
        cerrarSesion();
    });
    $("#logout2").on("click", function () {
        cerrarSesion2();
    });

});

function cerrarSesion() {
    swal({
        title: "Correcto",
        text: "Sesion cerrada correctamente",
        icon: "success",
        buttons: false
    }).then(setTimeout(function () {
        window.location = "Logout";
    }, 2000));
}
function cerrarSesion2() {
    swal({
        title: "Correcto",
        text: "Sesion cerrada correctamente",
        icon: "success",
        buttons: false
    }).then(setTimeout(function () {
        window.location = "../Logout";
    }, 2000));
}
function Entrar() {


    // mostrarModal("myModal", "Espere por favor..", "Cargando información de Usuario");
    $.ajax({
        url: 'ControllerLogin',
        data: {
            accion: "loginUsuario",
            usuario: $("#userid").val(),
            password: $("#passwordinput").val()
        },
        error: function () { //si existe un error en la respuesta del ajax   
            swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se cambia el mensaje del modal por la respuesta del ajax
            // ocultarModal("myModal");
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "C~") {
                swal({
                    title: "Espere por favor..",
                    text: respuestaTxt,
                    icon: "success",
                    buttons: false
                });
                setTimeout(function () {
                    window.location = "PaginaPrincipal.jsp";
                }, 2000);
            } else {
                if (tipoRespuesta === "E~") {
                    swal("Error!", respuestaTxt, "error");
                } else {
                    swal("Error!", "Se genero un error, contacte al administrador", "error");
                }
            }
        },
        type: 'POST',
        dataType: "text"
    });
}
function Entrar2() {


    // mostrarModal("myModal", "Espere por favor..", "Cargando información de Usuario");
    $.ajax({
        url: '../ControllerLogin',
        data: {
            accion: "loginUsuario",
            usuario: $("#userid").val(),
            password: $("#passwordinput").val()
        },
        error: function () { //si existe un error en la respuesta del ajax   
            swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se cambia el mensaje del modal por la respuesta del ajax
            // ocultarModal("myModal");
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "C~") {
                swal({
                    title: "Espere por favor..",
                    text: respuestaTxt,
                    icon: "success",
                    buttons: false
                });
                setTimeout(function () {
                    window.location = "../PaginaPrincipal.jsp";
                }, 2000);
            } else {
                if (tipoRespuesta === "E~") {
                    swal("Error!", respuestaTxt, "error");
                } else {
                    swal("Error!", "Se genero un error, contacte al administrador", "error");
                }
            }
        },
        type: 'POST',
        dataType: "text"
    });
}


