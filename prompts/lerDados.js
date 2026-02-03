import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function LerNomeTarefa(valor) {
  while (true) {
    const nome = prompt(valor);

    if (nome === "") {
      console.log("NOME INVÁLIDO");
      continue;
    }
    return nome;
  }
}

export function LerID(valor) {
  while (true) {
    const id = prompt(valor);

    if (id === "" || isNaN(id) || id < 0) {
      console.log("ID INVÁLIDO");
      continue;
    }
    return Number(id);
  }
}
