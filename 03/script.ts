const tabuadas = (array: number[]): string => {
  let resultados: string = "";

  for (const numero of array) {
    for (let i = 0; i <= 10; i++) {
      resultados += `${numero} x ${i} = ${numero * i} \n`;

      if (i === 10) {
        resultados += "---------- \n";
      }
    }
  }

  return resultados;
};

console.log(tabuadas([1, 5, 2]));
