const produto = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5,
};

const etiquetas = (item: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  const resposta: string[] = [];

  for (let i = 1; i <= item.qtd; i++) {
    resposta.push(`${item.lote}-${item.ano}-${i.toString().padStart(3, "0")}`);
  }

  return resposta;
};

console.log(etiquetas(produto));
