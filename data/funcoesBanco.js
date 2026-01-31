import fs from "fs";

const PATH = "./data/banco.json";

export function lerBanco() {
  const texto = fs.readFileSync(PATH, "utf-8");

  return JSON.parse(texto);
}

export function salvarEmBanco(listaNova) {
  const listaParaSalvar = JSON.stringify(listaNova, null, 2);

  fs.writeFileSync(PATH, listaParaSalvar);
}
