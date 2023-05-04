const separador = (...datos) =>datos.reduce((resultado, str)=>{
    //let resultado = "";
    /* datos.forEach(dato => resultado += dato + ", ")
     return resultado;*/
     if(resultado !== '')
     resultado += ', '
     
     return resultado += str
})

 let muestra = separador("Juan", "Esther")
 
 console.log(muestra)