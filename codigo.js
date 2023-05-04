const separador = (...datos) =>{
    let resultado = null;
    datos.forEach(dato => resultado += dato+", ")
}

 let muestra = separador("Juan", "Esther")
 
 console.log(muestra)