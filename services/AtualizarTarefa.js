import { lerBanco, salvarEmBanco } from "../data/funcoesBanco.js";

export function AtualizaTarefa(id, novosDados) {
  const tarefas = lerBanco();

  const tarefaParaAtualizar = tarefas.find((t) => t.id === id);

  if (!tarefaParaAtualizar) {
    return { sucesso: false, mesagem: "TAREFA NÃO EXISTE" };
  }

  tarefaParaAtualizar.name = novosDados.nome;
  tarefaParaAtualizar.realizado = novosDados.realizado;

  salvarEmBanco(tarefas);

  return { sucesso: true, mesagem: "TAREFA ATUALIZADA" };
}
