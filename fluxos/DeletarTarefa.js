import { ApagarTarefa } from "../services/DeletarTarefa.js";
import { LerID } from "../prompts/lerDados.js";

export function fluxoDeletarTarefa() {
  const id = LerID("QUAL ID PARA REMOVER: ");

  const resultado = ApagarTarefa(id);

  if (resultado.sucesso) {
    console.log(resultado.mesagem);
  } else {
    console.log(resultado.mesagem);
  }
}
