export function diferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function obtenerIncremento(marca) {
  let incremento;
  switch (marca) {
    case "americano":
      incremento = 1.15;

      break;

    case "europeo":
      incremento = 1.3;

      break;

    case "asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }

  return incremento;
}

export function obtenerIncrementoPlan(plan) {
    let incremento;
    switch (plan) {
      case "basico":
        incremento = 1.20;
  
        break;
  
      case "completo":
        incremento = 1.50;
  
        break;

      default:
        break;
    }
  
    return incremento;
  }

  export function devuelvePrimeraMayuscula(palabra){


   let caracter = palabra.charAt(0).toUpperCase();


   return caracter + palabra.slice(1);

  }