const colorFavorito = localStorage.getItem('colorFavorito');
const claseFavorita = localStorage.getItem('claseFavorita');
const selector = document.querySelector('#color')
const borrar = document.querySelector('.borrar')
const botones = document.querySelectorAll('.btn')
const elBody = document.querySelector('body');

quitaTodo = () =>{
    localStorage.removeItem('colorFavorito')
    localStorage.removeItem('claseFavorita')
    elBody.style.backgroundColor= "";
    elBody.classList = ""
}


cambiaColor = (pasadoColor) => {
       quitaTodo()
       localStorage.setItem('colorFavorito', pasadoColor)
       document.querySelector('.respuesta').textContent= pasadoColor
       elBody.style.backgroundColor= pasadoColor;
}

accionBootstrap = (datoClase)=>{
    quitaTodo();
    localStorage.setItem('claseFavorita', datoClase)
    elBody.classList.add(datoClase);
}

    if(colorFavorito) cambiaColor(colorFavorito);
    if(claseFavorita) accionBootstrap(claseFavorita);


borrar.addEventListener('click', quitaTodo)

selector.addEventListener('change',()=>cambiaColor(selector.value))

 botones.forEach(mboton =>{
    let laClase = mboton.classList[1].substring(4)
    if(mboton.classList.length === 2){
      mboton.addEventListener('click',()=> accionBootstrap('bg-'+laClase))
    }
 })
 
 
