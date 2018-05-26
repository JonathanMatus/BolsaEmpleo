/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.BaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.IBaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Categoria;
import java.util.List;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class CategoriaBL extends BaseBL implements IBaseBL<Categoria, Integer> {

    public CategoriaBL() {
        super();
    }

    @Override
    public void save(Categoria o) {
        this.getDAO(o.getClass().getName()).save(o);

    }

    @Override
    public Categoria merge(Categoria o) {
        return (Categoria) this.getDAO(o.getClass().getName()).merge(o);

    }

    @Override
    public void delete(Categoria o) {
        this.getDAO(o.getClass().getName()).delete(o);

    }

    @Override
    public Categoria findById(Integer o) {
        return (Categoria) this.getDAO(Categoria.class.getName()).findById(o);

    }

    @Override
    public List<Categoria> findAll(String className) {
        return this.getDAO(className).findAll();
    }

    @Override
    public List<Categoria> findByQuery(String query) {
        return this.getDAO(Categoria.class.getName()).findByQuery(query);

    }

}
