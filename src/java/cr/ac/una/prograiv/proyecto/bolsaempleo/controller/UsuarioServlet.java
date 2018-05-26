/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.controller;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.OferenteBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.UsuarioBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
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
public class UsuarioServlet extends HttpServlet {

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
            //Se crea el objeto de la logica de negocio
            OferenteBL ofeBL = new OferenteBL(); 
            Usuario u = new Usuario();
            UsuarioBL ubl = new UsuarioBL();

            //Se hace una pausa para ver el modal
            Thread.sleep(1000);

            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            HttpSession session = request.getSession();

            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            
            String accion = request.getParameter("accion");
            switch (accion) {     
                
                case "guardarUsuario":
                case "modificarUsuario":
                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    u.setUsuario(request.getParameter("usuario"));
                    u.setPassword(request.getParameter("contra"));
                    u.setTipo(Integer.parseInt(request.getParameter("tipo")));
                    u.setPkEmail(request.getParameter("correo"));
                    u.setFechaCreacion(new Date());
                            
                    if (accion.equals("guardarUsuario")) {
                        ubl.save(u);
                        
                       List<Usuario> usuarios = ubl.findByQuery("select * from mydbproyecto.usuario where usuario.PK_Email = '"+request.getParameter("correo") +"'");
                    
                       Usuario us = usuarios.get(0);
                       
                       List<Oferente> ofere = ofeBL.findByQuery("select * from mydbproyecto.oferente where oferente.correo = '"+request.getParameter("correo") +"'");

                       Oferente ofer = ofere.get(0);
                       

                       ofer.setUsuario(us.getPkUsuario());
                       
                      ofer = ofeBL.merge(new Oferente
                      (ofer.getPkCedula(),ofer.getLocalizacion(),ofer.getUsuario(),
                       ofer.getNombre(),ofer.getApellido1(),ofer.getApellido2(),
                       ofer.getNacionalidad(),ofer.getCorreo(),ofer.getResidencia(),ofer.getUltimoUsuario(),ofer.getFechaCambios()));
                       
                        out.print("C~El usuario fue ingresado correctamente");
                        
                    } else {//es modificar persona
                        //Se guarda el objeto
                       
                        //Se imprime la respuesta con el response
                        out.print("C~El usuario fue modificada correctamente");
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
