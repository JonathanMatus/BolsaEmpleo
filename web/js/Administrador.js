/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//$(document).ready(function () {
//    mostrarOferentes();
//     mostrarEmpresas();
//});

var datatable = null;
$(function () {
    $("#editarOferente").click(function () {
        editarOferente();
    });
    $("#editarSubCatB").click(function () {
        editarSubCat();
    });
    $("#editarCatB").click(function () {
        editarCat();
    });
    $("#editarEmp").click(function () {
        editarEmpresa();
    });
    $("#editarPuesto").click(function () {
        editarPuesto();
    });
    $('.tablas').show();
    $('#listaOferentes').click(function () {
        ocultarTablas();
        datatable = $('#tablaOferente1').DataTable({
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
        $('#tablaOferente1').show();
        consultarOferente();
    });
    $('#listaCategorias').click(function () {
        ocultarTablas();
        datatable = $('#tablaCategorias').DataTable({
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
        $('#tablaCategorias').show();
        consultarCategorias();
    });
    $('#listaSubCategorias').click(function () {
        ocultarTablas();
        datatable = $('#tablaSubCategorias').DataTable({
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
        $('#tablaSubCategorias').show();
        consultarSubCategorias();
    });
    $('#listaSubCategorias').click(function () {
        ocultarTablas();
        datatable = $('#tablaSubCategorias').DataTable({
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
        $('#tablaSubCategorias').show();
        consultarSubCategorias();
    });
    $('#listaPuestos').click(function () {
        ocultarTablas();
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
        $('#tablaPuestos').show();
        consultarPuestos();
    });
    $('#listaEmpresas').click(function () {
        ocultarTablas();
        datatable = $('#tablaEmpresas1').DataTable({
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
        $('#tablaEmpresas1').show();
        consultarEmpresas();
    });
    $('#listaOferentesSinUsu').click(function () {
        ocultarTablas();
        datatable = $('#tablaOferenteEspera1').DataTable({
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
        $('#tablaOferenteEspera1').show();
        consultarOferenteEspera();
    });
    $('#listaEmpresasSinUsu').click(function () {
        ocultarTablas();
        datatable = $('#tablaEmpresaEspera').DataTable({
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
        $('#tablaEmpresaEspera').show();
        consultarEmpresaEspera();
    });

});
function dibujarTablaOferenteEspera(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;
    datatable
            .clear()
            .draw();
    for (var i = 0; i < dataJson.length; i++) {
        rowData = dataJson[i];
        var cedula = dataJson[i].pkCedula;
        var correo = dataJson[i].correo;
        datatable.row.add([
            rowData.pkCedula,
            rowData.correo,
            '<div class="col-sm-3 form-group" id="groupUsuario">' + '<input type="text" id="usu-' + rowData.pkCedula + '"/>' + '</div>',
            '<div class="col-sm-3 form-group" id="groupContra">' + '<input type="text" id="con-' + rowData.pkCedula + '"/>' + '</div>',
            '<div class="col-sm-3 form-group" id="groupTipo">' + '<input type="text"  value="Oferente" readonly/>' + '</div>',
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="AsignarUsuarioOferente(\'' + correo + '\',' + cedula + ');">' +
                    'Asignar' +
                    '</button>'
        ]).draw(false);
    }
}
function dibujarTablaEmpresaEspera(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;
    datatable
            .clear()
            .draw();
    for (var i = 0; i < dataJson.length; i++) {
        rowData = dataJson[i];
        var id = dataJson[i].pkIdEmp;
        var correo = dataJson[i].correo;
        datatable.row.add([
            rowData.nombre,
            rowData.correo,
            '<div class="col-sm-3 form-group" id="groupUsuario">' + '<input type="text"  id="usu-' + rowData.pkIdEmp + '"/>' + '</div>',
            '<div class="col-sm-3 form-group" id="groupContra">' + '<input type="text"  id="con-' + rowData.pkIdEmp + '"/>' + '</div>',
            '<div class="col-sm-3 form-group" id="groupTipo">' + '<input type="text"   value="Empresa" readonly/>' + '</div>',
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="AsignarUsuarioEmpresa(\'' + correo + '\',' + id + ');">' +
                    'Asignar' +
                    '</button>'
        ]).draw(false);
    }
}
function consultarOferenteEspera() {

    swal({
        title: "Espere por favor..",
        text: "Consultando la información de oferentes en la base de datos",
        icon: "info",
        buttons: false
    });
    //Se envia la información por ajax
    $.ajax({
        url: 'OferenteServlet',
        data: {
            accion: "oferentesEspera",
            nomCategoria: $('select[id="categoriaList"] option:selected').val()
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los oferentes en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaOferenteEspera(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            swal("Correcto!", "La informacion ha sido cargada correctamente.", "success");
        },
        type: 'POST',
        dataType: "json"
    });
}
function consultarEmpresaEspera() {

    swal({
        title: "Espere por favor..",
        text: "Consultando la información de Empresas en la base de datos",
        icon: "info",
        buttons: false
    });
    //Se envia la información por ajax
    $.ajax({
        url: 'EmpresaServlet',
        data: {
            accion: "empresaEspera"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los Empresas en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaEmpresaEspera(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            swal("Correcto!", "La informacion ha sido cargada correctamente.", "success");
        },
        type: 'POST',
        dataType: "json"
    });
}
function ocultarTablas() {
    $('#tablaOferente1').hide();
    $('#tablaCategorias').hide();
    $('#tablaSubCategorias').hide();
    $('#tablaEmpresas1').hide();
    $('#tablaPuestos').hide();
    $('#tablaOferenteEspera1').hide();
    $('#tablaEmpresaEspera').hide();
    if (datatable !== null) {
        datatable.destroy();
        datatable = null;
    }

//    if (datatable)
//    datatable.clear();
}

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
            accion: "empresaConUsuario"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de las empresas en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaEmpresa(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            swal("Correcto!", "La informacion ha sido cargada correctamente.", "success");
        },
        type: 'POST',
        dataType: "json"
    });
}

function consultarOferente() {

    swal({
        title: "Espere por favor..",
        text: "Consultando la información de oferentes en la base de datos",
        icon: "info",
        buttons: false
    });
    //Se envia la información por ajax
    $.ajax({
        url: 'OferenteServlet',
        data: {
            accion: "consultarOferenteConUsu"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los oferentes en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaOferente(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            swal("Correcto!", "La informacion ha sido cargada correctamente.", "success");
        },
        type: 'POST',
        dataType: "json"
    });
}
function consultarCategorias() {

    swal({
        title: "Espere por favor..",
        text: "Consultando la información de categorias en la base de datos",
        icon: "info",
        buttons: false
    });
    //Se envia la información por ajax
    $.ajax({
        url: 'CategoriaServlet',
        data: {
            accion: "consultarCategorias"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de las categorias en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaCategorias(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            swal("Correcto!", "La informacion ha sido cargada correctamente.", "success");
        },
        type: 'POST',
        dataType: "json"
    });
}
function consultarSubCategorias() {
    datatable.clear();
    swal({
        title: "Espere por favor..",
        text: "Consultando la información de subcategorias en la base de datos",
        icon: "info",
        buttons: false
    });
    //Se envia la información por ajax
    $.ajax({
        url: 'SubCategoriaServlet',
        data: {
            accion: "consultarSubCategoriasEliminables"
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de las subcategorias en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaSubCategorias(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            swal("Correcto!", "La informacion ha sido cargada correctamente.", "success");
        },
        type: 'POST',
        dataType: "json"
    });
}
function dibujarTablaCategorias(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;
    datatable
            .clear()
            .draw();
    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        datatable.row.add([
            rowData.pkIdCategoria,
            rowData.nombreCat,
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" data-toggle="modal" data-target="#ModalCategorias" onclick="consultarCategoriaByID(' + rowData.pkIdCategoria + ');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarCategoria(' + rowData.pkIdCategoria + ');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button>'
        ]).draw(false);
    }


}
function dibujarTablaSubCategorias(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;
    datatable
            .clear()
            .draw();
    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        datatable.row.add([
            rowData.pkIdSubcategoria,
            rowData.categoria,
            rowData.nombreSub,
            '<button type="button" class="btn btn-default btn-xs"  aria-label="Left Align" data-toggle="modal" data-target="#ModalSubCategorias" onclick="consultarSubCategoriaByID(' + rowData.pkIdSubcategoria + ');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarSubCategoria(' + rowData.pkIdSubcategoria + ');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button>'
        ]).draw(false);
    }


}
function dibujarTablaEmpresa(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;
    datatable
            .clear()
            .draw();
    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        datatable.row.add([
            rowData.nombre,
            rowData.correo,
            rowData.telefono,
            rowData.descripcion,
            rowData.localizacion,
            '<button type="button" class="btn btn-default btn-xs" data-toggle="modal" data-target="#ModalEmpresa" aria-label="Left Align" onclick="consultarEmpresaByID(' + rowData.pkIdEmp + ');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarEmpresa(' + rowData.pkIdEmp + ');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button>'
        ]).draw(false);
    }


}
function dibujarTablaPuesto(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;
    datatable
            .clear()
            .draw();
    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        datatable.row.add([
            rowData.empresa,
            rowData.nombre,
            rowData.salario,
            rowData.tipoPublicacion,
            '<button type="button" class="btn btn-default btn-xs" data-toggle="modal" data-target="#ModalPuesto" aria-label="Left Align" onclick="consultarPuestoByID(' + rowData.pkIdPuesto + ');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarPuesto(' + rowData.pkIdPuesto + ');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button>'
        ]).draw(false);
    }


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
            rowData.pkCedula,
            rowData.nombre,
            rowData.apellido1,
            rowData.apellido2,
            rowData.nacionalidad,
            rowData.correo,
            rowData.residencia,
            '<button type="button" class="btn btn-default btn-xs" data-toggle="modal" data-target="#ModalOferente" aria-label="Left Align" onclick="consultarOferenteByID(' + rowData.pkCedula + ');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarOferente(' + rowData.pkCedula + ');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
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
function llenarModalPuesto(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;

    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        $("#salarioPuesto").val(rowData.salario);
        $("#nombrePuesto").val(rowData.nombre);
        $("#idPuesto").val(rowData.pkIdPuesto);

    }


}
function llenarModalSubcat(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;

    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        $("#idSubCat").val(rowData.pkIdSubcategoria);
        $("#nombreSubCat").val(rowData.nombreSub);
    }


}
function llenarModalCat(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;

    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        $("#idCat").val(rowData.pkIdCategoria);
        $("#nombreCat").val(rowData.nombreCat);
    }


}
function llenarModalEmpresa(dataJson) {
//    //limpia la información que tiene la tabla
    var rowData;

    for (var i = 0; i < dataJson.length; i++) {

        rowData = dataJson[i];
        $("#idEmp").val(rowData.pkIdEmp);
        $("#nombreEmp").val(rowData.nombre);
        $("#telefonoEmp").val(rowData.telefono);
        $("#correoEmp").val(rowData.correo);
        $("#descripcionEmp").val(rowData.descripcion);
        $('#empresamap').locationpicker({
            location: {
                latitude: 9.9280694,
                longitude: -84.09072459999999
            },
            radius: 0,
            inputBinding: {
                latitudeInput: $('#latEmp'),
                longitudeInput: $('#longEmp'),
                radiusInput: $('#empresamap-radius'),
                locationNameInput: $('#residenciaEmp')
            },
            enableAutocomplete: true,
            autocompleteOptions: {
                types: ['(cities)']
            }
        });
    }


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
function consultarEmpresaByID(idEmpresa) {


    //Se envia la información por ajax
    $.ajax({
        url: 'EmpresaServlet',
        data: {
            accion: "consultarEmpresaById",
            idEmpresa: idEmpresa
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los oferentes en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            llenarModalEmpresa(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
function consultarPuestoByID(idPuesto) {


    //Se envia la información por ajax
    $.ajax({
        url: 'PuestoServlet',
        data: {
            accion: "consultarPuestoById",
            idPuesto: idPuesto
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los oferentes en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            llenarModalPuesto(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
function consultarSubCategoriaByID(idSubcategoria) {


    //Se envia la información por ajax
    $.ajax({
        url: 'SubCategoriaServlet',
        data: {
            accion: "consultarSubCategoriaByID",
            idSubcategoria: idSubcategoria
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los subCategorias en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            llenarModalSubcat(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
function consultarCategoriaByID(idCategoria) {


    //Se envia la información por ajax
    $.ajax({
        url: 'CategoriaServlet',
        data: {
            accion: "consultarCategoriaByID",
            idCategoria: idCategoria
        },
        error: function () { //si existe un error en la respuesta del ajax
            swal("Error", "Se presento un error a la hora de cargar la información de los categorias en la base de datos", "error");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            llenarModalCat(data);
        },
        type: 'POST',
        dataType: "json"
    });
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
function editarCat() {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información de la categoria en la base de datos",
            icon: "info",
            buttons: false
        });
        $.ajax({
            url: 'CategoriaServlet',
            data: {
                accion: "modificarCategoria",
                idCat: $("#idCat").val(),
                nombre: $("#nombreCat").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto!", respuestaTxt, "success").then(consultarCategorias());


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
function editarSubCat() {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información de la Oferente en la base de datos",
            icon: "info",
            buttons: false
        });
        $.ajax({
            url: 'SubCategoriaServlet',
            data: {
                accion: "modificarSubCategoria",
                idSubCat: $("#idSubCat").val(),
                nombre: $("#nombreSubCat").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto!", respuestaTxt, "success").then(consultarSubCategorias());


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
function editarEmpresa() {
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
                idEmpresa: $("#idEmp").val(),
                nombre: $("#nombreEmp").val(),
                telefono: $("#telefonoEmp").val(),
                correo: $("#correoEmp").val(),
                descripcion: $("#descripcionEmp").val(),
                longitud: $("#longEmp").val(),
                latitud: $("#latEmp").val()

            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto!", respuestaTxt, "success").then(consultarEmpresa());
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
function editarPuesto() {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información del  puesto en la base de datos",
            icon: "info",
            buttons: false
        });
        $.ajax({
            url: 'PuestoServlet',
            data: {
                accion: "modificarPuesto",
                idPuesto: $("#idPuesto").val(),
                nombre: $("#nombrePuesto").val(),
                salario: $("#salarioPuesto").val(),
                tipo: $("#tipos").val()

            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto!", respuestaTxt, "success").then(consultarPuestos());

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
//function validar() {
//    var validacion = true;
//    //Elimina estilo de error en los cs
//
//    $("#groupCedula").removeClass("has-error");
//    $("#groupNombre").removeClass("has-error");
//    $("#groupTelefono").removeClass("has-error");
//    $("#groupApellido1").removeClass("has-error");
//    $("#groupApellido2").removeClass("has-error");
//    $("#groupNacionalidad").removeClass("has-error");
//    $("#groupCorreo").removeClass("has-error");
//    $("#groupResidencia").removeClass("has-error");
//
//
//    if ($("#cedula").val() === "") {
//        $("#groupCedula").addClass("has-error");
//        validacion = false;
//    }
//    if ($("#nombre").val() === "") {
//        $("#groupNombre").addClass("has-error");
//        validacion = false;
//    }
//    if ($("#priApellido").val() === "") {
//        $("#groupApellido1").addClass("has-error");
//        validacion = false;
//    }
//    if ($("#segApellido").val() === "") {
//        $("#groupApellido2").addClass("has-error");
//        validacion = false;
//    }
//    if ($("#nacionalidad").val() === "") {
//        $("#groupNacionalidad").addClass("has-error");
//        validacion = false;
//    }
//    if ($("#correo").val() === "") {
//        $("#groupCorreo").addClass("has-error");
//        validacion = false;
//    }
////    else{
////        validateEmail("correo");
////    }
//    if ($("#residencia").val() === "") {
//        $("#groupResidencia").addClass("has-error");
//        validacion = false;
//    }
//    return validacion;
//
//}

function eliminarEmpresa(idEmpresa) {

    swal({
        title: "Esta seguro?",
        text: "Una vez eliminado, no se podra recuperar el dato eliminado!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "Espere por favor..",
                        text: "Eliminando la información de la empresa de la base de datos",
                        icon: "info",
                        buttons: false
                    });
                    $.ajax({
                        url: 'EmpresaServlet',
                        data: {
                            accion: "eliminarEmpresaConUsuario",
                            idEmpresa: idEmpresa
                        },
                        error: function () { //si existe un error en la respuesta del ajax
                            swal("Resultado acción", "Se presento un error, contactar al administador", "error");
                        },
                        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                            // se cambia el mensaje del modal por la respuesta del ajax
                            var respuestaTxt = data.substring(2);
                            var tipoRespuesta = data.substring(0, 2);
                            if (tipoRespuesta === "E~") {
                                swal("Resultado acción", respuestaTxt, "info");
                            } else {
                                swal("Correcto", "El dato ha sido eliminado con exito!", "success").then(setTimeout(consultarEmpresas(), 3000));
                            }
                        },
                        type: 'POST',
                        dataType: "text"
                    });
                } else {
                    swal("Cancelado", "Se cancelo con exito!", "info");
                }
            });
}




function eliminarOferente(idOferente) {

    swal({
        title: "Esta seguro?",
        text: "Una vez eliminado, no se podra recuperar el dato eliminado!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "Espere por favor..",
                        text: "Eliminando la información del oferente de la base de datos",
                        icon: "info",
                        buttons: false
                    });
                    $.ajax({
                        url: 'OferenteServlet',
                        data: {
                            accion: "eliminarOferenteConUsuario",
                            idOferente: idOferente
                        },
                        error: function () { //si existe un error en la respuesta del ajax
                            swal("Resultado acción", "Se presento un error, contactar al administador", "error");
                        },
                        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                            // se cambia el mensaje del modal por la respuesta del ajax
                            var respuestaTxt = data.substring(2);
                            var tipoRespuesta = data.substring(0, 2);
                            if (tipoRespuesta === "E~") {
                                swal("Resultado acción", respuestaTxt, "info");
                            } else {
                                swal("Correcto", "El dato ha sido eliminado con exito!", "success")
                                        .then(consultarOferente());
                            }
                        },
                        type: 'POST',
                        dataType: "text"
                    });
                } else {
                    swal("Cancelado", "Se cancelo con exito!", "info");
                }
            });
}
function eliminarCategoria(idCategoria) {

    swal({
        title: "Esta seguro?",
        text: "Una vez eliminado, no se podra recuperar el dato eliminado!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "Espere por favor..",
                        text: "Eliminando la información de la categoria de la base de datos",
                        icon: "info",
                        buttons: false
                    });
                    $.ajax({
                        url: 'CategoriaServlet',
                        data: {
                            accion: "eliminarCategoria",
                            idCategoria: idCategoria
                        },
                        error: function () { //si existe un error en la respuesta del ajax
                            swal("Resultado acción", "Se presento un error, contactar al administador", "error");
                        },
                        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                            // se cambia el mensaje del modal por la respuesta del ajax
                            var respuestaTxt = data.substring(2);
                            var tipoRespuesta = data.substring(0, 2);
                            if (tipoRespuesta === "E~") {
                                swal("Resultado acción", respuestaTxt, "info");
                            } else {
                                swal("Correcto", "El dato ha sido eliminado con exito!", "success")
                                        .then(consultarCategorias());
                            }
                        },
                        type: 'POST',
                        dataType: "text"
                    });
                } else {
                    swal("Cancelado", "Se cancelo con exito!", "info");
                }
            });
}
function eliminarPuesto(idPuesto) {

    swal({
        title: "Esta seguro?",
        text: "Una vez eliminado, no se podra recuperar el dato eliminado!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "Espere por favor..",
                        text: "Eliminando la información de la categoria de la base de datos",
                        icon: "info",
                        buttons: false
                    });
                    $.ajax({
                        url: 'PuestoServlet',
                        data: {
                            accion: "eliminarPuesto",
                            idPuesto: idPuesto
                        },
                        error: function () { //si existe un error en la respuesta del ajax
                            swal("Resultado acción", "Se presento un error, contactar al administador", "error");
                        },
                        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                            // se cambia el mensaje del modal por la respuesta del ajax
                            var respuestaTxt = data.substring(2);
                            var tipoRespuesta = data.substring(0, 2);
                            if (tipoRespuesta === "E~") {
                                swal("Resultado acción", respuestaTxt, "info");
                            } else {
                                swal("Correcto", "El dato ha sido eliminado con exito!", "success")
                                        .then(consultarPuestos());
                            }
                        },
                        type: 'POST',
                        dataType: "text"
                    });
                } else {
                    swal("Cancelado", "Se cancelo con exito!", "info");
                }
            });
}
function eliminarSubCategoria(idSubCategoria) {

    swal({
        title: "Esta seguro?",
        text: "Una vez eliminado, no se podra recuperar el dato eliminado!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "Espere por favor..",
                        text: "Eliminando la información de la subcategoria de la base de datos",
                        icon: "info",
                        buttons: false
                    });
                    $.ajax({
                        url: 'SubCategoriaServlet',
                        data: {
                            accion: "eliminarSubCategoria",
                            idSubCategoria: idSubCategoria
                        },
                        error: function () { //si existe un error en la respuesta del ajax
                            swal("Resultado acción", "Se presento un error, contactar al administador", "error");
                        },
                        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                            // se cambia el mensaje del modal por la respuesta del ajax
                            var respuestaTxt = data.substring(2);
                            var tipoRespuesta = data.substring(0, 2);
                            if (tipoRespuesta === "E~") {
                                swal("Resultado acción", respuestaTxt, "info");
                            } else {
                                swal("Correcto", "El dato ha sido eliminado con exito!", "success")
                                        .then(consultarSubCategorias());
                            }
                        },
                        type: 'POST',
                        dataType: "text"
                    });
                } else {
                    swal("Cancelado", "Se cancelo con exito!", "info");
                }
            });
}
function AsignarUsuarioOferente(correo, cedula) {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información de la oferente en la base de datos",
            icon: "info",
            buttons: false
        });
        $.ajax({
            url: '../UsuarioServlet',
            data: {
                accion: "guardarUsuarioOfer",
                usuario: $("#usu-" + cedula).val(),
                contra: $("#con-" + cedula).val(),
                tipo: 0,
                correo: correo
            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto", "El dato ha sido registrado con exito!", "success").then(setTimeout(consultarOferenteEspera(), 3000));
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
function AsignarUsuarioEmpresa(correo, id) {
    if (validar()) {
//Se envia la información por ajax
        swal({
            title: "Espere por favor..",
            text: "Ingresando la información de la empresa en la base de datos",
            icon: "info",
            buttons: false
        });
        $.ajax({
            url: '../UsuarioServlet',
            data: {
                accion: "guardarUsuarioEmp",
                usuario: $("#usu-" + id).val(),
                contra: $("#con-" + id).val(),
                tipo: 1,
                correo: correo
            },
            error: function () { //si existe un error en la respuesta del ajax
                swal("Error!", "Se genero un error, contacte al administrador (Error del ajax)", "error");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    swal("Correcto", "El dato ha sido registrado con exito!", "success").then(setTimeout(consultarEmpresaEspera(), 3000));
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

function validar() {
    var validacion = true;
    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input

    $("#groupUsuario").removeClass("has-error");
    $("#groupContra").removeClass("has-error");
    $("#groupTipo").removeClass("has-error");
    if ($("#usuario").val() === "") {
        $("#groupUsuario").addClass("has-error");
        validacion = false;
    }
    if ($("#contra").val() === "") {
        $("#groupContra").addClass("has-error");
        validacion = false;
    }

    if ($("#tipo").val() === "") {
        $("#groupTipo").addClass("has-error");
        validacion = false;
    }
    return validacion;
}
