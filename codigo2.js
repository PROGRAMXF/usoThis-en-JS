//metodo: la funcion se encuentra dentro del objeto.
const objeto = {
    propiedad1: 'valor1',
    propiedad2: 'valor2',

    metodo1(){
        console.log('hola');
    }
};

//si el this se encuentra contenido en un metodo dentro del objeto se va a referis a ese objeto que lo contiene
const objet = {
    propiedad1: 'valor1',
    propiedad2: 'valor2',

    metodo1(){
        console.log(this.propiedad1);
    }
}

//si el this forma parte de una funcion que no es parte de un objeto se va a referir al objeto window si estamos en un buscador
//o al objeto global si estamos en nodejs 

    function saluda (){
        console.log(this);
    }

//--------------------------------------------------------

    //ejemplos:

const notificacion = {
    text: 'programxf',
    color: 'red',

    mostrarse(){
        console.log(this); //como este this esta dentro del metodo mostrarse del objeto notificacion 
                            //deberia devolvernos el objeto notificacion completo
    }
};
notificacion.mostrarse();



//ahora agregamos un metodo para cambiar el texto de la notificacion:
const notificac = {
    text: 'programxf',
    color: 'red',

    mostrarse(){
        console.log(this); 
    },
    cambiarTexto(text){
        this.text = text; //este this esta dentro de un metodo que pertenece a notificac
                            //ahora cuando tenemos el text sin el this adelante refiere al texto que nos llega por parametro
    }
};
console.log(this.title); //aca aparece como undefined por en este caso el this refiere a window y no al objeto notificac



//aca this puede no referir al objeto 
//aca tenemos un objeto y un metodo que le suma un numero a cada numero del array
const sumarNumeros = {
    numeros: [1, 2, 3],
    sumarNumero: 1,

    sumar(){
        this.numeros.forEach(function(numeroArray){
            console.log(numeroArray + this.sumarNumero); //imprime Nan (not a number)
        });
    }
};
sumarNumeros.sumar();
//lo que pasa es que cuando al colocar el foreach declaramos una funcion dentro que no es parte del objeto sino que va a
//pertenecer al scope global entonces no conoce al this por que apunta a window y no al objeto


//para arreglar esto:

const sumarNumero = {
    numeros: [1, 2, 3],
    sumarNum: 1,

    sumar(){
        this.numeros.forEach(function(numeroArray){
            console.log(numeroArray + this.sumarNum); 

        },this);//le agregamos this por fuera de la funcion el objeto al que queremos que apunte nuestro this que esta dentro de la funcion al objeto
    }
};
sumarNumero.sumar();