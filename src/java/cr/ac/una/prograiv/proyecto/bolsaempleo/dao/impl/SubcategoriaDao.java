/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Subcategoria;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author patei
 */
public class SubcategoriaDao extends HibernateUtil implements IBaseDAO<Subcategoria, Integer>{
   public void save(Subcategoria o) {

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
    public Subcategoria merge(Subcategoria o) {
        try {
            iniciaOperacion();
            o = (Subcategoria) getSesion().merge(o);
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
    public void delete(Subcategoria o) {
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
    public Subcategoria findById(Integer id) {
        Subcategoria subcategorias = null;
        try {
            iniciaOperacion();
            subcategorias = (Subcategoria) getSesion().get(Subcategoria.class, id);

        } finally {
            getSesion().close();
        }
        return subcategorias;

    }

    @Override
    public List<Subcategoria> findAll() {
        List<Subcategoria> listaSubcategorias = null;
        try {
            iniciaOperacion();
            listaSubcategorias = getSesion().createQuery("from Subcategoria").list();
        } finally {
            getSesion().close();
        }
        return listaSubcategorias;
    } 

    @Override
    public List<Subcategoria> findByQuery(String query) {
           List<Subcategoria> acesso;
        try{
            iniciaOperacion();
             acesso = (List<Subcategoria>) getSesion().createSQLQuery(query).addEntity(Subcategoria.class).list();
        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }
}
