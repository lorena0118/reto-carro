
let mensaje = document.querySelector('#message');
let encender = document.querySelector('#button');
let direcccionalDerecha= document.querySelector('#turnRight');
let direcccionalIzquierda= document.querySelector('#turnLeft');
let estacionarias = document.querySelector('#estacionarias');
let freno= document.querySelector('#freno');
let arrancar=document.querySelector('#arranque');
let estacionaria;
let arranque=false;
let giroDerecha;
let giroIzquierda;


class Car {
    constructor(estado, frenoMano, cambio, clutch, freno) {
        this.estado = estado;
        this.frenoMano = frenoMano;
        this.cambio = cambio;
        this.clutch=clutch;
        this.freno=freno;
    }
    encender() {
        console.log('Verificando que el cambio esté en neutro.');
        
        setTimeout(() => {mensaje.textContent= 'Verificando que el cambio esté en neutro.';}, 500);
        setTimeout(() => {mensaje.textContent= '...';}, 3000);
          

        if (this.cambio == 'Neutro') {
            setTimeout(() => {mensaje.textContent= 'El cambio está en neutro, verificando que el freno de mano esté activo';},6000);
            if(this.frenoMano === true){
                setTimeout(() => {mensaje.textContent="encendiendo carro";},9000);
                this.estado = true;
                setTimeout(() => {mensaje.textContent="Carro encendido";},12000);
            }else{
                setTimeout(() => {mensaje.innerHTML="Activando freno de mano";},6000);
                this.frenoMano=true;
                setTimeout(() => {mensaje.innerHTML="freno de mano activado, encendiendo carro";},9000);
                this.estado = true;
                setTimeout(() => {mensaje.innerHTML="Carro encendido";},12000);
            }
            

            return this.estado;
        } else {
            setTimeout(() => {mensaje.textContent=`camibio: ${this.cambio}. Cambiando a Neutro`;},6000);
            this.cambio = "Neutro";
            setTimeout(() => {mensaje.textContent= 'El cambio está en neutro, verificando que el freno de mano esté activo';},9000);
            if(this.frenoMano === true){
                setTimeout(() => {mensaje.textContent="encendiendo carro";},12000);
                this.estado = true;
                setTimeout(() => {mensaje.textContent="Carro encendido";}, 15000);
            }else{
                setTimeout(() => {mensaje.innerHTML="Activando freno de mano";},9000);
                this.frenoMano=true;
                setTimeout(() => {mensaje.innerHTML="freno de mano activado, encendiendo carro";},12000);
                this.estado = true;
                setTimeout(() => {mensaje.innerHTML="Carro encendido";},15000);
            }

            return this.estado;

        } 
    }

    destino(){
        let distancia= Math.random()*(70-10) + 10;
        mensaje.innerHTML="Distancia del destino: " + Math.round(distancia) + " kilometros";
        console.log(distancia);
        let paradas = Math.random()*(3-1) + 1 
        console.log(paradas);
        mensaje.innerHTML="Numero de paradas: " + Math.round(paradas);
        let duracionParada = Math.random() * (5-1) + 1;
        mensaje.innerHTML="duración parada: " + Math.round(duracionParada) + " segundos";
        let distanciaCadaParada= distancia/paradas;
        mensaje.innerHTML="distancia entre paradas: " +Math.round(distanciaCadaParada) + " kilometros.";

        return distancia, paradas, duracionParada, distanciaCadaParada;

    }

