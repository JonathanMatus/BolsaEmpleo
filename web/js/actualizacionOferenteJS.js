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

    $("#editarOfe").click(function () {
        window.location.href = "http://localhost:8080/BolsaEmpleo/vistas/editarOferente.jsp";
    });

    $('#listaCaracteristicas').click(function () {
        ocultarCampos();
        datatable = $('#tablaCaracteristica').DataTable({
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
        $('#tablaCaracteristica').show();
        consultarOferente();
    });


    $('[data-toggle="tooltip"]').tooltip();
    $(".side-nav .collapse").on("hide.bs.collapse", function () {
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
    });

    $('.side-nav .collapse').on("show.bs.collapse", function () {
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
    });
    $("#editarOferente").click(function () {
        editarOferente();
    });

    $('#registrarCaracteristica').click(function () {
        enviar();
    });

    $('#ingresarPuesto').click(function () {
        ocultarCampos();
        $('#registroPuesto').show();
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
function consultarOferente() {
    //Se envia la información por ajax
    $.ajax({
        url: 'OferenteServlet',
        data: {
            accion: "consultarOferenteById",
            idOferente: $('#cedulaHidden').val()
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los oferentes en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaOferente(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
function consultarOferenteByID(idOferente) {


    //Se envia la información por ajax
    $.ajax({
        url: 'OferenteServlet',
        data: {
            accion: "consultarOferenteById",
            idOferente: idOferente
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los oferentes en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data

            llenarModalOferente(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
function dibujarTablaOferente(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;
    datatable
            .clear()
            .draw();
    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        datatable.row.add([
            rowData.nombre,
            rowData.nacionalidad,
            rowData.correo,
            rowData.residencia,
            '<button type="button" class="btn btn-default btn-xs" data-toggle="modal" data-target="#ModalOferente" aria-label="Left Align" onclick="consultarOferenteByID(' + rowData.pkCedula + ');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>'
        ]).draw(false);
    }


}
function llenarModalOferente(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;

    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        $('#cedulaOfer').val(rowData.pkCedula);
        $('#nombreOfer').val(rowData.nombre);
        $('#priApellidoOfer').val(rowData.apellido1);
        $('#segApellidoOfer').val(rowData.apellido2);
        $('#nacionalidadOfer').val(rowData.nacionalidad);
        $('#correoOfer').val(rowData.correo);
        $('#residenciaOfer').val(rowData.residencia);
        $('#oferentemap').locationpicker({
            location: {
                latitude: 9.9280694,
                longitude: -84.09072459999999
            },
            radius: 0,
            inputBinding: {
                latitudeInput: $('#latOfer'),
                longitudeInput: $('#longOfer'),
                radiusInput: $('#oferentemap-radius'),
                locationNameInput: $('#residenciaOfer')
            },
            enableAutocomplete: true,
            autocompleteOptions: {
                types: ['(cities)']
            }
        });
    }


}
function editarOferente() {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información de la Oferente en la base de datos",
            icon: "info",
            buttons: false
        });
        $.ajax({
            url: 'OferenteServlet',
            data: {
                accion: "modificarOferente",
                cedula: $("#cedulaOfer").val(),
                nombre: $("#nombreOfer").val(),
                telefono: $("#telefonoOfer").val(),
                apellido1: $("#priApellidoOfer").val(),
                apellido2: $("#segApellidoOfer").val(),
                nacionalidad: $("#nacionalidadOfer").val(),
                correo: $("#correoOfer").val(),
                residencia: $("#residenciaOfer").val(),
                latitud: $("#latOfer").val(),
                longitud: $("#longOfer").val()

            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto!", respuestaTxt, "success").then(consultarOferente());
                   

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
function ocultarCampos() {
    $('.formPuesto').hide();
    $('#tablaCaracteristica').hide();
    $('#registroPuesto').hide();
    if (datatable !== null) {
        datatable.destroy();
        datatable = null;
    }

}

function validar() {
    return true;
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



function enviar() {
    if (validar()) {
        $.ajax({
            url: 'OferenteServlet',
            data: {
                accion: "guardarCaracteristicasOfe",
                idCate: $('select[id="categoriaList"] option:selected').val(),
                idSub: $('select[id="SubcategoriaList"] option:selected').val(),
                descripcion: $("#descripcion").val()
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
        wal("Error!", "Debe digitar los campos del formulario", "error");

    }
}


function consultarCaracteristicas() {

    swal({
        title: "Espere por favor..",
        text: "Consultando la información de sus caracteristicas en la base de datos",
        icon: "info",
        buttons: false
    });
    //Se envia la información por ajax
    $.ajax({
        url: 'OferenteServlet',
        data: {
            accion: "consultarCaracteOferente"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los oferentes en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaCaracteristicas(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            swal("Correcto!", "La informacion ha sido cargada correctamente.", "success");
        },
        type: 'POST',
        dataType: "json"
    });
}


function dibujarTablaCaracteristicas(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;
    datatable
            .clear()
            .draw();
    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        datatable.row.add([
            rowData.subcategoria,
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarCaracteristicaByID(' + rowData.pkIdCaracteristicas + ');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarCaracteristica(' + rowData.pkIdCaracteristicas + ');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button>'
        ]).draw(false);
    }


}






function validar() {
    var validacion = true;
    //Elimina estilo de error en los cs

    $("#categoriaList").removeClass("has-error");
    $("#SubcategoriaList").removeClass("has-error");

    if ($("#categoriaList").val() === "") {
        $("#groupCate").addClass("has-error");
        validacion = false;
    }
    if ($("#SubcategoriaList").val() === "") {
        $("#groupSubCate").addClass("has-error");
        validacion = false;
    }

    return validacion;

}

function limpiarForm() {

    $('#forma').trigger("reset");
}
