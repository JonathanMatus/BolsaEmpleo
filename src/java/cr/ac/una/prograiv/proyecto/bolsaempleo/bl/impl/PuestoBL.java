/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.BaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.IBaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Puesto;
import java.util.List;

/**
 * 
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class PuestoBL extends BaseBL implements IBaseBL<Puesto, Integer>{

    public PuestoBL() {
        super();
    }

    @Override
    public void save(Puesto o) {
        this.getDAO(o.getClass().getName()).save(o);
    }

    @Override
    public Puesto merge(Puesto o) {
        return (Puesto) this.getDAO(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Puesto o) {
        this.getDAO(o.getClass().getName()).delete(o);
    }

    @Override
    public Puesto findById(Integer o) {
        return (Puesto) this.getDAO(Puesto.class.getName()).findById(o);
    }

    @Override
    public List<Puesto> findAll(String className) {
        return this.getDAO(className).findAll();
    }

    @Override
    public List<Puesto> findByQuery(String query) {
        return this.getDAO(Puesto.class.getName()).findByQuery(query);
    }

}
