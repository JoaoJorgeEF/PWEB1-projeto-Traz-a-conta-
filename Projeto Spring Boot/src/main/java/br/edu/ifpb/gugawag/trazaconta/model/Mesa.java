package br.edu.ifpb.gugawag.trazaconta.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Mesa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String numUsuarios;

    public String getNumUsuarios() {
        return numUsuarios;
    }

    public void setUsuarios(String usuarios) {
        this.numUsuarios = usuarios;
    }
}
