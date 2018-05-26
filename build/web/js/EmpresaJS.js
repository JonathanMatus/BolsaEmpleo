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

//******************************************************************************
//Se ejecuta cuando la página esta completamente cargada
//******************************************************************************


//******************************************************************************
//******************************************************************************
//metodos para consultas el listado de las personas
//******************************************************************************
//******************************************************************************







//******************************************************************************
//******************************************************************************
//El metodo enviar funciona tanto para el insertar como para el modificar
//******************************************************************************
//******************************************************************************

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
                accion: $("#empresaAction").val(),
                nombre: $("#nombre").val(),
                telefono: $("#telefono").val(),
                correo: $("#correo").val(),
                descripcion: $("#descripcion").val(),
                longitud: $("#lng").val(),
                latitud: $("#lat").val()
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

//******************************************************************************
//******************************************************************************
//metodos para eliminar personas
//******************************************************************************
//******************************************************************************

function eliminarPersona(idPersona) {
    mostrarModal("myModal", "Espere por favor..", "Se esta eliminando a la persona seleccionada");
    //Se envia la información por ajax
    $.ajax({
        url: 'PersonasServlet',
        data: {
            accion: "eliminarPersonas",
            idPersona: idPersona
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModal", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se cambia el mensaje del modal por la respuesta del ajax
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "E~") {
                cambiarMensajeModal("myModal", "Resultado acción", respuestaTxt);
            } else {
                setTimeout(consultarPersonas, 3000); // hace una pausa y consulta la información de la base de datos
            }
        },
        type: 'POST',
        dataType: "text"
    });
}

//******************************************************************************
//******************************************************************************
//metodos para eliminar personas
//******************************************************************************
//******************************************************************************

function consultarPersonaByID(idPersona) {
    mostrarModal("myModal", "Espere por favor..", "Consultando la persona seleccionada");
    //Se envia la información por ajax
    $.ajax({
        url: 'PersonasServlet',
        data: {
            accion: "consultarPersonasByID",
            idPersona: idPersona
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModal", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se oculta el mensaje de espera
            ocultarModal("myModal");
            limpiarForm();
            //se muestra el formulario
            $("#myModalFormulario").modal();
            //************************************************************************
            //carga información de la persona en el formulario
            //************************************************************************
            //se indicar que la cédula es solo readOnly
            $("#cedula").attr('readonly', 'readonly');
            //se modificar el hidden que indicar el tipo de accion que se esta realizando
            $("#personasAction").val("modificarPersona");
            //se carga la información en el formulario
            $("#cedula").val(data.pkCedula);
            $("#nombre").val(data.nombre);
            $("#apellido1").val(data.apellido1);
            $("#apellido2").val(data.apellido2);
            //carga de fecha
            var fecha = new Date(data.fecNacimiento);
            var fechatxt = fecha.getDate() + "/" + fecha.getMonth() + 1 + "/" + fecha.getFullYear();
            $("#dpFechaNacimiento").data({date: fechatxt});
            $("#dpFechaNacimientoText").val(fechatxt);
            //$("#dpFechaNacimiento")$('.datepicker').datepicker('update', new Date(2011, 2, 5));
            $("#sexo").val(data.sexo);
            $("#observaciones").val(data.observaciones);
        },
        type: 'POST',
        dataType: "json"
    });
}


//******************************************************************************
//******************************************************************************

function mostrarMensaje(classCss, msg, neg) {
//se le eliminan los estilos al mensaje
    $("#mesajeResult").removeClass();
    //se setean los estilos
    $("#mesajeResult").addClass(classCss);
    //se muestra la capa del mensaje con los parametros del metodo
    $("#mesajeResult").fadeIn("slow");
    $("#mesajeResultNeg").html(neg);
    $("#mesajeResultText").html(msg);
    $("#mesajeResultText").html(msg);
}

//******************************************************************************
//******************************************************************************

function limpiarForm() {
//setea el focus del formulario
    $('#cedula').focus();
    $("#cedula").removeAttr("readonly"); //elimina el atributo de solo lectura

    //se cambia la accion por agregarPersona
    $("#personasAction").val("agregarPersona");
    //esconde el div del mensaje
    mostrarMensaje("hiddenDiv", "", "");
    //Resetear el formulario
    $('#formPersonas').trigger("reset");
}
