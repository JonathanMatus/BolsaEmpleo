/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var datatable = null;
$(function () {
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
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="AsignarOferente()">' +
                    'Aplicar' +
                    '</button>'
        ]).draw(false);
    }


}