package br.univille.projfabsoft.repository;

import br.univille.projfabsoft.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> { }
