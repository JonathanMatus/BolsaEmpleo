/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.test;

import com.google.gson.Gson;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.CategoriaBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.EmpresaBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.LocalizacionBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl.OferenteBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.CategoriaDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.UsuarioDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Categoria;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Localizacion;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Usuario;
import java.util.Date;
import java.util.List;

/**
 *
 * @author patei
 */
public class test {

    public static void main(String[] arg) {

        CategoriaBL pBL = new CategoriaBL();

        for (Categoria p1 : pBL.findAll(Categoria.class.getName())) {
            System.out.print(p1.getNombreCat());
        }
    }
}
