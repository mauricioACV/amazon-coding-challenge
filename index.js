console.clear();

// El ejercicio consiste en que ambos arreglos intercambien
// un elemento, uno con el otro para que terminen teniendo la
// misma cantidad de "dulces"

// Lo resuelvo con algoritmo de fuerza bruta.
// Próxima implementación debe ser optimizada.

const arreglo_1 = [7, 3, 2, 4];
const arreglo_2 = [6, 1, 5];

function equilibraDulcesEntreDosArreglos(arr1, arr2) {
  const sumArr_1 = sumValoresArreglo(arr1);
  const sumArr_2 = sumValoresArreglo(arr2);
  const totalDulcesPorArreglo = (sumArr_1 + sumArr_2) / 2;
  console.log("objetivo", totalDulcesPorArreglo);
  let temp1 = 0;
  let temp2 = 0;
  let encontrado = false;

  for (let i = 0; i < arr1.length; i++) {
    console.log("paso i", i);
    temp1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      console.log("paso j", j);

      temp2 = arr2[j];
      arr1[i] = temp2;
      arr2[j] = temp1;
      if (
        sumValoresArreglo(arr1) === totalDulcesPorArreglo &&
        sumValoresArreglo(arr2) === totalDulcesPorArreglo
      ) {
        encontrado = true;
        console.log(
          "encontrado",
          arr1,
          arr2,
          sumValoresArreglo(arr1),
          sumValoresArreglo(arr2)
        );
        break;
      } else {
        arr1[i] = temp1;
        arr2[j] = temp2;
      }
    }
    if (encontrado) {
      return;
    }
  }

  console.log(null);
  return null;

  function sumValoresArreglo(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0);
  }
}

equilibraDulcesEntreDosArreglos(arreglo_1, arreglo_2);
