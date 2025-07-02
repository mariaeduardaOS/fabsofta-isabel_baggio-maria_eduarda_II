package br.univille.projfabsoft.service.impl;

import br.univille.projfabsoft.entity.Receita;
import br.univille.projfabsoft.repository.ReceitaRepository;
import br.univille.projfabsoft.service.ReceitaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReceitaServiceImpl implements ReceitaService {

    @Autowired
    private ReceitaRepository repository;

    @Override
    public Receita save(Receita receita) { return repository.save(receita); }

    @Override
    public List<Receita> getAll() { return repository.findAll(); }

    @Override
    public Receita getById(long id) { return repository.findById(id).orElse(null); }

    @Override
    public void delete(long id) { repository.deleteById(id); }

    @Override
    public List<Receita> getByUsuarioId(long usuarioId) {
        return repository.findByUsuarioId(usuarioId);
    }
}