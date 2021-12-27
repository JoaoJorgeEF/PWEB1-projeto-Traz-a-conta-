package br.edu.ifpb.gugawag.trazaconta.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Mesa {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

    private String usuarios;

  public Long getId() {
    return Id;
  }

  public void setId(Long id) {
    this.Id = id;
  }

  public String getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(String usuarios) {
        this.usuarios = usuarios;
    }
}
