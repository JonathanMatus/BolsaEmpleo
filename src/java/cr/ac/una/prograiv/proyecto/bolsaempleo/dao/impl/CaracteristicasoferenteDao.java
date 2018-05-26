/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Caracteristicasoferente;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author kerencita
 */
public class CaracteristicasoferenteDao extends HibernateUtil implements IBaseDAO<Caracteristicasoferente, Integer> {

    @Override
    public void save(Caracteristicasoferente o) {
  try {
            iniciaOperacion();
            getSesion().save(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
    }

    @Override
    public Caracteristicasoferente merge(Caracteristicasoferente o) {
        try {
            iniciaOperacion();
            o = (Caracteristicasoferente) getSesion().merge(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Caracteristicasoferente o) {
        try {
            iniciaOperacion();
            getSesion().delete(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
    }

    @Override
    public Caracteristicasoferente findById(Integer id) {
       Caracteristicasoferente caracteristicas = null;
        try {
            iniciaOperacion();
            caracteristicas = (Caracteristicasoferente) getSesion().get(Caracteristicasoferente.class, id);

        } finally {
            getSesion().close();
        }
        return caracteristicas;  
    }

    @Override
    public List<Caracteristicasoferente> findAll() {
        List<Caracteristicasoferente> listaCaracteristicas = null;
        try {
            iniciaOperacion();
            listaCaracteristicas = getSesion().createQuery("from Caracteristicasoferente").list();
        } finally {
            getSesion().close();
        }
        return listaCaracteristicas;
    }

    @Override
    public List<Caracteristicasoferente> findByQuery(String query) {
          List<Caracteristicasoferente> acesso;
        try{
            iniciaOperacion();
            acesso = (List<Caracteristicasoferente>) getSesion().createQuery(query);
        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }
    
}
