/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.bl.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.BaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.bl.IBaseBL;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Caracteristicasoferente;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente;
import java.util.List;

/**
 *
 * @author kerencita
 */
public class CaracteristicasoferenteBL extends BaseBL implements IBaseBL<Caracteristicasoferente, Integer> {

    public CaracteristicasoferenteBL() {
        super();
    }
    

    @Override
    public void save(Caracteristicasoferente o) {
      this.getDAO(o.getClass().getName()).save(o);

    }

    @Override
    public Caracteristicasoferente merge(Caracteristicasoferente o) {
        return (Caracteristicasoferente) this.getDAO(o.getClass().getName()).merge(o);

    }

    @Override
    public void delete(Caracteristicasoferente o) {
       this.getDAO(o.getClass().getName()).delete(o);

    }

    @Override
    public Caracteristicasoferente findById(Integer o) {
      return (Caracteristicasoferente) this.getDAO(Oferente.class.getName()).findById(o);

    }

    @Override
    public List<Caracteristicasoferente> findAll(String className) {
      return this.getDAO(className).findAll();

    }

    @Override
    public List<Caracteristicasoferente> findByQuery(String query) {
   return this.getDAO(Caracteristicasoferente.class.getName()).findByQuery(query);

    }
    
}
