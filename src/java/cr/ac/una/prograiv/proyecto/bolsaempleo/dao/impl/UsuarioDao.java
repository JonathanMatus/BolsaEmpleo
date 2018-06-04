/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Usuario;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author patei
 */
public class UsuarioDao extends HibernateUtil implements IBaseDAO<Usuario, Integer>{
    public void save(Usuario o) {

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
    public Usuario merge(Usuario o) {
        try {
            iniciaOperacion();
            o = (Usuario) getSesion().merge(o);
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
    public void delete(Usuario o) {
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
    public Usuario findById(Integer id) {
        Usuario usuarios = null;
        try {
            iniciaOperacion();
            usuarios = (Usuario) getSesion().get(Usuario.class, id);

        } finally {
            getSesion().close();
        }
        return usuarios;

    }

    @Override
    public List<Usuario> findAll() {
        List<Usuario> listaUsuarios = null;
        try {
            iniciaOperacion();
            listaUsuarios = getSesion().createQuery("from Usuario").list();
        } finally {
            getSesion().close();
        }
        return listaUsuarios;
    }

    @Override
    public List<Usuario> findByQuery(String query) {
           List<Usuario> acesso;
        try{
            iniciaOperacion();
           acesso = (List<Usuario>) getSesion().createSQLQuery(query).addEntity(Usuario.class).list();

        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }
}
