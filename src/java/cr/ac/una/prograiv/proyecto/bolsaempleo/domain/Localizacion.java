package cr.ac.una.prograiv.proyecto.bolsaempleo.domain;
// Generated 05-may-2018 16:26:19 by Hibernate Tools 4.3.1


import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

/**
 * Localizacion generated by hbm2java
 */
public class Localizacion  implements java.io.Serializable {


     private Integer pkIdLocalizacion;
     private BigDecimal latitud;
     private BigDecimal longitud;
    

    public Localizacion() {
    }

	
    public Localizacion(BigDecimal latitud, BigDecimal longitud) {
        this.latitud = latitud;
        this.longitud = longitud;
    }
   
   
    public Integer getPkIdLocalizacion() {
        return this.pkIdLocalizacion;
    }
    
    public void setPkIdLocalizacion(Integer pkIdLocalizacion) {
        this.pkIdLocalizacion = pkIdLocalizacion;
    }
    public BigDecimal getLatitud() {
        return this.latitud;
    }
    
    public void setLatitud(BigDecimal latitud) {
        this.latitud = latitud;
    }
    public BigDecimal getLongitud() {
        return this.longitud;
    }
    
    public void setLongitud(BigDecimal longitud) {
        this.longitud = longitud;
    }
   
}


