/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//******************************************************************************

$(function () {
    //Genera el datapicker

    //agrega los eventos las capas necesarias
    $("#registrar").click(function () {
        enviar();
    });

    //agrega los eventos las capas necesarias



});


function enviar() {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información de la empresa en la base de datos",
            icon: "info",
            buttons: false
        });
        $.ajax({
            url: 'OferenteServlet',
            data: {
                accion: $("#oferenteAction").val(),
                cedula: $("#cedula").val(),
                nombre: $("#nombre").val(),
                telefono: $("#telefono").val(),
                apellido1: $("#priApellido").val(),
                apellido2: $("#segApellido").val(),
                nacionalidad: $("#nacionalidad").val(),
                correo: $("#correo").val(),
                residencia: $("#residencia").val(),
                latitud: $("#lat").val(),
                longitud: $("#lng").val()

            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto!", respuestaTxt, "success");
                        limpiarForm();

                } else {
                    if (tipoRespuesta === "E~") {
                        swal("Error!", respuestaTxt, "error");
                    } else {
                        swal("Error!", "Se genero un error, contacte al administrador", "error");
                    }
                }

            },
            type: 'POST'
        });
    } else {
        swal("Error!", "Debe digitar los campos del formulario y seleccionar la ubicación", "error");
    }
}

function validar() {
    var validacion = true;
    //Elimina estilo de error en los cs

    $("#groupCedula").removeClass("has-error");
    $("#groupNombre").removeClass("has-error");
    $("#groupTelefono").removeClass("has-error");
    $("#groupApellido1").removeClass("has-error");
    $("#groupApellido2").removeClass("has-error");
    $("#groupNacionalidad").removeClass("has-error");
    $("#groupCorreo").removeClass("has-error");
    $("#groupResidencia").removeClass("has-error");


    if ($("#cedula").val() === "") {
        $("#groupCedula").addClass("has-error");
        validacion = false;
    }
    if ($("#nombre").val() === "") {
        $("#groupNombre").addClass("has-error");
        validacion = false;
    }
    if ($("#priApellido").val() === "") {
        $("#groupApellido1").addClass("has-error");
        validacion = false;
    }
    if ($("#segApellido").val() === "") {
        $("#groupApellido2").addClass("has-error");
        validacion = false;
    }
    if ($("#nacionalidad").val() === "") {
        $("#groupNacionalidad").addClass("has-error");
        validacion = false;
    }
    if ($("#correo").val() === "") {
        $("#groupCorreo").addClass("has-error");
        validacion = false;
    }
//    else{
//        validateEmail("correo");
//    }
    if ($("#residencia").val() === "") {
        $("#groupResidencia").addClass("has-error");
        validacion = false;
    }
    return validacion;

}




function limpiarForm() {

    $('#formulario').trigger("reset");
}

