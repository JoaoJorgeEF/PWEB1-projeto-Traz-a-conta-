package br.edu.ifpb.gugawag.trazaconta.controller;

import br.edu.ifpb.gugawag.trazaconta.model.ItemCardapio;
import br.edu.ifpb.gugawag.trazaconta.model.Mesa;
import br.edu.ifpb.gugawag.trazaconta.services.ItemCardapioService;
import br.edu.ifpb.gugawag.trazaconta.services.MesaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class MesaController {
    @Autowired
    private MesaService mesaService;

    @GetMapping("/mesas")
    public List<Mesa> getMesas(){
        return this.mesaService.getMesas();
    }

    @GetMapping("/mesas/{id}")
    public Mesa getMesaById(@PathVariable("id") Long id){
        return this.mesaService.getMesasById(id);
    }

    @PostMapping("/mesas")
    public Mesa postMesa(@RequestBody Mesa mesa){
        return this.mesaService.postMesa(mesa);
    }

    @PutMapping("/mesas/")
    public Mesa putMesa(@RequestBody Mesa mesa){
        return this.mesaService.putMesa(mesa);
    }

    @DeleteMapping("/mesas/{id}")
    public void deleteMesa(@PathVariable("id") Long id){
        this.mesaService.delete(id);
    }
}
