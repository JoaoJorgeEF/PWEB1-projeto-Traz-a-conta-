package br.edu.ifpb.gugawag.trazaconta.repositories;

import br.edu.ifpb.gugawag.trazaconta.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
