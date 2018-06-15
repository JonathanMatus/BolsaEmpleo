<%-- 
    Document   : administrador
    Created on : 05-may-2018, 14:05:25
    Author     : patei
--%>
<%

    HttpSession sesion = request.getSession(true);
    String tipoUsuario = "-1";
    if (sesion != null) {
        if (sesion.getAttribute("usuario") == null) {
            response.sendRedirect("../PaginaPrincipal.jsp");
        } else {
            tipoUsuario = (String) sesion.getAttribute("tipo");
        }
    } else {
        response.sendRedirect("../PaginaPrincipal.jsp");
    }
%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Administrador</title>


        <!--CSS Lbrary -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

        <!--google fonts -->
        <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
        <!-- ********************************************************** -->
        <!-- Script's de datatable -->
        <!-- ********************************************************** -->
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.16/r-2.2.1/datatables.min.css"/>

        <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.16/r-2.2.1/datatables.min.js"></script>
        <!-- Script's de sweet alert -->
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <!--        select 2
                ---------------------------------->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
        <!---------------------------------------------------------->

        <link href="../css/css.css" rel="stylesheet" type="text/css"/>
        <script src="../js/jscode.js" type="text/javascript"></script>

        <script src="../js/Administrador.js" type="text/javascript"></script>
        <link href="../css/cssSideBar.css" rel="stylesheet" type="text/css"/>
        <link href="../css/administrador.css" rel="stylesheet" type="text/css"/>

        <script src="../js/LoginJS.js" type="text/javascript"></script>

    </head>
    <body>
<!--        <input type="text" id="Tipousuario" value="<% out.print(tipoUsuario); %>"> -->
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

                <!-- responsive top nav -->
                <ul class="nav navbar-nav top-nav">

                    <li class="activo"><a class="activo" href="../PaginaPrincipal.jsp">Inicio</a></li>

                    <li> <a href="contacto.jsp">Contacto</a></li>
                        <% if (tipoUsuario.equals("2")) { %> 
                    <li> <a href="administrador.jsp">Administrador</a></li>
                    <li> <a href="gestionEmpresa.jsp">Gestion Empresa</a></li>
                     <li> <a href="actualizacion.jsp">Actualizacion</a></li>
                        <% }%> 
                    <li> <a href="puestos.jsp">Puestos</a></li>
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
                <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav side-nav">
                        <li>
                            <a href="#" data-toggle="collapse" data-target="#submenu-1"><i class="fa fa-fw fa-search"></i> Empresas <i class="fa fa-fw fa-angle-down pull-right"></i></a>
                            <ul id="submenu-1" class="collapse">
                                <li><a type="button" id="listaEmpresasSinUsu"><i class="fa fa-angle-double-right"></i> Mostrar Empresas sin usuario</a></li>
                                <li><a type="button" id="listaEmpresas"><i class="fa fa-angle-double-right"></i> Mostrar Empresas con usuario</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-toggle="collapse" data-target="#submenu-2"><i class="fa fa-fw fa-search"></i> Oferentes <i class="fa fa-fw fa-angle-down pull-right"></i></a>
                            <ul id="submenu-2" class="collapse">
                                <li><a type="button" id="listaOferentesSinUsu"><i class="fa fa-angle-double-right"></i> Mostrar Oferentes sin usuario</a></li>
                                <li><a type="button" id="listaOferentes"><i class="fa fa-angle-double-right"></i> Mostrar oferentes con usuario</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-toggle="collapse" data-target="#submenu-3"><i class="fa fa-fw fa-search"></i> Puestos <i class="fa fa-fw fa-angle-down pull-right"></i></a>
                            <ul id="submenu-3" class="collapse">
                                <li><a type="button" id="listaPuestos"><i class="fa fa-angle-double-right"></i> Mostrar puestos</a></li>           
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-toggle="collapse" data-target="#submenu-4"><i class="fa fa-fw fa-search"></i> Categorias <i class="fa fa-fw fa-angle-down pull-right"></i></a>
                            <ul id="submenu-4" class="collapse">
                                <li><a type="button" id="listaCategorias"><i class="fa fa-angle-double-right"></i> Mostrar categorias</a></li>  
                                 <li><a type="button" id="listaSubCategorias"><i class="fa fa-angle-double-right"></i> Mostrar subcategorias</a></li>           
                            </ul>
                        </li>

                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </nav>

            <div id="page-wrapper">
                <div class="container-fluid">
                    <!-- Page Heading -->
                    <div class="row" id="main" >
                        <div class=" tablas col-sm-12 col-md-12">
                            <table class="table table-hover table-condensed" id="tablaEmpresas1" width="100%" >
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>correo</th>
                                        <th>Telefono</th>
                                        <th>Descripcion</th>
                                        <th>localizacion</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                            </table>
                             <table class="table table-hover table-condensed" id="tablaCategorias" width="100%" >
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>nombre</th>   
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                            </table>
                            <table class="table table-hover table-condensed" id="tablaSubCategorias" width="100%" >
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>id categoria</th>
                                        <th>nombre</th>   
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                            </table>
                            <table class="table table-hover table-condensed" id="tablaOferente1" width="100%" >
                                <thead>
                                    <tr>
                                        <th>Cedula</th>
                                        <th>Nombre</th>
                                        <th>Primer apellido</th>
                                        <th>Segundo Apellido</th>
                                        <th>Nacionalidad</th>
                                        <th>correo</th>
                                        <th>residencia</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                            </table>
                            <table class="table table-hover table-condensed" id="tablaOferenteEspera1" width="100%" >
                                <thead>
                                    <tr>
                                        <th>Cedula</th>
                                        <th>Correo</th>
                                        <th>Usuario</th>
                                        <th>Contraseña</th>
                                        <th>Tipo</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                            </table>
                            <table class="table table-hover table-condensed" id="tablaEmpresaEspera" width="100%" >
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Correo</th>
                                        <th>Usuario</th>
                                        <th>Contraseña</th>
                                        <th>Tipo</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                            </table>
                            <table class="table table-hover table-condensed" id="tablaPuestos" width="100%" >
                                <thead>
                                    <tr> 
                                        <th>Empresa</th>
                                        <th>Nombre</th>
                                        <th>Salario</th>
                                        <th>Tipo</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                            </table>
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
            </div>
            <!-- /#page-wrapper -->
        </div><!-- /#wrapper -->


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
    </body>
</html>
