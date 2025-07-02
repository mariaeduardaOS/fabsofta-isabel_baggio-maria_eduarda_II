package br.univille.projfabsoft.service;

import br.univille.projfabsoft.entity.Receita;
import java.util.List;

public interface ReceitaService {
    Receita save(Receita receita);
    List<Receita> getAll();
    Receita getById(long id);
    void delete(long id);
    List<Receita> getByUsuarioId(long usuarioId);
}
