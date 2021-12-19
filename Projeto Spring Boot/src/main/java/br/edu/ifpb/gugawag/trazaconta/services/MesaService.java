package br.edu.ifpb.gugawag.trazaconta.services;

import br.edu.ifpb.gugawag.trazaconta.model.ItemCardapio;
import br.edu.ifpb.gugawag.trazaconta.model.Mesa;
import br.edu.ifpb.gugawag.trazaconta.repositories.ItemCardapioRepository;
import br.edu.ifpb.gugawag.trazaconta.repositories.MesaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class MesaService {
    @Autowired
    private MesaRepository mesaRepository;

    public List<Mesa> getMesas(){
        return this.mesaRepository.findAll();
    }

    public Mesa getMesasById(Long id) {
        return this.mesaRepository.findById(id).orElse(null);
    }

    public Mesa postMesa(Mesa mesa) {
        return this.mesaRepository.save(mesa);
    }

    public Mesa putMesa(Mesa mesa) {
        return this.mesaRepository.save(mesa);
    }

    public void delete(Long id) {
        Mesa mesa = this.getMesasById(id);
        if (mesa != null) {
            this.mesaRepository.delete(mesa);
        }
    }
}
