import { lerBanco, salvarEmBanco } from "../data/funcoesBanco.js";

export function ApagarTarefa(idParaRemover) {
  let tarefas = lerBanco();

  const listaNova = tarefas.filter((t) => t.id !== idParaRemover);

  if (listaNova.length === tarefas.length) {
    return { sucesso: false, mesagem: "TAREFA NÃO EXISTE" };
  }

  salvarEmBanco(listaNova);
  return { sucesso: true, mesagem: "TAREFA REMOVIDA" };
}
