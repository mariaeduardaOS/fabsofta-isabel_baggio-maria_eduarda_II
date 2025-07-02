

export interface Receita {
  id?: number;
  titulo: string;
  descricao: string;
  ingredientes: [];
  modoPreparo: string;
  usuarioId?: number; // Pra associar ao usuário que criou
}
