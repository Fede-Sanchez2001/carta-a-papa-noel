const $form = document.querySelector("#carta-a-santa")

const nombre = $form.nombre.value
const ciudad = $form.ciudad.value
const comportamiento = $form.comportamiento.value
const descripcionRegalo = $form['descripcion-regalo'].value

function validarNombre(nombre){

    if(nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter"
    }

    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres"
    }

    if(!/^[a-z]+$/i.test(nombre)){
        return "El nombre solo acepta letras"
    }

    return "";
}

function validarCiudad(ciudad){
  
    if(ciudad.length === 0){
        return "Debes elegir una ciudad"
    }

    return "";

}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return "Este campo debe tener al menos 1 caracter"
    }
    else if(descripcionRegalo.length >= 100){
        return "Este campo debe tener menos de 100 caracteres"
    }
    else if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return "El campo descripcion solo puede tener numeros y letras"
    }
    else{
        return ""
    }
}

 