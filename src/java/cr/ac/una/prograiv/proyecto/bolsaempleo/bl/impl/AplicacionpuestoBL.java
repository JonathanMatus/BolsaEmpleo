/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.BaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.IBaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Aplicacionpuesto;
import java.util.List;

/**
 *
 * @author kerencita
 */
public class AplicacionpuestoBL  extends BaseBL implements IBaseBL<Aplicacionpuesto, Integer>{

    public AplicacionpuestoBL() {
       super(); 
    }

    
    
    @Override
    public void save(Aplicacionpuesto o) {
        this.getDAO(o.getClass().getName()).save(o);
    }

    @Override
    public Aplicacionpuesto merge(Aplicacionpuesto o) {
        return (Aplicacionpuesto) this.getDAO(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Aplicacionpuesto o) {
        this.getDAO(o.getClass().getName()).delete(o);
    }

    @Override
    public Aplicacionpuesto findById(Integer o) {
        return (Aplicacionpuesto) this.getDAO(Aplicacionpuesto.class.getName()).findById(o);
    }

    @Override
    public List<Aplicacionpuesto> findAll(String className) {
        return this.getDAO(className).findAll();
    }

    @Override
    public List<Aplicacionpuesto> findByQuery(String query) {
        return this.getDAO(Aplicacionpuesto.class.getName()).findByQuery(query);
    }
    
    
    
}
