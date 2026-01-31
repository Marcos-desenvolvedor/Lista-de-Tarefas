import { LerNomeTarefa } from "../prompts/lerDados.js";
import { adicionarTarefa } from "../services/AdicionarTarefa.js";

export function fluxoAdicionarTarefa() {
  const nome = LerNomeTarefa("NOME DA TAREFA: ");

  const resultado = adicionarTarefa(nome);

  console.log(resultado.mesagem);
}
