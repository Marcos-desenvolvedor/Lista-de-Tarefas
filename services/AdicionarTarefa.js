import { lerBanco, salvarEmBanco } from "../data/funcoesBanco.js";

export function adicionarTarefa(nome) {
  const tarefas = lerBanco();

  const novoId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;

  const NovaTarefa = {
    id: novoId,
    name: nome,
    realizado: false,
  };

  salvarEmBanco(NovaTarefa);
  return { sucesso: false, mesagem: "TAREFA ADICIONADA" };
}
