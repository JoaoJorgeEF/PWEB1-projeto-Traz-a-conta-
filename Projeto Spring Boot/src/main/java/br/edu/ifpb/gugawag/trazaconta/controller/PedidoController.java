package br.edu.ifpb.gugawag.trazaconta.controller;

import br.edu.ifpb.gugawag.trazaconta.model.Pedido;
import br.edu.ifpb.gugawag.trazaconta.model.Usuario;
import br.edu.ifpb.gugawag.trazaconta.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class PedidoController {

  @Autowired
  private PedidoService pedidoService;

  @GetMapping("/pedidos")
  public List<Pedido> getPedidos(){
    return this.pedidoService.getPedidos();
  }

  @GetMapping("/pedidos/{id}")
  public Pedido getPedidoById(@PathVariable("id") Long id){
    return this.pedidoService.getPedidosById(id);
  }

  @PostMapping("/pedidos")
  public Pedido postPedido(@RequestBody Pedido pedido){
    return this.pedidoService.postPedido(pedido);
  }

  @PutMapping("/pedidos/")
  public Pedido putPedido(@RequestBody Pedido pedido){
    return this.pedidoService.putPedido(pedido);
  }

  @DeleteMapping("/pedidos/{id}")
  public void deletePedido(@PathVariable("id") Long id) {
    this.pedidoService.delete(id);
  }
}
