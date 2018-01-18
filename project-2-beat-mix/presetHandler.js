// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const metodo_valido = (metodo) => {
  switch (metodo) {
    case 'GET':
      return 200;
    case 'PUT':
      return 200;
    default:
      return;
  }
}

const presetHandler = (metodo, indice, put_array) => {

    let respuesta = [];
    resultado_presets = presets[indice]

    if(resultado_presets){
        codigo = metodo_valido(metodo);
        if(codigo){            
            respuesta.push(codigo)
        }

        if(metodo === 'GET'){
            respuesta.push(resultado_presets)
        }else if( metodo === 'PUT'){
            presets[indice] = put_array;
            respuesta.push(put_array)
        }
        
    }else{

        codigo = metodo_valido(metodo);
        if(codigo){
            respuesta.push(404)
        }else{
            respuesta.push(400)
        }
    }

    // console.log(respuesta);

    return respuesta
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
