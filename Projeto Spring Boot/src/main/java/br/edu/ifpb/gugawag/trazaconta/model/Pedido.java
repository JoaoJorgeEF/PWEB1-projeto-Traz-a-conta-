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

  @OneToMany
  private List<ItemCardapio> itensCardapio;

  @Column(name="quantidade")
  private int quantidade;

  public Long getId() {
    return Id;
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

  public void setQuantidade(int quantidade){
    this.quantidade = quantidade;
  }
  public int getQuantidade(return this.quantidade);
}
