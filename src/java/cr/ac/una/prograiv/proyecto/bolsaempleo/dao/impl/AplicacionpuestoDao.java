/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Aplicacionpuesto;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author kerencita
 */
public class AplicacionpuestoDao extends HibernateUtil implements IBaseDAO<Aplicacionpuesto, Integer>  {

    @Override
    public void save(Aplicacionpuesto o) {
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
    public Aplicacionpuesto merge(Aplicacionpuesto o) {
           try {
            iniciaOperacion();
            o = (Aplicacionpuesto) getSesion().merge(o);
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
    public void delete(Aplicacionpuesto o) {
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
    public Aplicacionpuesto findById(Integer id) {
           Aplicacionpuesto apli = null;
        try {
            iniciaOperacion();
            apli = (Aplicacionpuesto) getSesion().get(Aplicacionpuesto.class, id);

        } finally {
            getSesion().close();
        }
        return apli;
    }

    @Override
    public List<Aplicacionpuesto> findAll() {
         List<Aplicacionpuesto> listaAplipuesto = null;
        try {
            iniciaOperacion();
            listaAplipuesto = getSesion().createQuery("from Aplicacionpuesto").list();
        } finally {
            getSesion().close();
        }
        return listaAplipuesto;
    }

    @Override
    public List<Aplicacionpuesto> findByQuery(String query) {
         List<Aplicacionpuesto> acesso;
        try{
            iniciaOperacion();
            acesso = (List<Aplicacionpuesto>) getSesion().createSQLQuery(query).addEntity(Aplicacionpuesto.class).list();
        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }
    
}
