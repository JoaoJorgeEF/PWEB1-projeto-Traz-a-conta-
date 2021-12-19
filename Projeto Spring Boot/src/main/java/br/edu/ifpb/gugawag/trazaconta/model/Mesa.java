package br.edu.ifpb.gugawag.trazaconta.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Mesa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ElementCollection
    private List<String> usuarios = new ArrayList<String>();

    public List<String> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<String> usuarios) {
        this.usuarios = usuarios;
    }
}
