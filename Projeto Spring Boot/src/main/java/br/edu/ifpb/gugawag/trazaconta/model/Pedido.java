package br.edu.ifpb.gugawag.trazaconta.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Pedido {

  @Id
  @Column(name="id")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long Id;

  @OneToOne
  @JoinColumn(name = "usuario_id")
  private Usuario usuario;

  @OneToOne
  @JoinColumn(name = "mesa_id")
  private Mesa mesa;

  @ManyToMany
  private List<ItemCardapio> itensCardapio;

  @Column(name="preco_total")
  private double precoTotal;

  @Column(name="status")
  private boolean status;

  public double getPrecoTotal() {
    return precoTotal;
  }

  public void setPrecoTotal(double precoTotal) {
    this.precoTotal = precoTotal;
  }

  public Long getId() {
    return Id;
  }

  public boolean isStatus() {
    return status;
  }

  public void setStatus(boolean status) {
    this.status = status;
  }

  public void setId(Long id) {
    Id = id;
  }

  public Usuario getUsuario() {
    return usuario;
  }

  public void setUsuario(Usuario usuario) {
    this.usuario = usuario;
  }

  public Mesa getMesa() {
    return mesa;
  }

  public void setMesa(Mesa mesa) {
    this.mesa = mesa;
  }

  public List<ItemCardapio> getItensCardapio() {
    return itensCardapio;
  }

  public void setItensCardapio(List<ItemCardapio> itensCardapio) {
    this.itensCardapio = itensCardapio;
  }
}
