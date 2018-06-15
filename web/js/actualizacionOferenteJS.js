/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var datatable = null;
$(function () {

    $('[data-toggle="tooltip"]').tooltip();
    $(".side-nav .collapse").on("hide.bs.collapse", function () {
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
    });
    $('.side-nav .collapse').on("show.bs.collapse", function () {
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
    });
    $('#ingresarPuesto').click(function () {
        ocultarCampos();
        $('.formPuesto').show();
        cargarListaCategorias();
        cargarListaSubCategorias();
    });
    $('#categoriaList').on('select2:select', function (e) {
        var idCategoria = $('#categoriaList').select2('data');
        document.getElementById("SubcategoriaList").disabled = false;
        $('#ingresarSubCategoria').show();
        cargarListaSubCategorias(idCategoria[0].id);
    });
    $('#categoriaList').on('select2:change', function (e) {
        var idCategoria = $('#categoriaList').select2('data');
        document.getElementById("SubcategoriaList").disabled = false;
        $('#ingresarSubCategoria').show();
        cargarListaSubCategorias(idCategoria[0].id);
    });

});




function ocultarCampos() {
    $('.formPuesto').hide();
    $('.tablas').hide();
    if (datatable !== null) {
        datatable.destroy();
        datatable = null;
    }
//    if (datatable)
//    datatable.clear();
}
function validar() {
    return true;
}
function cargarListaEmpresas() {

    $.ajax({
        url: 'EmpresaServlet',
        data: {
            accion: "consultarEmpresas"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de las empresas en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            llenarEmpresas(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
        },
        type: 'POST',
        dataType: "json"

    });
}
function llenarEmpresas(datajson) {
    $.each(datajson, function (i, item) {
        $("#empresaList option[value='" + item.pkIdEmp + "']").remove();
        $('#empresaList').append($('<option>', {
            value: item.pkIdEmp,
            text: item.nombre
        }));
    });
    $('#empresaList').select2({
        allowClear: true,
        placeholder: "Buscar una Empresa"
    });
}
function cargarListaCategorias() {

    $.ajax({
        url: 'CategoriaServlet',
        data: {
            accion: "consultarCategorias"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de las categorias en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            llenarCategorias(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
        },
        type: 'POST',
        dataType: "json"
    });
}
function llenarCategorias(datajson) {
     $('#categoriaList').select2({
        allowClear: true,
        placeholder: "Buscar una categoria"
    });
    $('#categoriaList option').each(function () {
        if ($(this).val() != 'X') {
            $(this).remove();
        }
    });
    $.each(datajson, function (i, item) {
        $('#categoriaList').append($('<option>', {
            value: item.pkIdCategoria,
            text: item.nombreCat
        }));
    });
   
}

function cargarListaSubCategorias(id) {
    $.ajax({
        url: 'SubCategoriaServlet',
        data: {
            accion: "consultarSubCategoriasByCat",
            idCategoria: id
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de las categorias en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            llenarSubCategorias(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
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
            text: "Ingresando la información de caracteristicas en la base de datos",
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

function limpiarForm() {

    $('#formulario').trigger("reset");
}
