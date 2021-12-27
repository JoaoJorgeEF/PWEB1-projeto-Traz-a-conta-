package br.edu.ifpb.gugawag.trazaconta.services;

import br.edu.ifpb.gugawag.trazaconta.model.Mesa;
import br.edu.ifpb.gugawag.trazaconta.model.Usuario;
import br.edu.ifpb.gugawag.trazaconta.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UsuarioService {

  @Autowired
  private UsuarioRepository usuarioRepository;

  public List<Usuario> getUsuarios(){
    return this.usuarioRepository.findAll();
  }

  public Usuario getUsuariosById(Long id) {
    return this.usuarioRepository.findById(id).orElse(null);
  }

  public Usuario postUsuario(Usuario usuario) {
    return this.usuarioRepository.save(usuario);
  }

  public Usuario putUsuario(Usuario usuario) {
    return this.usuarioRepository.save(usuario);
  }

  public void delete(Long id) {
    Usuario usuario = this.getUsuariosById(id);
    if (usuario != null) {
      this.usuarioRepository.delete(usuario);
    }
  }
}
