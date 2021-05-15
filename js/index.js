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


    /*if (posicionObj < percenta ) {
                                        objeto.style.opacity = '1'
                                    }
                                    else{
                                        objeto.style.opacity = '0'
                                        }
    
    let ciclismo = document.getElementById('cicl');
    let posicionCicl = ciclismo.getBoundingClientRect().top;
                                    
    if (posicionCicl < percenta) {
                                ciclismo.style.opacity = '1'
                            }
                            else{
                                    ciclismo.style.opacity = '0'
                                }

    let football = document.getElementById('foot');
    let posicionFoot = football.getBoundingClientRect().top;
                                                                
    if (posicionFoot < percenta) {
                                football.style.opacity = '1'
                            }
                            else{
                                    football.style.opacity = '0'
                                }

    let judo = document.getElementById('judo');
    let posicionjudo = judo.getBoundingClientRect().top;
                                                                                            
    if (posicionjudo < percenta) {
                                judo.style.opacity = '1'
                            }
                            else{
                                    judo.style.opacity = '0'
                                }

    let handball = document.getElementById('hand');
    let posicionhand = handball.getBoundingClientRect().top;
                                                                                                                        
    if (posicionhand < percenta) {
                                handball.style.opacity = '1'
                            }
                            else{
                                    handball.style.opacity = '0'
                                }

    let triatlon = document.getElementById('tria');
    let posiciontria = triatlon.getBoundingClientRect().top;
                                                                                                                        
    if (posiciontria < percenta) {
                                triatlon.style.opacity = '1'
                            }
                            else{
                                    triatlon.style.opacity = '0'
                                }

    let natacion = document.getElementById('nata');
    let posicionnata = natacion.getBoundingClientRect().top;
                                                                                                                        
    if (posicionnata < percenta) {
                                natacion.style.opacity = '1'
                            }
                            else{
                                    natacion.style.opacity = '0'
                                }*/
    
});