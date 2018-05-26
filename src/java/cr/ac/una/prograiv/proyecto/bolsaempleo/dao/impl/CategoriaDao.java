/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Categoria;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author patei
 */
public class CategoriaDao extends HibernateUtil implements IBaseDAO<Categoria, Integer>{
   public void save(Categoria o) {

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
    public Categoria merge(Categoria o) {
        try {
            iniciaOperacion();
            o = (Categoria) getSesion().merge(o);
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
    public void delete(Categoria o) {
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
    public Categoria findById(Integer id) {
        Categoria categorias = null;
        try {
            iniciaOperacion();
            categorias = (Categoria) getSesion().get(Categoria.class, id);

        } finally {
            getSesion().close();
        }
        return categorias;

    }

    @Override
    public List<Categoria> findAll() {
        List<Categoria> listaCategorias = null;
        try {
            iniciaOperacion();
            listaCategorias = getSesion().createQuery("from Categoria").list();
        } finally {
            getSesion().close();
        }
        return listaCategorias;
    }  

    @Override
    public List<Categoria> findByQuery(String query) {
          List<Categoria> acesso;
        try{
            iniciaOperacion();
            acesso = (List<Categoria>) getSesion().createQuery(query);
        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }
}
