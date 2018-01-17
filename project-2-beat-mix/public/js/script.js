// Drum Arrays men

const arrayvacio = () => Array(16).fill(false);

let kicks       = arrayvacio();
let snares      = arrayvacio();
let hiHats      = arrayvacio();
let rideCymbals = arrayvacio();

const equivalencia = (nombre) => {
  switch (nombre) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
    default:
      return;
  }
}


function toggleDrum(el_array, indice){

    if(typeof(el_array) === 'string'){
        el_array = equivalencia(el_array)
    }

    if(indice && (indice <= el_array.length && !(indice < 0))){
        if (el_array[indice]){
            el_array[indice] = false;
        }else{
            el_array[indice] = true;
        }

    }else{
        if(indice===0){
            if(el_array[indice]){
            el_array[indice] = false;
            }else{
            el_array[indice] = true;
            }
        }
    }


} // toggleDrum


function clear(el_array){

    if(typeof(el_array) === 'string'){
        el_array = equivalencia(el_array)
    }

    if(el_array){
        el_array.fill(false)
    }
} 




function invierte(valor){
    return !valor;
}

function invert(el_array){
    if(typeof(el_array) === 'string'){
        el_array = equivalencia(el_array)
    }

    if(el_array){
        for (let j=0; el_array.length > j ; j++){
            el_array[j] = invierte(el_array[j]);
        }
    }
} 

