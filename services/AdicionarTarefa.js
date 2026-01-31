import { lerBanco, salvarEmBanco } from "../data/funcoesBanco.js";

export function adicionarTarefa(nome) {
  const tarefas = lerBanco();

  const novoId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;

  const NovaTarefa = {
    id: novoId,
    name: nome,
    realizado: false,
  };

  tarefas.push(NovaTarefa);
  salvarEmBanco(tarefas);
  return { sucesso: false, mesagem: "TAREFA ADICIONADA" };
}
