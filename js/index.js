/*CHUNCHE DE SCROLL*/

window.addEventListener('scroll', function(){

    let altoPantalla = window.innerHeight;
    let anchoPantalla = window.innerWidth;
    console.log ('el tamano de la pantalla es:' + altoPantalla + 'x' + anchoPantalla);

    let articulosScroll = document.querySelectorAll('#disciplinas article');
    let cantidadscroll = articulosScroll.length; 
                console.log ('Cantidad de boton: ' + cantidadscroll);
    
    articulosScroll.forEach(function(item,index, listado){
        let posicionElemento = listado[index].getBoundingClientRect().top;
        console.log ('altura de boton: ' + posicionElemento);
        let percenta = (altoPantalla*35/100)
        
        if (posicionElemento < percenta ) {
                                        item.style.opacity = '1'
                                    }
                                    else{
                                            item.style.opacity = '0'
                                        }
    });

    /*let objeto = document.getElementById('atle');
    let posicionObj = objeto.getBoundingClientRect().top;
    let percenta = (altoPantalla*50/100)
    
    for (let l = 0; l < cantidadscroll; l++){
        let elemento = cantidadscroll[l]
        let posicionElemento = elemento.getBoundingClientRect().top;
        let percenta = (altoPantalla*50/100)
                    if (posicionObj < percenta ) {
                        objeto.style.opacity = '1'
                    }
                    else{
                        objeto.style.opacity = '0'
                        }
                        
                    } ; */

});