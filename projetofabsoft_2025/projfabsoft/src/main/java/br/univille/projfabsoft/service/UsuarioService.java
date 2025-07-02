package br.univille.projfabsoft.service;

import br.univille.projfabsoft.entity.Usuario;
import java.util.List;

public interface UsuarioService {
    Usuario save(Usuario usuario);
    List<Usuario> getAll();
    Usuario getById(long id);
    void delete(long id);
}