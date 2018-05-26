/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.dao.impl;

import cr.ac.una.prograiv.proyecto.bolsaempleo.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.bolsaempleo.domain.Oferente;
import cr.ac.una.prograiv.proyecto.bolsaempleo.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author patei
 */
public class OferenteDao extends HibernateUtil implements IBaseDAO<Oferente, Integer> {

    public void save(Oferente o) {

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
    public Oferente merge(Oferente o) {
        try {
            iniciaOperacion();
            o = (Oferente) getSesion().merge(o);
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
    public void delete(Oferente o) {
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
    public Oferente findById(Integer id) {
        Oferente oferentes = null;
        try {
            iniciaOperacion();
            oferentes = (Oferente) getSesion().get(Oferente.class, id);

        } finally {
            getSesion().close();
        }
        return oferentes;

    }

    @Override
    public List<Oferente> findAll() {
        List<Oferente> listaOferentes = null;
        try {
            iniciaOperacion();
            listaOferentes = getSesion().createQuery("from Oferente").list();
        } finally {
            getSesion().close();
        }
        return listaOferentes;
    }

//    public Long ultimoID() {
//            iniciaOperacion();
//             return  (Long)getSesion().createQuery("select MAX(last_insert_id(PK_Id_localizacion)) from Localizacion").uniqueResult();
//    }

    @Override
    public List<Oferente> findByQuery(String query) {
          List<Oferente> acesso;
        try{
            iniciaOperacion();
            acesso = (List<Oferente>) getSesion().createQuery(query);
        }catch(HibernateException he){
            manejaExcepcion(he);
            throw he;
        }finally{
            getSesion().close();
        }
        return acesso;
    }

}
