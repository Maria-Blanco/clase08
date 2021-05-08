window.addEventListener('scroll', function(){
                                                let altoPantalla = window.innerHeight;
                                                let anchoPantalla = window.innerWidth;
                                                console.log ('el tamano de la pantalla es:' + altoPantalla + 'x' + anchoPantalla);

                                                let objeto = document.getElementById('lastOne');
                                                let posicionObj = objeto.getBoundingClientRect().top;
                                                console.log('posicion del obj:' + posicionObj);

                                                if (posicionObj < altoPantalla) {
                                                                                    objeto.style.fontFamily = 'Times New Roman'
                                                                                }
                                            }
                        )