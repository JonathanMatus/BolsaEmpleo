/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bolsaempleo.bl;

import java.util.List;

/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public interface IBaseBL<T,K> {
     public abstract void save(T o);

    public abstract T merge(T o);

    public abstract void delete(T o);
    
    //k ES LA LLAVE PRIMARIA DE LA BASE DE DATOS
    
    public abstract  T findById(K o);

    public abstract List<T> findAll(String className);
    
    public abstract List<T> findByQuery(String query);

    
}
