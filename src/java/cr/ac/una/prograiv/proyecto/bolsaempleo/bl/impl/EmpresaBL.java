/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.BaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.IBaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Empresa;
import java.util.List;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class EmpresaBL extends BaseBL implements IBaseBL<Empresa, Integer> {

    public EmpresaBL() {
        super();
    }

    @Override
    public void save(Empresa o) {
        this.getDAO(o.getClass().getName()).save(o);
    }

    @Override
    public Empresa merge(Empresa o) {
        return (Empresa) this.getDAO(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Empresa o) {
        this.getDAO(o.getClass().getName()).delete(o);
    }

    @Override
    public Empresa findById(Integer o) {
         return (Empresa) this.getDAO(Empresa.class.getName()).findById(o);
    }

    @Override
    public List<Empresa> findAll(String className) {
         return this.getDAO(className).findAll();
    }

    @Override
    public List<Empresa> findByQuery(String query) {
           return this.getDAO(Empresa.class.getName()).findByQuery(query);

    }

}
