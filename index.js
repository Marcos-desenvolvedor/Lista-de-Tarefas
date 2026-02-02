import { fluxoAdicionarTarefa } from "./fluxos/CriarTarefa.js";
import { fluxoMostarTarefas } from "./fluxos/MostrarTarefa.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function menu() {
  while (true) {
    console.log(` ---- MENU DO PROJETO ----
        
                    1 - ADICIONAR TAREFA
                    2 - MOSTRA TAREFAS
                    3 - SAIR`);

    const opcao = prompt("QUAL SUA OPÇÃO: ");

    switch (opcao) {
      case "1":
        fluxoAdicionarTarefa();
        break;
      case "2":
        fluxoMostarTarefas();
        break;
      case "3":
        console.log("SAINDO");
        return;

      case "4":
        "Atualizar tarefa";
        break;
      case "5":
        "Deletar tarefa";
        break;

      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
}

menu();
