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
