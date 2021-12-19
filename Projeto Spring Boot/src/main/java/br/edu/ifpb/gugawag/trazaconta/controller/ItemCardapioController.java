package br.edu.ifpb.gugawag.trazaconta.controller;

import br.edu.ifpb.gugawag.trazaconta.model.ItemCardapio;
import br.edu.ifpb.gugawag.trazaconta.services.ItemCardapioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
public class ItemCardapioController {

    @Autowired
    private ItemCardapioService itemCardapioService;

    @GetMapping("/itensCardapio")
    public List<ItemCardapio> getItensCardapio(){
        return this.itemCardapioService.getItensCardapio();
    }

    @GetMapping("/itensCardapio/{id}")
    public ItemCardapio getItemCardapioById(@PathVariable("id") Long id){
        return this.itemCardapioService.getItensCardapioById(id);
    }

    @PostMapping("/itensCardapio")
    public ItemCardapio postItemCardapio(@RequestBody ItemCardapio itemCardapio){
        return this.itemCardapioService.postItemCardapio(itemCardapio);
    }

    @PutMapping("/itensCardapio/")
    public ItemCardapio putItemCardapio(@RequestBody ItemCardapio itemCardapio){
        return this.itemCardapioService.putItemCardapio(itemCardapio);
    }

    @DeleteMapping("/itensCardapio/{id}")
    public void deleteItemCardapio(@PathVariable("id") Long id){
        this.itemCardapioService.delete(id);
    }
}
