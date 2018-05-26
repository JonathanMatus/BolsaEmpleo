/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Localizacion;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;
/**
 *
 * @author patei
 */
public class LocalizacionDao extends HibernateUtil implements IBaseDAO<Localizacion, Integer>{
    public void save(Localizacion o) {

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
    public Localizacion merge(Localizacion o) {
        try {
            iniciaOperacion();
            o = (Localizacion) getSesion().merge(o);
            getTransac().commit();
        } catch(HibernateException he)  {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Localizacion o) {
       try {
            iniciaOperacion();
            getSesion().delete(o);
            getTransac().commit();
        } catch(HibernateException he)  {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
       
    }

    @Override
    public Localizacion findById(Integer id) {
        Localizacion localizaciones = null;
        try {
            iniciaOperacion();
            localizaciones = (Localizacion) getSesion().get(Localizacion.class, id);

        } finally {
            getSesion().close();
        }
        return localizaciones;

    }

    @Override
    public List<Localizacion> findAll() {
        List<Localizacion> listaLocalizaciones = null;
        try {
            iniciaOperacion();
            listaLocalizaciones = getSesion().createQuery("from Localizacion").list();
        } finally {
            getSesion().close();
        }
        return listaLocalizaciones;
    }

    @Override
    public List<Localizacion> findByQuery(String query) {
          List<Localizacion> acesso;
        try{
            iniciaOperacion();
            acesso = (List<Localizacion>) getSesion().createQuery(query);
        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }
}
