/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Empresa;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author patei
 */
public class EmpresaDao extends HibernateUtil implements IBaseDAO<Empresa, Integer>{
    public void save(Empresa o) {

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
    public Empresa merge(Empresa o) {
        try {
            iniciaOperacion();
            o = (Empresa) getSesion().merge(o);
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
    public void delete(Empresa o) {
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
    public Empresa findById(Integer id) {
        Empresa empresas = null;
        try {
            iniciaOperacion();
            empresas = (Empresa) getSesion().get(Empresa.class, id);

        } finally {
            getSesion().close();
        }
        return empresas;

    }

    @Override
    public List<Empresa> findAll() {
        List<Empresa> listaEmpresas = null;
        try {
            iniciaOperacion();
            listaEmpresas = getSesion().createQuery("from Empresa").list();
        } finally {
            getSesion().close();
        }
        return listaEmpresas;
    }

    @Override
    public List<Empresa> findByQuery(String query) {
          List<Empresa> acesso;
        try{
            iniciaOperacion();
            acesso = (List<Empresa>) getSesion().createQuery(query);
        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }
}
