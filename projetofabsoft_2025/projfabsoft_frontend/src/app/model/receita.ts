export interface Receita {
  id?: number;
  titulo: string;
  descricao: string;
  ingredientes: string[];  
  modoPreparo: string;
  usuario?: string; 
  emailCriador?: string; 
}
