const usuarios2: { nome: string; idade: number; status: boolean }[] = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filtrarUsuarios = (
  array: { nome: string; idade: number; status: boolean }[],
  apelido: string
): { nome: string; idade: number; status: boolean }[] => {
  let usuarioEncontrado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].nome.toLowerCase().includes(apelido.toLocaleLowerCase())) {
      usuarioEncontrado.push(array[i]);
    }
  }
  return usuarioEncontrado;
};

console.log(filtrarUsuarios(usuarios2, "JO"));
