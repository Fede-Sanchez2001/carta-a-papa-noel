function probarValidarNombre() {
    console.assert(validarNombre("") === "Este campo debe tener al menos 1 caracter", 
    "validar nombre no funcionó con un string vacio",)

    console.assert(validarNombre("12345678910111213141516171819202122232524253262729256464654165465465456465465465465454654654654654564465465465465445645645645645645645645646565465")==="Este campo debe tener menos de 50 caracteres", 
    "validar nombre no valido que el nombre sea menor a 50 caracteres")

    console.assert(validarNombre("Federico") === "", "validarNombre() no esta funcionando con un nombre valido")

    console.assert(validarNombre("132184") === "El nombre solo acepta letras", "validarNombre() no esta validando que solo tenga letras")

}

function probarValidarCiudad(){
    console.assert(validarCiudad("")==="Debes elegir una ciudad", 
    "validarCiudad() no mostro error cuando no eligieron una ciudad")

    console.assert(validarCiudad("Buenos Aires") === "", 
    "validarCiudad() no esta funcionando con una ciudad valida")

}

function probarValidarDescripcionRegalo(){
    console.assert(validarDescripcionRegalo("") === "Este campo debe tener al menos 1 caracter", "validarDescripcionRegalo")
    console.assert(validarDescripcionRegalo("asdasdasda56sd4as65d4as564d65a4sd654as65d46a5s4d56a4s65d4a65s4d564as56d4a65s4d4as56d45a64sd64as6d46as4d564as6d5a6s4das65d4a564sd654asd564a56s4d4as65d4as654d65as4d65a4sd564as56d4a5s4d5asd564as65d4a65s4d56a4sd654as65d4as5d456a4sd65a4s5d4as65d4asd",
    "Este campo debe tener menos de 100 caracteres"))
    console.assert(validarDescripcionRegalo("Quiero un perrito")==="", "validarDescripcionRegalo() no esta funcionando con una descripcion valida")
    console.assert(validarDescripcionRegalo(".,.,.,.")==="El campo descripcion solo puede tener numeros y letras", "validarDescripcioRegalo() no valido que solo fueran numeros y letras")
}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();