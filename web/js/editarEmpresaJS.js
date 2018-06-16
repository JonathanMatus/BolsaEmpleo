/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){ 
    
    consultarEmpresas();
     $("#editarEmpresa").click(function () {
        enviar();
    });
    
});



function consultarEmpresas() {

    swal({
        title: "Espere por favor..",
        text: "Consultando la información de empresas en la base de datos",
        icon: "info",
        buttons: false
    });
    //Se envia la información por ajax
    $.ajax({
        url: 'EmpresaServlet',
        data: {
            accion: "ConsultarEmpresa"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de las empresas en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
           $("#nombre").val(data[0].nombre);
           $("#correo").val(data[0].correo);
           $("#telefono").val(data[0].telefono);
           $("#descripcion").val(data[0].descripcion);
           $("#idEmpresa").val(data[0].pkIdEmp);
           $("#idLocalizacion").val(data[0].localizacion);
            // se oculta el modal esta funcion se encuentra en el utils.js
            swal("Correcto!", "La informacion ha sido cargada correctamente.", "success");
        },
        type: 'POST',
        dataType: "json"
    });
}


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
            url: 'EmpresaServlet',
            data: {
                accion: "modificarEmpresa",
                idEmpresa: $("#idEmpresa").val(),
                nombre: $("#nombre").val(),
                telefono: $("#telefono").val(),
                correo: $("#correo").val(),
                descripcion: $("#descripcion").val(),
                idLongitud: $("#idLocalizacion").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto!", respuestaTxt, "success");


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
    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input

    $("#groupNombre").removeClass("has-error");
    $("#groupCorreo").removeClass("has-error");
    $("#groupTelefono").removeClass("has-error");
    $("#groupDescripcion").removeClass("has-error");


    if ($("#nombre").val() === "") {
        $("#groupNombre").addClass("has-error");
        validacion = false;
    }
    if ($("#correo").val() === "") {
        $("#groupCorreo").addClass("has-error");
        validacion = false;
    }
    else{
       validacion=validateEmail("correo");
    }
    if ($("#telefono").val() === "") {
        $("#groupTelefono").addClass("has-error");
        validacion = false;
    }
    if ($("#descripcion").val() === "") {
        $("#groupDescripcion").addClass("has-error");
        validacion = false;
    }
    if ($("#lat").val() === "" && $("#lng").val() === "") {
        handleLocationError();
        validacion = false;
    }

    return validacion;
}