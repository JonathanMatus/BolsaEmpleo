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

function cargarListaCategorias() {
    $('#categoriaList').select2({
        minimumInputLength: 0,
        tags: [],
        ajax: {
            url: 'CategoriaServlet',
            dataType: 'json',
            type: "GET",
            quietMillis: 50,
            data: {
                accion: "consultarCategorias",
                where:""
            },
            processResults: function (data) {
                return {

                    results:
                            $.map(data, function (data) {
                                return {
                                    text: data.nombreCat,
                                    id: data.pkIdCategoria
                                };
                            })

                };
            }
        }

    });
}

function cargarListaSubCategorias(id) {
    $('#SubcategoriaList').select2({
        minimumInputLength: 0,
        tags: [],
        ajax: {
            url: 'SubCategoriaServlet',
            dataType: 'json',
            type: "GET",
            quietMillis: 50,
            data:
                    function (params) {
                       if (params.term) {
                            return {
                                where: params.term,
                                accion: 'consultarSubCategoriasByCat',
                                idCategoria: id
                            };
                        } else {
                            return {
                                where: "",
                                accion: 'consultarSubCategoriasByCat',
                                idCategoria: id
                            };
                        }
                    },

            processResults: function (data) {

                return {

                    results:
                            $.map(data, function (data) {
                                return {
                                    text: data.nombreSub,
                                    id: data.pkIdSubcategoria
                                };
                            })

                };
            }
        }

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