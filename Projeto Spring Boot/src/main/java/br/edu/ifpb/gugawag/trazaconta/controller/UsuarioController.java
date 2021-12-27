package br.edu.ifpb.gugawag.trazaconta.controller;

import br.edu.ifpb.gugawag.trazaconta.model.Mesa;
import br.edu.ifpb.gugawag.trazaconta.model.Usuario;
import br.edu.ifpb.gugawag.trazaconta.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class UsuarioController {
  @Autowired
  private UsuarioService usuarioService;

  @GetMapping("/usuarios")
  public List<Usuario> getUsuarios(){
    return this.usuarioService.getUsuarios();
  }

  @GetMapping("/usuarios/{id}")
  public Usuario getUsuarioById(@PathVariable("id") Long id){
    return this.usuarioService.getUsuariosById(id);
  }

  @PostMapping("/usuarios")
  public Usuario postUsuario(@RequestBody Usuario usuario){
    return this.usuarioService.postUsuario(usuario);
  }

  @PutMapping("/usuarios/")
  public Usuario putUsuario(@RequestBody Usuario usuario){
    return this.usuarioService.putUsuario(usuario);
  }

  @DeleteMapping("/usuarios/{id}")
  public void deleteUsuario(@PathVariable("id") Long id){
    this.usuarioService.delete(id);
  }
}
