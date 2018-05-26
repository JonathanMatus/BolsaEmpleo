/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.BaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.IBaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl.OferenteDao;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente;
import java.util.List;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class OferenteBL extends BaseBL implements IBaseBL<Oferente, Integer> {

    public OferenteBL() {
        super();
    }

    @Override
    public void save(Oferente o) {
        this.getDAO(o.getClass().getName()).save(o);
    }

    @Override
    public Oferente merge(Oferente o) {
        return (Oferente) this.getDAO(o.getClass().getName()).merge(o);

    }

    @Override
    public void delete(Oferente o) {
        this.getDAO(o.getClass().getName()).delete(o);

    }

    @Override
    public Oferente findById(Integer o) {
        return (Oferente) this.getDAO(Oferente.class.getName()).findById(o);

    }

    @Override
    public List<Oferente> findAll(String className) {
        return this.getDAO(className).findAll();
    }

//    public Long ultimoID() {
//        OferenteDao ofeDAO = new OferenteDao();
//        return (Long) ofeDAO.ultimoID();
//    }

    @Override
    public List<Oferente> findByQuery(String query) {
        return this.getDAO(Oferente.class.getName()).findByQuery(query);
    }

}
