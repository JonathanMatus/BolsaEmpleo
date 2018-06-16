/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.CaracteristicasoferenteBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.CategoriaBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.LocalizacionBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.OferenteBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.SubcategoriaBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.UsuarioBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Caracteristicasoferente;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Categoria;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Localizacion;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Subcategoria;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Estudiante
 */
public class OferenteServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            //String para guardar el JSON generaro por al libreria GSON
            String json;

            //Se crea el objeto Persona
            Oferente ofe = new Oferente();
            Localizacion l = new Localizacion();
            Localizacion l1 = new Localizacion();
            Usuario u = new Usuario();
            UsuarioBL ubl = new UsuarioBL();
            Categoria cate = new Categoria();
            Subcategoria sub = new Subcategoria();
            Caracteristicasoferente caraOfe = new Caracteristicasoferente();

            //Se crea el objeto de la logica de negocio
            OferenteBL ofeBL = new OferenteBL();
            LocalizacionBL lpBL = new LocalizacionBL();
            CategoriaBL cateBL = new CategoriaBL();
            SubcategoriaBL subBL = new SubcategoriaBL();
            CaracteristicasoferenteBL caraOfeBL = new CaracteristicasoferenteBL();
            //Se hace una pausa para ver el modal

            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            HttpSession session = request.getSession();

            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            switch (accion) {
                case "oferentesEspera":
                    json = new Gson().toJson(ofeBL.findByQuery("Select * from  mydbproyecto.oferente where oferente.Usuario_PK_Usuario is null"));
                    out.print(json);
                    break;

                case "guardarCaracteristicasOfe":

                    int idUsuActivo = (int) session.getAttribute("idUsuario");
                    String idSub = request.getParameter("idSub");
                    String descripcion = request.getParameter("descripcion");

                    List<Oferente> listOfe = ofeBL.findByQuery("Select * from   mydbproyecto.oferente where  Usuario_PK_Usuario= " + idUsuActivo + "");
                    if (listOfe.size() > 0) {
                        Oferente cedOfe = listOfe.get(0);
                        List<Caracteristicasoferente> c = caraOfeBL.findByQuery("select * from mydbproyecto.caracteristicasoferente where Fk_id_subcategoria=" + idSub + " and oferente_fk_cedula=" + cedOfe.getPkCedula() + ";");
                        if (c.size() == 0) {
                           

                            List<Subcategoria> listSub = subBL.findByQuery("Select * from   mydbproyecto.subcategoria where  pk_id_subcategoria= '" + idSub + ";");
                            Subcategoria idSu = listSub.get(0);

                            caraOfe.setOferente(cedOfe.getPkCedula());
                            caraOfe.setSubcategoria(idSu.getPkIdSubcategoria());

                            caraOfeBL.save(caraOfe);

                            out.print("C~Caracteristica guarda con exito!!");
                        }else{
                         throw new Exception("Caracteristica ya registrada");
                        }
                    }else{
                   throw new Exception("Usuario no es oferente");
                    }
                    break;

                case "eliminarOferenteConUsuario":

                    ofe.setPkCedula(Integer.parseInt(request.getParameter("idOferente")));
                    List<Oferente> ofere = ofeBL.findByQuery("select * from mydbproyecto.oferente where pk_cedula = " + request.getParameter("idOferente") + ";");

                    Oferente ofer = ofere.get(0);
                    //Se elimina el objeto
                    ofeBL.delete(ofe);
                    l.setPkIdLocalizacion(ofer.getLocalizacion());
                    lpBL.delete(l);
                    u.setPkUsuario(ofer.getUsuario());
                    ubl.delete(u);
                    List<Caracteristicasoferente> borrar=caraOfeBL.findByQuery("select * from mydbproyecto.caracteristicasoferente where oferente_fk_cedula=" + ofer.getPkCedula() + ";");
                     for (int i = 0; i < borrar.size(); i++) {
                        caraOfeBL.delete(borrar.get(i));
                    }
                    //Se imprime la respuesta con el response
                    out.print("El oferente fue eliminado correctamente");

                    break;
                case "eliminarOferente":

                    ofe.setPkCedula(Integer.parseInt(request.getParameter("idOferente")));
                    List<Oferente> oferentes = ofeBL.findByQuery("select * from mydbproyecto.oferente where pk_cedula = " + request.getParameter("idOferente") + ";");

                    Oferente ofer1 = oferentes.get(0);
                    //Se elimina el objeto
                    ofeBL.delete(ofe);
                    l.setPkIdLocalizacion(ofer1.getLocalizacion());
                    lpBL.delete(l);

                    //Se imprime la respuesta con el response
                    out.print("El oferente fue eliminada correctamente");

                    break;
                case "consultarOferente":
                    json = new Gson().toJson(ofeBL.findAll(Oferente.class.getName()));
                    out.print(json);
                    break;
                case "agregarOferente":
                case "modificarOferente":
                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    ofe.setPkCedula(Integer.parseInt(request.getParameter("cedula")));
                    ofe.setNombre(request.getParameter("nombre"));
                    ofe.setApellido1(request.getParameter("apellido1"));
                    ofe.setApellido2(request.getParameter("apellido2"));
                    ofe.setNacionalidad(request.getParameter("nacionalidad"));
                    ofe.setCorreo(request.getParameter("correo"));
                    ofe.setResidencia(request.getParameter("residencia"));

                    DecimalFormatSymbols symbols = new DecimalFormatSymbols();
                    symbols.setGroupingSeparator(',');
                    symbols.setDecimalSeparator('.');
                    String pattern = "#,##0.0#";
                    DecimalFormat decimalFormat = new DecimalFormat(pattern, symbols);
                    decimalFormat.setParseBigDecimal(true);
                    BigDecimal latitud = (BigDecimal) decimalFormat.parse(request.getParameter("latitud"));
                    l.setLatitud(latitud);
                    BigDecimal longitud = (BigDecimal) decimalFormat.parse(request.getParameter("longitud"));
                    l.setLongitud(longitud);
                    if (accion.equals("agregarOferente")) {
                        lpBL.save(l);
                        List<Localizacion> list = lpBL.findAll(Localizacion.class.getName());

                        l1 = lpBL.findById(list.get(list.size() - 1).getPkIdLocalizacion());
                        ofe.setLocalizacion(l1.getPkIdLocalizacion());
                        ofeBL.save(ofe);
                        //Se imprime la respuesta con el response
                        out.print("C~El oferente fue ingresado correctamente");
                    } else {//es modificar persona
                        //Se guarda el objeto
                        ofeBL.merge(ofe);

                        //Se imprime la respuesta con el response
                        out.print("C~El oferente fue modificada correctamente");
                    }

                    break;

                default:
                    out.print("E~No se indico la acción que se desea realizare");
                    break;
            }

        } catch (NumberFormatException e) {
            out.print("E~" + e.getMessage());
        } catch (Exception e) {
            out.print("E~" + e.getMessage());
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
