package br.univille.projfabsoft.controller;

import br.univille.projfabsoft.entity.Receita;
import br.univille.projfabsoft.service.ReceitaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/receitas")
public class ReceitaController {

    @Autowired
    private ReceitaService receitaService;

    @PostMapping
    public Receita save(@RequestBody Receita receita) {
        return receitaService.save(receita);
    }

    @GetMapping
    public List<Receita> getAll() {
        return receitaService.getAll();
    }

    @GetMapping("/{id}")
    public Receita getById(@PathVariable long id) {
        return receitaService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {
        receitaService.delete(id);
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Receita> getByUsuarioId(@PathVariable long usuarioId) {
        return receitaService.getByUsuarioId(usuarioId);
    }
}
