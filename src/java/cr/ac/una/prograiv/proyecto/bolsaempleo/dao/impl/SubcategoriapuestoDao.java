/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Subcategoriapuesto;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author kerencita
 */
public class SubcategoriapuestoDao extends HibernateUtil implements IBaseDAO<Subcategoriapuesto, Integer> {

    @Override
    public void save(Subcategoriapuesto o) {
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
    public Subcategoriapuesto merge(Subcategoriapuesto o) {
          try {
            iniciaOperacion();
            o = (Subcategoriapuesto) getSesion().merge(o);
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
    public void delete(Subcategoriapuesto o) {
        
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
    public Subcategoriapuesto findById(Integer id) {
      
         Subcategoriapuesto sub = null;
        try {
            iniciaOperacion();
            sub = (Subcategoriapuesto) getSesion().get(Subcategoriapuesto.class, id);

        } finally {
            getSesion().close();
        }
        return sub;
        
        
    }

    @Override
    public List<Subcategoriapuesto> findAll() {
         List<Subcategoriapuesto> listasub = null;
        try {
            iniciaOperacion();
            listasub = getSesion().createQuery("from Subcategoriapuesto").list();
        } finally {
            getSesion().close();
        }
        return listasub;
    }

    @Override
    public List<Subcategoriapuesto> findByQuery(String query) {
           List<Subcategoriapuesto> acesso;
        try{
            iniciaOperacion();
       acesso = (List<Subcategoriapuesto>) getSesion().createSQLQuery(query).addEntity(Subcategoriapuesto.class).list();

        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }
    
}
