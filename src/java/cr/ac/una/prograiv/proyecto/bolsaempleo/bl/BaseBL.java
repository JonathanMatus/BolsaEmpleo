/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.bl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.AplicacionpuestoDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.CaracteristicasoferenteDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.CategoriaDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.EmpresaDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.LocalizacionDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.OferenteDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.PuestoDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.SubcategoriaDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.SubcategoriapuestoDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.UsuarioDao;
import java.util.LinkedHashMap;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class BaseBL {

    private final LinkedHashMap<String, IBaseDAO> daos;

    public BaseBL() {
        daos = new LinkedHashMap();
        daos.put("cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Categoria", new CategoriaDao());
        daos.put("cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Empresa", new EmpresaDao());
        daos.put("cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Localizacion", new LocalizacionDao());
        daos.put("cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente", new OferenteDao());
        daos.put("cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Puesto", new PuestoDao());
        daos.put("cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Subcategoria", new SubcategoriaDao());
        daos.put("cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Usuario", new UsuarioDao());
        daos.put("cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Aplicacionpuesto", new AplicacionpuestoDao());
        daos.put("cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Caracteristicasoferente", new CaracteristicasoferenteDao());
        daos.put("cr.am c.una.prograiv.proyecto.bolsaempleo.domain.Subcategoriapuesto", new SubcategoriapuestoDao());

    }

    public IBaseDAO getDAO(String className) {
        return daos.get(className);
    }
}
