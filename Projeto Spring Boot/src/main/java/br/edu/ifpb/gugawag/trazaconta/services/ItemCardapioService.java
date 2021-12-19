package br.edu.ifpb.gugawag.trazaconta.services;

import br.edu.ifpb.gugawag.trazaconta.model.ItemCardapio;
import br.edu.ifpb.gugawag.trazaconta.repositories.ItemCardapioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ItemCardapioService {

    @Autowired
    private ItemCardapioRepository itemCardapioRepository;

    public List<ItemCardapio> getItensCardapio(){
        return this.itemCardapioRepository.findAll();
    }

    public ItemCardapio getItensCardapioById(Long id) {
        return this.itemCardapioRepository.findById(id).orElse(null);
    }

    public ItemCardapio postItemCardapio(ItemCardapio itemCardapio) {
        return this.itemCardapioRepository.save(itemCardapio);
    }

    public ItemCardapio putItemCardapio(ItemCardapio itemCardapio) {
        return this.itemCardapioRepository.save(itemCardapio);
    }

    public void delete(Long id) {
        ItemCardapio itemCardapio = this.getItensCardapioById(id);
        if (itemCardapio != null) {
            this.itemCardapioRepository.delete(itemCardapio);
        }
    }
}
