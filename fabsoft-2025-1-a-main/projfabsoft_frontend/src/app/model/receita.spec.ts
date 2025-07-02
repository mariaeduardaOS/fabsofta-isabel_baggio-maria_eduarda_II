import { Ingrediente } from './ingrediente';

export interface Receita {
  id?: number;
  titulo: string;
  descricao: string;
  ingredientes: Ingrediente[];
  modoPreparo: string;
  usuarioId?: number; // Pra associar ao usuário que criou
}
