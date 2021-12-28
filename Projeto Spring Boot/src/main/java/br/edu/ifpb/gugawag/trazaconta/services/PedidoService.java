package br.edu.ifpb.gugawag.trazaconta.services;

import br.edu.ifpb.gugawag.trazaconta.model.Pedido;
import br.edu.ifpb.gugawag.trazaconta.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PedidoService {

  @Autowired
  private PedidoRepository pedidoRepository;

  public List<Pedido> getPedidos() {
    return this.pedidoRepository.findAll();
  }

  public Pedido getPedidosById(Long id) {
    return this.pedidoRepository.findById(id).orElse(null);
  }

  public Pedido postPedido(Pedido pedido) {
    return this.pedidoRepository.save(pedido);
  }

  public Pedido putPedido(Pedido pedido) {
    return this.pedidoRepository.save(pedido);
  }

  public void delete(Long id){
    Pedido pedido = this.getPedidosById(id);
    if (pedido != null) {
      this.pedidoRepository.delete(pedido);
    }
  }
}
