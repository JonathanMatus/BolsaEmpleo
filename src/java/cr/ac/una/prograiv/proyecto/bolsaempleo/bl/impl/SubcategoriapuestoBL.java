/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.BaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.IBaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Subcategoriapuesto;
import java.util.List;

/**
 *
 * @author kerencita
 */
public class SubcategoriapuestoBL extends BaseBL implements IBaseBL<Subcategoriapuesto, Integer> {

    public SubcategoriapuestoBL() {
        super();
    }

    
    @Override
    public void save(Subcategoriapuesto o) {
       this.getDAO(o.getClass().getName()).save(o);

    }
    

    @Override
    public Subcategoriapuesto merge(Subcategoriapuesto o) {
      return (Subcategoriapuesto) this.getDAO(o.getClass().getName()).merge(o);

    }

    @Override
    public void delete(Subcategoriapuesto o) {
        this.getDAO(o.getClass().getName()).delete(o);
    }

    @Override
    public Subcategoriapuesto findById(Integer o) {
        return (Subcategoriapuesto) this.getDAO(Subcategoriapuesto.class.getName()).findById(o);

    }

    @Override
    public List<Subcategoriapuesto> findAll(String className) {
        return this.getDAO(className).findAll();
    }

    @Override
    public List<Subcategoriapuesto> findByQuery(String query) {
        return this.getDAO(Subcategoriapuesto.class.getName()).findByQuery(query);
    }
    
}
