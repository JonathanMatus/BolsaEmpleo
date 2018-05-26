/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.BaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.IBaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Localizacion;
import java.util.List;

/**
 * 
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class LocalizacionBL extends BaseBL implements IBaseBL<Localizacion, Integer> {

    public LocalizacionBL() {
        super();
    }

    
    @Override
    public void save(Localizacion o) {
         this.getDAO(o.getClass().getName()).save(o);
        
    }

    @Override
    public Localizacion merge(Localizacion o) {
            return (Localizacion) this.getDAO(o.getClass().getName()).merge(o);

    }

    @Override
    public void delete(Localizacion o) {
         this.getDAO(o.getClass().getName()).delete(o);
    }

    @Override
    public Localizacion findById(Integer o) {
        return (Localizacion) this.getDAO(Localizacion.class.getName()).findById(o);
    }

    @Override
    public List<Localizacion> findAll(String className) {
         return this.getDAO(className).findAll();
    }

    @Override
    public List<Localizacion> findByQuery(String query) {
        return this.getDAO(Localizacion.class.getName()).findByQuery(query);
    }

}
