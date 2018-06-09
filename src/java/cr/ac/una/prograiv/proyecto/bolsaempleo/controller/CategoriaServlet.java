/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.CategoriaBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Categoria;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author patei
 */
public class CategoriaServlet extends HttpServlet {

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
            Categoria p = new Categoria();

            //Se crea el objeto de la logica de negocio
            CategoriaBL pBL = new CategoriaBL();

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
                case "eliminarCategoria":

                    p.setPkIdCategoria(Integer.parseInt(request.getParameter("idCategoria")));

                    //Se elimina el objeto
                    pBL.delete(p);

                    //Se imprime la respuesta con el response
                    out.print("La Categoria fue eliminada correctamente");

                    break;
                case "consultarCategorias":
//                    if (!request.getParameter("where").equals("")) {
//                        List<Categoria> list = pBL.findByQuery("select * from mydbproyecto.categoria where nombre_cat like '%" + request.getParameter("where") + "%';");
//                        json = new Gson().toJson(list);
//                        out.print(json);
//                        break;
//                    }
                    List<Categoria> list = pBL.findAll(Categoria.class.getName());
                    json = new Gson().toJson(list);
                    out.print(json);

                    break;
                case "agregarCategoria":
                case "modificarCategoria":

                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    p.setNombreCat(request.getParameter("nombre"));

                    //Guardar Correctamente en la base de datos
                    if (accion.equals("agregarCategoria")) { //es insertar personas
                        //Se guarda el objeto

                        pBL.save(p);

                        //Se imprime la respuesta con el response
                        out.print("C~La Categoria fue ingresada correctamente");

                    } else {//es modificar persona
                        //Se guarda el objeto
                        p.setPkIdCategoria(Integer.parseInt(request.getParameter("idCategoria")));
                        pBL.merge(p);

                        //Se imprime la respuesta con el response
                        out.print("C~La Categoria fue modificada correctamente");
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
