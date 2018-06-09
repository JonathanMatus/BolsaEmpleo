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
    $('#empresaList').select2({
        minimumInputLength: 0,
        tags: [],
        ajax: {
            url: 'EmpresaServlet',
            dataType: 'json',
            type: "GET",
            quietMillis: 50,
            data: {
                accion: "consultarEmpresas"
            },
            processResults: function (data) {

                return {

                    results:
                            $.map(data, function (data) {
                                return {
                                    text: data.nombre,
                                    id: data.pkIdEmp
                                };
                            })

                };
            }
        }

    });
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
