import { lerBanco } from "../data/funcoesBanco.js";

export function fluxoMostarTarefas() {
  const tarefas = lerBanco();

  console.log("--- TAREFAS ---");
  console.log(tarefas);
  //   for (const t of tarefas) {
  //     console.log(`id: ${t.id} | nome: ${t.name} | realizada: ${t.realizado}`);
  //   }
}
