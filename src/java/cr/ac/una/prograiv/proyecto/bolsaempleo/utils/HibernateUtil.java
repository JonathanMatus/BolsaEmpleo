/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.utils;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

/**
 * Hibernate Utility class with a convenient method to get Session Factory
 * object.
 *
 * @author patei
 */
public class HibernateUtil {

  
    private static final SessionFactory sessionFactory;
    private Session sesion;
    private Transaction transac;
    
    static {
        try {
            // Create the SessionFactory from standard (hibernate.cfg.xml) 
            // config file.
            sessionFactory = new AnnotationConfiguration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            // Log the exception. 
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
    
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public Session getSesion() {
        return sesion;
    }

    public Transaction getTransac() {
        return transac;
    }

    public void setSesion(Session sesion) {
        this.sesion = sesion;
    }

    public void setTransac(Transaction transac) {
        this.transac = transac;
    }
    
    public void iniciaOperacion() throws HibernateException{
    sesion=HibernateUtil.getSessionFactory().openSession();
    transac=sesion.beginTransaction();
    }
    public void manejaExcepcion(HibernateException he)throws HibernateException{
    transac.rollback();
    throw new HibernateException("Se generó un error con la "
            + "base de datos, por favor contácte al administrador",he);
    }
}
