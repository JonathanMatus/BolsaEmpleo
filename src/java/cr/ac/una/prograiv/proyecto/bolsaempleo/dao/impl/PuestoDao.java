/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Puesto;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author patei
 */
public class PuestoDao extends HibernateUtil implements IBaseDAO<Puesto, Integer>{
    public void save(Puesto o) {

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
    public Puesto merge(Puesto o) {
        try {
            iniciaOperacion();
            o = (Puesto) getSesion().merge(o);
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
    public void delete(Puesto o) {
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
    public Puesto findById(Integer id) {
        Puesto puestos = null;
        try {
            iniciaOperacion();
            puestos = (Puesto) getSesion().get(Puesto.class, id);

        } finally {
            getSesion().close();
        }
        return puestos;

    }

    @Override
    public List<Puesto> findAll() {
        List<Puesto> listaPuestos = null;
        try {
            iniciaOperacion();
            listaPuestos = getSesion().createQuery("from Puesto").list();
        } finally {
            getSesion().close();
        }
        return listaPuestos;
    }

    @Override
    public List<Puesto> findByQuery(String query) {
           List<Puesto> acesso;
        try{
            iniciaOperacion();
          acesso = (List<Puesto>) getSesion().createSQLQuery(query).addEntity(Puesto.class).list();
        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }
}
