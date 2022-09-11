document.addEventListener("DOMContentLoaded",function(){

let imagenes=[
{url:"imagenes/imagen1.jpg",
nombre:"morada" },
{url:"imagenes/imagen2.jpg",
nombre:"azul" },
{url:"imagenes/imagen3.jpg",
nombre:"dracula" },
{url:"imagenes/imagen4.jpg",
nombre:"frank" },
{url:"imagenes/imagen5.jpg",
nombre:"lobo" },
{url:"imagenes/imagen6.jpg",
nombre:"ardilla" },
{url:"imagenes/imagen7.jpg",
nombre:"verde" },
{url:"imagenes/imagen8.jpg",
nombre:"grupo" },
{url:"imagenes/imagen9.jpg",
nombre:"peludo" },
{url:"imagenes/imagen10.jpg",
nombre:"robot" },
{url:"imagenes/imagen11.jpg",
nombre:"morena" },
{url:"imagenes/imagen12.jpg",
nombre:"barbie" },
{url:"imagenes/imagen13.jpg",
nombre:"pepahermano" },
{url:"imagenes/imagen14.jpg",
nombre:"hermanopepa" },
{url:"imagenes/imagen15.jpg",
nombre:"pepavoladora" },
{url:"imagenes/imagen16.jpg",
nombre:"bug" },
{url:"imagenes/imagen17.jpg",
nombre:"bugamigos" },
{url:"imagenes/imagen18.jpg",
nombre:"gallo" },
{url:"imagenes/imagen19.jpg",
nombre:"elcompa" },
{url:"imagenes/imagen20.jpg",
nombre:"noviacompa" },
{url:"imagenes/imagen21.jpg",
nombre:"pitufina" },
{url:"imagenes/imagen1.jpg",
nombre:"morada" },
{url:"imagenes/imagen2.jpg",
nombre:"azul" },
{url:"imagenes/imagen3.jpg",
nombre:"dracula" },
{url:"imagenes/imagen4.jpg",
nombre:"frank" },
{url:"imagenes/imagen5.jpg",
nombre:"lobo" },
{url:"imagenes/imagen6.jpg",
nombre:"ardilla" },
{url:"imagenes/imagen7.jpg",
nombre:"verde" },
{url:"imagenes/imagen8.jpg",
nombre:"grupo" },
{url:"imagenes/imagen9.jpg",
nombre:"peludo" },
{url:"imagenes/imagen10.jpg",
nombre:"robot" },
{url:"imagenes/imagen11.jpg",
nombre:"morena" },
{url:"imagenes/imagen12.jpg",
nombre:"barbie" },
{url:"imagenes/imagen13.jpg",
nombre:"pepahermano" },
{url:"imagenes/imagen14.jpg",
nombre:"hermanopepa" },
{url:"imagenes/imagen15.jpg",
nombre:"pepavoladora" },
{url:"imagenes/imagen16.jpg",
nombre:"bug" },
{url:"imagenes/imagen17.jpg",
nombre:"bugamigos" },
{url:"imagenes/imagen18.jpg",
nombre:"gallo" },
{url:"imagenes/imagen19.jpg",
nombre:"elcompa" },
{url:"imagenes/imagen20.jpg",
nombre:"noviacompa" },
{url:"imagenes/imagen21.jpg",
nombre:"pitufina" }
];
//mover posicion imagenes 
imagenes.sort(()=>Math.random()-0.5);

/*LLENAR CUADRO*/
const $tablero=document.querySelector(".juego");
function llernartablero(){
    for(i=0;i<imagenes.length;i++){

        let $img = document.createElement("img");
        $img.setAttribute("src","imagenes/pregunta.jpg");
        $img.setAttribute("width","120px");
        $img.setAttribute("height","100px");
        $img.style.borderRadius ="20PX";
        $img.setAttribute("position",i);
        $tablero.appendChild($img);
        $img.addEventListener('click',mostrarimagen);
    };
};
llernartablero();
/*MOSTRAR IMAGEN*/
let $todasimg=document.querySelectorAll("img");
let posicion = [];
let nombres = [];
let contador=0;
let puntajeuno=0;
let puntajedos=0;
let contaciertos=1;
let sw=1;
let sw2=0;
function mostrarimagen(){
    
    let posiciones=this.getAttribute("position");
    posicion.push(posiciones);
    $todasimg[posicion[0]].removeEventListener('click',mostrarimagen);
    nombres.push(imagenes[posiciones].nombre);
    this.setAttribute("src",[imagenes[posiciones].url]);

    if(posicion.length===2){
    
        setTimeout (compararimagen,600);
    };  
};

/*COMPARAR IMAGEN*/
function compararimagen(){
    
    if(nombres[0]===nombres[1]){
        $todasimg[posicion[0]].setAttribute("src","imagenes/chulo.jpg");
        $todasimg[posicion[1]].setAttribute("src","imagenes/chulo.jpg");
        $todasimg[posicion[0]].removeEventListener('click',mostrarimagen);
        $todasimg[posicion[1]].removeEventListener('click',mostrarimagen);
        contador=contador+1;

        //contar puntos ganador
        if( $textjugador.textContent==="Puntajes"){
            if(contaciertos===1){
                puntajeuno=parseInt(puntajeuno)+1;
                $puntaje1.textContent=puntajeuno;
                
            }
                else if(contaciertos===2){
                    puntajedos=parseInt(puntajedos)+1;
                    $puntaje2.textContent=puntajedos;
                    
                }
        
        }   
        
            else{
                puntajeuno=parseInt(puntajeuno)+1;
                $puntaje1.textContent=puntajeuno;
            }
        
    }
    else{
        $todasimg[posicion[0]].setAttribute("src","imagenes/pregunta.jpg");
        $todasimg[posicion[1]].setAttribute("src","imagenes/pregunta.jpg");
        $todasimg[posicion[0]].addEventListener('click',mostrarimagen);
        //logica puntos ganador
        if( $textjugador.textContent==="Puntajes"){
            if(contaciertos===1){
                contaciertos=2;
            }
               else if(contaciertos===2){
                contaciertos=1;
               }    
        }     
    }

    posicion = [];
    nombres = [];
    
    if (contador==21){
        contaciertos=1;
        
        if($textjugador.textContent==="Puntajes"){
            
            if(parseInt(puntajeuno)>parseInt(puntajedos)){
                //mostrar ganador
                sw2=parseInt(sw)%2;

                if(sw2===0){
                    $imagen1.setAttribute("src","imagenes/imagen3-fondo.jpg");

                }
                    else{
                        $imagen1.setAttribute("src","imagenes/imagen2-fondo.jpg");
                    }
                
                $personajes.removeChild($imagen2);
                $puntajejugadores.removeChild($texpuntaje2);
                $menu.removeChild($textjugador); 
                $menu.removeChild($boton22);
                $imagen1.style.width="300px";

                setTimeout(()=>{
                //poner botones de inicio y remover ganador para volver a llenar
                $personajes.removeChild($imagen1);
                $puntajejugadores.removeChild($texpuntaje1);
                $menu.removeChild($boton111);
                for(i=0;i<42;i++){
                    $todasimg[i].setAttribute("src","imagenes/pregunta.jpg");  
                    $todasimg[i].removeEventListener("click",mostrarimagen);
                    contador=0;
                }; 
                $boton1.style.display="inline-block";
                $boton2.style.display="inline-block";
                puntajeuno=0;
                puntajedos=0;
                },7000);
            }
                else if(parseInt(puntajeuno)===parseInt(puntajedos)){
                    //mostrar ganador
                    
                    sw2=parseInt(sw)%2;

                    if(sw2===0){
                        $imagen1.setAttribute("src","imagenes/imagen3-fondo.jpg");
                        $imagen2.setAttribute("src","imagenes/imagen2-fondo.jpg");
                        $imagen2.style.width="130px";
                        $imagen2.style.height="180px";
                        $imagen1.style.width="130px";
                        $imagen1.style.height="180px";
                        $imagen1.style.marginRight="5px";
                        $imagen2.style.marginLeft="5px";

                        $imagen2.style.marginRight= "0px";

                    }
                        else{
                            $imagen1.setAttribute("src","imagenes/imagen2-fondo.jpg");
                            $imagen2.setAttribute("src","imagenes/imagen3-fondo.jpg");
                            $imagen2.style.width="130px";
                            $imagen2.style.height="180px";
                            $imagen1.style.width="130px";
                            $imagen1.style.height="180px";
                            $imagen1.style.marginRight="5px";
                            $imagen2.style.marginLeft="5px";

                            $imagen2.style.marginRight= "0px";
                        }
                    

                    
                    setTimeout(()=>{
                     //poner botones de inicio y remover ganadores para volver a llenar
                     $personajes.removeChild($imagen2);
                     $puntajejugadores.removeChild($texpuntaje2);
                     $menu.removeChild($boton22);
                     $menu.removeChild($textjugador); 
                     $personajes.removeChild($imagen1);
                     $puntajejugadores.removeChild($texpuntaje1);
                     $menu.removeChild($boton111);
                    for(i=0;i<42;i++){
                        $todasimg[i].setAttribute("src","imagenes/pregunta.jpg");  
                        $todasimg[i].removeEventListener("click",mostrarimagen); 
                        contador=0;
                    }; 
                    $boton1.style.display="inline-block";
                    $boton2.style.display="inline-block";
                    puntajeuno=0;
                    puntajedos=0;
                    },7000);
                }
                    else if(parseInt(puntajeuno)<parseInt(puntajedos)){
                        //mostrar ganador
                        if(sw2===0){
                            $imagen2.setAttribute("src","imagenes/imagen2-fondo.jpg");
        
                        }
                            else{
                                $imagen2.setAttribute("src","imagenes/imagen3-fondo.jpg");
                            }
                        
                        $personajes.removeChild($imagen1);
                        $puntajejugadores.removeChild($texpuntaje1);
                        $menu.removeChild($boton111);
                        $menu.removeChild($textjugador); 
                        $texpuntaje2.style.marginLeft="0px";
                        $boton22.style.marginLeft="0px";
                        $imagen2.style.marginRight="0px";
                        $imagen2.style.width="300px";

                        

                        
                        setTimeout(()=>{
                        //poner botones de inicio y remover ganador para volver a llenar
                        $personajes.removeChild($imagen2);
                        $puntajejugadores.removeChild($texpuntaje2);
                        $menu.removeChild($boton22);
                        for(i=0;i<42;i++){
                            $todasimg[i].setAttribute("src","imagenes/pregunta.jpg"); 

                            contador=0;
                        }; 
                        $boton1.style.display="inline-block";
                        $boton2.style.display="inline-block";
                        puntajeuno=0;
                        puntajedos=0;
                        },7000);  
                    }
                       
        }
         else{
            $imagen1.setAttribute("src","imagenes/imagen2-fondo.jpg");
            $imagen1.style.width="300px";
            alert("juego terminado");
                
            setTimeout(() => {
            //poner botones de inicio y remover ganador para volver a llenar
            $personajes.removeChild($imagen1);
            $menu.removeChild($textjugador);
            $menu.removeChild($boton11);
            $menu.removeChild($texpuntaje1);
            for(i=0;i<42;i++){
                $todasimg[i].setAttribute("src","imagenes/pregunta.jpg");  
                $todasimg[i].removeEventListener("click",mostrarimagen);
                contador=0;
            };     
            $boton1.style.display="inline-block";
            $boton2.style.display="inline-block";
            puntajeuno=0;
            },7000);
        }
        sw=parseInt(sw)+1;          
    } 

}
//titulo grande
$menu=document.querySelector(".menu");
$titulo=document.createElement("div");

$numjugadores=document.createElement("h1");
$numjugadores.innerText= "jugadores";
$textitulo=document.createElement("p");
$textitulo.classList.add("titulo");
$textitulo.appendChild($numjugadores);

$titulo.appendChild($textitulo);
$menu.appendChild($titulo);

//boton 1
$boton1=document.createElement("button")
$boton1.innerText= "1 jugador";
$boton1.classList.add("boton1");
$boton1.setAttribute("position",1);
$menu.appendChild($boton1);

//boton2
$boton2=document.createElement("button");
$boton2.innerText= "2 jugadores";
$boton2.classList.add("boton2");
$boton2.setAttribute("position",2);
$menu.appendChild($boton2);

$boton1.addEventListener('click',jugadores);
$boton2.addEventListener('click',jugadores);


//quitar evento click
for(i=0;i<42;i++){
     $todasimg[i].removeEventListener('click',mostrarimagen);   
};
        

//mostrar personajes para seleccionar
function jugadores(){
//poner evento click
for(i=0;i<42;i++){
    $todasimg[i].addEventListener('click',mostrarimagen);   
};

    contpersonajes =this.getAttribute("position");

    if (contpersonajes==1){
        $boton1.style.display="none";
        $boton2.style.display="none";
        //crear boton 1
        $boton11=document.createElement("button");
        $boton11.classList.add("numeroJugador1");
        $boton11.innerText= "P1";
        $menu.appendChild($boton11);

        //personaje
        $personajes =document.createElement("div");

        $imagen1 =document.createElement("img");
        $imagen1.setAttribute("src","imagenes/imagen2.jpg");
        $imagen1.classList.add("personaje1");
        $personajes.appendChild($imagen1);
        $menu.appendChild($personajes);

        //texto jugador
        $textjugador = document.createElement("h1");
        $textjugador.innerText="Puntaje";
        $textjugador.classList.add("puntajes");
        $menu.appendChild($textjugador);
        
        //jugador 1
        $texpuntaje1=document.createElement("button");
        $texpuntaje1.classList.add("puntaje1");
        $puntaje1=document.createElement("h1");
        $texpuntaje1.appendChild($puntaje1);
        $puntaje1.innerText="0";
        $menu.appendChild($texpuntaje1);




    }
    else if (contpersonajes==2){
        $boton1.style.display="none";
        $boton2.style.display="none";
        //crear botone 1
        $boton111=document.createElement("button")
        $boton111.classList.add("numeroJugador1");
        $boton111.innerText= "P1";
        $menu.appendChild($boton111);
        //crear botone 2
        $boton22=document.createElement("button")
        $boton22.classList.add("numeroJugador2");
        $boton22.innerText= "P2";
        $menu.appendChild($boton22);

        //personajes
        $personajes =document.createElement("div");

        $imagen1 =document.createElement("img");
        $imagen2 =document.createElement("img");
        sw2=parseInt(sw)%2;

        if(sw2===0){
            $imagen2.setAttribute("src","imagenes/imagen2.jpg");
            $imagen1.setAttribute("src","imagenes/imagen3.jpg");
            $imagen2.classList.add("personaje1");
            $imagen1.classList.add("personaje2");
        }
            else{
                

                $imagen2.setAttribute("src","imagenes/imagen3.jpg");
                $imagen1.setAttribute("src","imagenes/imagen2.jpg");
                $imagen2.classList.add("personaje2");
                $imagen1.classList.add("personaje1");
            
            }
            
        
        
        $personajes.appendChild($imagen1);
        //imagen 2
        
        $personajes.appendChild($imagen2); 
        $menu.appendChild($personajes);

         //texto jugador
         $textjugador = document.createElement("h1");
         $textjugador.innerText="Puntajes";
         $textjugador.classList.add("puntajes");
         $menu.appendChild($textjugador);

        //puntajes 

        //jugador 1
        $puntajejugadores=document.createElement("div");

        $texpuntaje1=document.createElement("button");
        $texpuntaje1.classList.add("puntaje1");
        $puntajejugadores.appendChild($texpuntaje1);
        $puntaje1=document.createElement("h1");
        $texpuntaje1.appendChild($puntaje1);
        $puntaje1.innerText="0";

        //jugador 2  
        $texpuntaje2=document.createElement("button");
        $texpuntaje2.classList.add("puntaje2");
        $puntajejugadores.appendChild($texpuntaje2);
        $puntaje2=document.createElement("h1");
        $texpuntaje2.appendChild($puntaje2);
        $puntaje2.innerText="0";

        $menu.appendChild($puntajejugadores);
    } 
};


});











 