    arranque(){
        
        if(this.estado === true){
            this.freno= true;
            setTimeout(() => {mensaje.textContent='Freno: ON';}, 500);
            this.clutch=true; 
            setTimeout(() => {mensaje.textContent='Clutch: ON';}, 2000);
            this.frenoMano=false;
            setTimeout(() => {mensaje.textContent='Freno de mano: OFF';}, 4000);
            this.cambio=1;
            setTimeout(() => {mensaje.textContent='cambio: 1 ';}, 6000);
            this.acelerador=true;
            if(this.acelerador===true){
                this.freno=false;
                this.clutch=false;
                setTimeout(() => {mensaje.textContent='ACELERANDO --> Freno: OFF  --> Clutch: OFF';}, 7000);
            }
            arranque=true;
            setTimeout(() => {mensaje.textContent= 'El carro ha arrancado.';}, 10000)
            

        }

    }
    giroIzquierda(key){
        
        if(key.keyCode === 76){
            setTimeout(()=> {mensaje.textContent='Girando a la izquierda';}, 500);
            setTimeout(()=> {mensaje.textContent='Giro realizado';}, 3000);
            setTimeout(() => {mensaje.textContent='Direccional izquierda apagada';}, 6000);
            
        }
    }

    giroDerecha(key){
        if(key.keyCode ===  82){
            setTimeout(()=> {mensaje.textContent='Girando a la derecha';}, 500);
            setTimeout(()=> {mensaje.textContent='Giro realizado';}, 3000);
            setTimeout(() => {mensaje.textContent='Direccional derecha apagada';}, 6000);
            
        }
    }

    /* enMarcha(){
        for(let i=1; i=6, i++){
            setTimeout(()=>{
                this.cambio=i;
                if(this.cambio==4){
                    frenar();
                }
            },4000);
        }
    } */

    frenar(){
        this.clutch=true;
        this.freno=true;
        arranque=false;
        mensaje.textContent='carro parado';
        setTimeout(()=>{
            mensaje.textContent='clutch: ON, freno: ON'
        },3000)
        estacionaria=false;
        
        
    }

}



let carro1 = new Car(false, false, 1, false, false);



encender.addEventListener('click', function(){
    if(carro1.estado===true){
        carro1.estado=false;
        carro1.frenoMano=true;
        mensaje.textContent='Carro apagado.';
    }else{
        carro1.encender();
    }
});

arrancar.addEventListener('click', function(){
    if(carro1.estado === true){
        carro1.arranque();
    }else{
        mensaje.textContent='El carro está apagado. Enciendalo.'
    }
});


direcccionalDerecha.addEventListener('click', function(){
    if(carro1.estado=== true){
        if(arranque===true){
            giroDerecha=true;
            mensaje.textContent = 'Direccional derecha activada';
                window.addEventListener('keydown', function(key){
                    
                    if(giroDerecha=== true){
                        carro1.giroDerecha(key);
                        giroDerecha=false;
                    }            
        });
        }else{
            mensaje.textContent= 'El carro aún no ha arrancado.';
        }
        
    }else{
        mensaje.textContent= 'El carro está apagado. Enciendalo.';
    }

});


direcccionalIzquierda.addEventListener('click', function(){
    if(carro1.estado=== true){
        if(arranque===true){
            giroIzquierda=true;
            mensaje.textContent = 'Direccional izquierda activada';
            window.addEventListener('keydown', function(key){
                
                    if(giroIzquierda=== true){
                        carro1.giroIzquierda(key);
                        giroIzquierda=false;
                        
                    }     
                
            
        });
        }else{
            mensaje.textContent= 'El carro aún no ha arrancado.';
        }
        
    }else{
        mensaje.textContent= 'El carro está apagado. Enciendalo.';
    }

});

estacionarias.addEventListener('click', function(){
    estacionaria=true;
    if(estacionaria === true){

        if(carro1.estado=== true){
            if(arranque===true){
                setTimeout(()=> {
                    mensaje.textContent='Estacionarias activadas.'
                },300);
                
                
    
                freno.addEventListener('click', function(){
                    carro1.frenar();
                });
            }else{
                setTimeout(()=> {
                    mensaje.textContent='El carro está parado actulmente';
                },300)
            }
        }else{
            setTimeout(()=> {
                mensaje.textContent='El carro está apagado, enciendalo.';
            },300);
        }

    }
    
    
});

freno.addEventListener('click', ()=>{ 
    if(arranque=false){
        mensaje.textContent='El carro actualmente está detenido'
    }else{
        mensaje.textContent='Primero debe de activar las estacionarias'

    }
})