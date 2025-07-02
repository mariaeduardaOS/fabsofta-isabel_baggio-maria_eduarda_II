package br.univille.projfabsoft.repository;

import br.univille.projfabsoft.entity.Receita;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReceitaRepository extends JpaRepository<Receita, Long> {
    List<Receita> findByUsuarioId(Long usuarioId);
}