/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.BaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.IBaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Subcategoria;
import java.util.List;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class SubcategoriaBL extends BaseBL implements IBaseBL<Subcategoria, Integer> {

    public SubcategoriaBL() {
        super();
    }

    @Override
    public void save(Subcategoria o) {
        this.getDAO(o.getClass().getName()).save(o);
    }

    @Override
    public Subcategoria merge(Subcategoria o) {
        return (Subcategoria) this.getDAO(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Subcategoria o) {
        this.getDAO(o.getClass().getName()).delete(o);
    }

    @Override
    public Subcategoria findById(Integer o) {
        return (Subcategoria) this.getDAO(Subcategoria.class.getName()).findById(o);
    }

    @Override
    public List<Subcategoria> findAll(String className) {
        return this.getDAO(className).findAll();
    }

    @Override
    public List<Subcategoria> findByQuery(String query) {
        return this.getDAO(Subcategoria.class.getName()).findByQuery(query);
    }

}
