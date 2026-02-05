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

export function LerEstadoTarefa(valor) {
  const regras = {
    sim: true,
    nao: false,
    não: false,
  };

  while (true) {
    const Realizado = prompt(valor).toLowerCase();

    if (Realizado === "" || !isNaN(Realizado)) {
      console.log("TEXTO INVÁLIDO");
      continue;
    }

    if (!(Realizado in regras)) {
      console.log("DIGITE: sim / nao");
      continue;
    }

    return regras[Realizado];
  }
}

export function LerDadosParaAtualizar() {
  const NovoNome = LerNomeTarefa("QUAL NOVO NOME: ");
  const tarefarRealizada = LerEstadoTarefa("REALIZADA: ");

  return {
    nome: NovoNome,
    realizado: tarefarRealizada,
  };
}
