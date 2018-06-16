<%-- 
    Document   : registro
    Created on : 18/04/2018, 12:11:24 PM
    Author     : Sammy Guergachi <sguergachi at gmail.com>
--%>
<%@page import="cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente"%>
<%

    HttpSession sesion = request.getSession(true);
    String tipoUsuario = "-1";
    Oferente ofeCompleto = null;
    if (sesion != null) {
        if (sesion.getAttribute("usuario") == null) {

        } else {
            tipoUsuario = (String) sesion.getAttribute("tipo");
            ofeCompleto = (Oferente) sesion.getAttribute("ofeCompleto");
        }
    } else {

    }
%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro</title>


        <!--CSS Lbrary -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.jsrel=" rel=stylesheet"></link

        <!--google fonts -->
        <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
        <script type="text/javascript" src='http://maps.google.com/maps/api/js?sensor=false&libraries=places&key=AIzaSyAwELjEzE3b3KXFZF7bS8AR1JTJSj6_e6o'></script>
        <!-- Script's de sweet alert -->
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <!--        select 2
                        ---------------------------------->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
        <!---------------------------------------------------------->



        <link href="../css/css.css" rel="stylesheet" type="text/css"/>
        <link href="../css/cssRegistro.css" rel="stylesheet" type="text/css"/>
        <script src="../js/jscode.js" type="text/javascript"></script>
        <script src="../js/mapsJS.js" type="text/javascript"></script>
        <script src="../js/LoginJS.js" type="text/javascript"></script>
        <script src="../js/locationpicker.jquery.js" type="text/javascript"></script>
        <link href="../css/modalRegistro.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>

        <div id="wrapper">

            <!-- Navigation -->
            <nav class="navbar navbar-inverse navbar-fixed-top " role="navigation">
                <!-- Brand and toggle get grouped for better mobile display -->

                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <img src="../img/logo_1.png" alt="Bolsa Empleo CR" class="img-responsive img-rounded"/>




                </div>

            <ul class="nav navbar-nav top-nav">
              
                <li class="activo"><a class="activo" href="../PaginaPrincipal.jsp">Inicio</a></li>
                
                <li> <a href="contacto.jsp">Contacto</a></li>
                <li> <a href="PuestosPublicos.jsp">Ver Puestos</a></li>
                
                    <% if (tipoUsuario.equals("2")) { %> 
                <li> <a href="administrador.jsp">Administrador</a></li>
                <li> <a href="gestionEmpresa.jsp">Gestion Empresa</a></li>
                <li> <a href="actualizacion.jsp">Actualizacion</a></li>
                    <% }%> 
                    <% if (tipoUsuario.equals("1")) { %>            
                <li> <a href="gestionEmpresa.jsp">Gestion Empresa</a></li>
                    <% }%> 
                    <% if (tipoUsuario.equals("0")) { %> 
                <li> <a href="actualizacion.jsp">Actualizacion</a></li>
                 <li> <a href="puestos.jsp">Puestos</a></li>
                <% }%> 
            </ul>
            <ul class="nav navbar-right top-nav">


                    <% if (tipoUsuario.equals("-1")) { %> 
                    <li>
                        <button class="btn btn-default" id="registro" data-toggle="modal" data-target="#squarespaceModal"> 
                            <span class="glyphicon glyphicon-user user_icon"></span>
                        </button>
                    </li>
                    <% }%> 
                    <% if (!tipoUsuario.equals("-1")) { %> 
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><% out.print(sesion.getAttribute("usuario")); %> <b class="fa fa-angle-down"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><i class="fa fa-fw fa-user"></i> Edit Profile</a></li>
                            <li><a href="#"><i class="fa fa-fw fa-cog"></i> Change Password</a></li>
                            <li class="divider"></li>
                            <li><a  id="logout2"><i class="fa fa-fw fa-power-off"></i> Logout</a></li>
                        </ul>
                    </li>
                    <% }%> 
                </ul>

                <!-- /.navbar-collapse -->
            </nav>

            <div id="page-wrapper">
                <div class="container-fluid">
                    <!-- Page Heading -->
                    <div class="row" id="main" >
                        <div class="container">
                            <h1 class="well" id="titulo">Registro</h1>
                            <div class="col-lg-12 well" id="cam-form">
                                <div class="row">
                                    <form id="formulario" >
                                        <div class="col-sm-12">

                                            <div class="row">
                                                <div class="col-sm-3 form-group" id="groupCedula">
                                                    <label>Cedula</label>
                                                    <input type="text" placeholder="Ingresar Cedula.." class="form-control" id="cedula" maxlength="" value="<% out.print(ofeCompleto.getPkCedula()); %>" disabled="" >
                                                </div>
                                                <div class="col-sm-3 form-group" id="groupNombre">
                                                    <label>Nombre</label>
                                                    <input type="text" placeholder="Ingresar Nombre.." class="form-control" id="nombre"  value="<% out.print(ofeCompleto.getNombre()); %>" >
                                                </div>
                                                <div class="col-sm-3 form-group" id="groupApellido1" >
                                                    <label>Primer apellido</label>
                                                    <input type="text" placeholder="Ingresar Primer apellido.." class="form-control" id="priApellido"  value="<% out.print(ofeCompleto.getApellido1()); %>"  maxlength="">
                                                </div>
                                                <div class="col-sm-3 form-group" id="groupApellido2"  >
                                                    <label>Segundo apellido</label>
                                                    <input type="text" placeholder="Ingresar Segundo apellido.." class="form-control" id="segApellido"  value="<% out.print(ofeCompleto.getApellido2());%>" maxlength="">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-3 form-group" id="groupNacionalidad">
                                                    <label>Nacionalidad</label>
                                                    <input type="text" placeholder="Ingresar Nacionalidad.." class="form-control" id="nacionalidad" value="<% out.print(ofeCompleto.getNacionalidad());%>" maxlength="">
                                                </div>
                                                <div class="col-sm-3 form-group" id="groupCorreo">
                                                    <label>Correo</label>
                                                    <input type="email" placeholder="Ingresar Correo.." class="form-control" id="correo"  value="<% out.print(ofeCompleto.getCorreo());%>" maxlength="">
                                                </div>
                                                <div class="col-sm-6 form-group" id="groupResidencia">
                                                    <label>Residencia</label>
                                                    <input type="text" placeholder="Ingresar Residencia.." class="form-control" id="residencia" value="<% out.print(ofeCompleto.getResidencia() );%>" maxlength="">
                                                </div>

                                            </div>



                                            <div class="col-sm-12 form-group">
                                                <fieldset>
                                                    <label>Dirección</label>
                                                    <div id="us2"  class="col-md-12"></div>
                                                    <div class="row">
                                                        <div id="coordenadas">
                                                            <div class="form-group col-md-6">
                                                                Lat.: <input type="text" class="form-control" readonly="yes" id="lat" />
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                Long.: <input type="text" class="form-control" readonly="yes" id="lng"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </fieldset>

                                            </div>

                                            <div class=" form-group">
                                                <input type="hidden" value="agregarOferente" id="oferenteAction"/>
                                                <button type="button" id="editar" class="btn btn-lg btn-info">Editar</button>
                                            </div>					

                                        </div>
                                    </form> 
                                </div>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="squarespaceModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header1">
                                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                                            <ul id="myTab" class="nav nav-tabs">
                                                <li class="active"><a href="#signin" data-toggle="tab">Ingresar</a></li>
                                                <li class=""><a href="#signup" data-toggle="tab">Registrar</a></li>
                                            </ul>
                                        </div>
                                        <div class="modal-body">

                                            <!-- content goes here -->

                                            <div id="myTabContent" class="tab-content">
                                                <div class="tab-pane fade" id="signup">
                                                    <div class="row">
                                                        <div class="panel-heading">
                                                            <div class="row">
                                                                <center> 
                                                                    <h3>¿Que desea registrar?</h3>
                                                                </center>


                                                            </div>
                                                            <hr>
                                                        </div>
                                                        <div class="col-md-6 "><div class="btnLogin">
                                                                <a id="" href="registroEmpresa.jsp"><button type="button"  id="registrarEmpresa" name="signupE" class="btn btn-success" >Registrar Empresa</button> </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 "><div class="btnLogin">
                                                                <a id="" href="registro.jsp"><button type="button"  id="registrarOferente" name="signupO" class="btn btn-success" >Registrar Oferente</button> </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade active in" id="signin">
                                                    <div class="row">
                                                        <div class="col-md-12 ">
                                                            <div class="panel panel-login">
                                                                <div class="panel-heading">
                                                                    <div class="row">


                                                                    </div>
                                                                    <hr>
                                                                </div>
                                                                <div class="panel-body">
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <form id="login-form" action="" method="post" role="form" style="display: block;">
                                                                                <div class="form-group">
                                                                                    <input type="text" name="userid" id="userid" tabindex="1" class="form-control" placeholder="usuario" value="">
                                                                                </div>
                                                                                <div class="form-group">
                                                                                    <input type="password" name="password" id="passwordinput" tabindex="2" class="form-control" placeholder="Contraseña">
                                                                                </div>
                                                                                <div class="form-group text-center">
                                                                                    <input type="checkbox" tabindex="3" class="" name="remember" id="remember">
                                                                                    <label for="remember"> Recordarme</label>
                                                                                </div>
                                                                                <div class="form-group">
                                                                                    <div class="row">
                                                                                        <div class="btnLogin">
                                                                                            <button type="button"  id="ingresar2" name="ingresar" class="btn btn-success" >Ingresar</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-12">
                                                                                            <div class="text-center">
                                                                                                <a href="" tabindex="5" class="forgot-password">¿Has olvidado tu contraseña?</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.container-fluid -->
                    <!--footer-->
                    <!-- Footer -->
                    <div class="navbar navbar-default navbar-relative-bottom navbar-fixed-bottom  ">
                        <div class="container-fluid footer " id="myFooter">
                            <div class="row">
                                <div class="footer-1">
                                    <div class="col-sm-2 col-md-2 col-lg-2"></div>
                                    <div class="col-sm-4 col-md-4 col-lg-4">
                                        <ul>

                                            <li><a href="contacto.jsp">Contacto</a></li>
                                            <li><a href="acerca.jsp">Sobre nosotros</a></li>
                                            <li><a href="registroEmpresa.jsp">Empresa</a></li>
                                            <li><a href="registro.jsp">Oferente</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-6"></div>
                                </div>

                                <div class="copyright col-sm-12">
                                    <p>© 2018 Copyright Bolsa de Empleo CR </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- /#page-wrapper -->
            </div><!-- /#wrapper -->

            <script src="../js/EditarOferenteJS.js" type="text/javascript"></script>
    </body>
    <script>
        $('#us2').locationpicker({
            location: {
                latitude: 9.9280694,
                longitude: -84.09072459999999
            },
            radius: 0,
            inputBinding: {
                latitudeInput: $('#lat'),
                longitudeInput: $('#lng'),
                radiusInput: $('#us2-radius'),
                locationNameInput: $('#residencia')
            },
            enableAutocomplete: true,
            autocompleteOptions: {
                types: ['(cities)']
            }
        });
//Para mas información:    http://logicify.github.io/jquery-locationpicker-plugin/     
    </script>
</html>
