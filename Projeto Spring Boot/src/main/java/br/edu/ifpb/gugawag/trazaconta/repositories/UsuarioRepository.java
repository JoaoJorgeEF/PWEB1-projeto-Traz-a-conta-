package br.edu.ifpb.gugawag.trazaconta.repositories;

import br.edu.ifpb.gugawag.trazaconta.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
