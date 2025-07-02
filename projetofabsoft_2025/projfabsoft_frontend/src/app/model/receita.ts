export interface Receita {
  id?: number;
  titulo: string;
  descricao: string;
  ingredientes: string[];  // Lista simples de textos
  modoPreparo: string;
  usuario?: string; 
  emailCriador?: string; 
}
