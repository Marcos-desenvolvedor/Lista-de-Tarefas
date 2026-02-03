import { LerID } from "../prompts/lerDados.js";
import { AtualizaTarefa } from "../services/AtualizarTarefa.js";
import { LerDadosParaAtualizar } from "../prompts/lerDados.js";

export function FluxoAtualizarTarefa() {
  const idParaAtualizar = LerID("QUAL ID PARA ATUALIZAR: ");

  const novosDados = LerDadosParaAtualizar();
  const resultado = AtualizaTarefa(idParaAtualizar, novosDados);

  console.log(resultado.mesagem);
}
