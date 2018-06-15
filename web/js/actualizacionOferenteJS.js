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
//    $('#categoriaList').on('select2:change', function (e) {
//        var idCategoria = $('#categoriaList').select2('data');
////        alert(idEmpresaText.val);
//        if ((idCategoria[0] != null)) {
//            document.getElementById("SubcategoriaList").disabled = false;
//            $('#ingresarSubCategoria').show();
//            cargarListaSubCategorias(idCategoria[0].id);
//        }
//    });

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
function llenarSubCategorias(datajson) {


    $('#SubcategoriaList').select2();
    $('#SubcategoriaList option').each(function () {
        if ($(this).val() != 'X') {
            $(this).remove();
        }
    });
    $.each(datajson, function (i, item) {
//        $('#SubcategoriaList option[value="' + item.pkIdSubcategoria +' "]').remove();
        $('#SubcategoriaList').append($('<option>', {
            value: item.pkIdSubcategoria,
            text: item.nombreSub
        }));
    });

}
