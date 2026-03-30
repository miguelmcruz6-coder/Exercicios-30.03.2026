function calcularMedia(aluno) {
  let soma = 0;
  for (let i = 0; i < aluno.nota.length; i++) {
    soma = +notas[i];
  }
  let media = soma / nota.length;
  return media;
}

function classificar(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

// module.exports = {calcularMedia, classificar}
export { calcularMedia, classificar };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 1

function tabuada(tabuada, numero) {
  for (let i = 1; i < 11; i++) {
    tabuada.push(numero * i);
    console.log(`${numero} X ${i} = ${numero * i}`);
  }
}

///////////////////////////////////////////////////////////////////
// Exercício 2

function maiorMenor(lista) {
  let maior = -10000000000000000000000000;
  let menor = 10000000000000000000000000;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] >= maior) {
      maior = lista[i];
    }
    if (lista[i] <= menor) {
      menor = lista[i];
    }
  }
  return {maior, menor}
}

///////////////////////////////////////////////////////////////////
// Exercício 3

function pares(lista) {
  for (let numero of lista) {
    if (numero % 2 == 0) {
      console.log(numero);
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { tabuada, maiorMenor, pares };
