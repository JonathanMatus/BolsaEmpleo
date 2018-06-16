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
        cargarListaEmpresas();
        cargarListaCategorias();
    });
    $('#categoria').on('select2:select', function (e) {
        document.getElementById("subCategoria").disabled = false;
        $('#ingresarSubCategoria').show();
        cargarListaSubCategorias();
    });
    $('#categoria').on('select2:change', function (e) {
        document.getElementById("subCategoria").disabled = false;
        $('#ingresarSubCategoria').show();
        cargarListaSubCategorias();
    });
//    $('#mostrarSubCategoria').click(function () {
//        var idCategoria = $('#categoria').select2('data');
////        alert(idEmpresaText.val);
//        if ((idCategoria[0] != null)) {
//            document.getElementById("subCategoria").disabled = false;
//            $('#ingresarSubCategoria').show();
//            cargarListaSubCategorias(idCategoria[0].id);
//        }
//    });

    $('#registrarPuesto').click(function () {
        enviar();
    });
    $('#registrarSubCat').click(function () {
        registrarSubCat();
    });
    $('#registrarCat').click(function () {
        registrarCat();
    });
    $('#listaPuestosEmpresa').click(function () {
        ocultarCampos();
        datatable = $('#tablaPuestos').DataTable({
            responsive: true,
            "destroy": true,
            "language": {
                "emptyTable": "No hay Datos disponibles en la tabla",
                "lengthMenu": "Mostrar _MENU_ datos por pagina",
                "zeroRecords": "Nada encontrado",
                "info": "Mostrando pagina _PAGE_ de _PAGES_",
                "infoEmpty": "Sin datos para mostrar",
                "infoFiltered": "(filtered from _MAX_ total records)",
                "search": "Buscar:",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            }

        });
        $('.tablas').show();
        consultarPuestos();
    });
});
function consultarPuestos() {
    swal({
        title: "Espere por favor..",
        text: "Consultando la información de los puestos en la base de datos",
        icon: "info",
        buttons: false
    });
    //Se envia la información por ajax
    $.ajax({
        url: 'PuestoServlet',
        data: {
            accion: "consultarPuestos"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de las empresas en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaPuesto(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            swal("Correcto!", "La informacion ha sido cargada correctamente.", "success");
        },
        type: 'POST',
        dataType: "json"
    });
}
function dibujarTablaPuesto(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;
    datatable.clear();
    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        datatable.row.add([
            rowData.empresa,
            rowData.nombre,
            rowData.salario,
            rowData.tipoPublicacion,
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarPuestoByID(' + rowData.pkIdPuesto + ');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarPuesto(' + rowData.pkIdPuesto + ');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button>'
        ]).draw(false);
    }


}
function enviar() {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información del puesto en la base de datos",
            icon: "info",
            buttons: false
        });
        var idEmpresaText = $('#empresaList').select2('data');
        var idSubcat = $('#subCategoria').select2('data');
        $.ajax({
            url: 'PuestoServlet',
            data: {
                accion: $("#puestoAction").val(),
                nombre: $("#nombre").val(),
                idEmpresa: idEmpresaText[0].id,
                salario: $("#salario").val(),
                tipo: $("#tipos").val(),
                idSubcategoria: idSubcat[0].id

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
        swal("Error!", "Debe digitar los campos del formulario", "error");
    }
}
function registrarSubCat() {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información de la subcategoria en la base de datos",
            icon: "info",
            buttons: false
        });
        var idCategorias = $('#categoria').select2('data');
        $.ajax({
            url: 'SubCategoriaServlet',
            data: {
                accion: 'agregarSubCategoria',
                nombre: $("#nombreSubCat").val(),
                idCategoria: idCategorias[0].id
            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto!", respuestaTxt, "success");
                    cargarListaSubCategorias(idCategorias[0].id);
                    setTimeout(function () {
                        $(".close").click();
                    }, 1000);
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
        swal("Error!", "Debe digitar los campos del formulario", "error");
    }
}
function registrarCat() {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información de la subcategoria en la base de datos",
            icon: "info",
            buttons: false
        });
        $.ajax({
            url: 'CategoriaServlet',
            data: {
                accion: 'agregarCategoria',
                nombre: $("#nombreCat").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto!", respuestaTxt, "success");
                    cargarListaCategorias();
                    setTimeout(function () {
                        $(".close").click();
                    }, 1000);
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
        swal("Error!", "Debe digitar los campos del formulario", "error");
    }
}
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
    $('#categoria').select2({
        allowClear: true,
        placeholder: "Buscar una categoria"
    });
    $('#categoria option').each(function () {
        if ($(this).val() != 'X') {
            $(this).remove();
        }
    });
    $.each(datajson, function (i, item) {
        $('#categoria').append($('<option>', {
            value: item.pkIdCategoria,
            text: item.nombreCat
        }));
    });


}
function cargarListaSubCategorias() {
    var idCategorias = $('#categoria').select2('data');
    $.ajax({
        url: 'SubCategoriaServlet',
        data: {
            accion: "consultarSubCategoriasByCat",
            idCategoria: idCategorias[0].id
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
    $('#subCategoria option').each(function () {
        if ($(this).val() != 'X') {
            $(this).remove();
        }
    });
    $.each(datajson, function (i, item) {
        $('#subCategoria').append($('<option>', {
            value: item.pkIdSubcategoria,
            text: item.nombreSub
        }));
    });
    $('#subCategoria').select2();
}
