
//con el codigo del ECMAScript 3

var objeto = {
    nombre: function (){return 'nombre'},
    edad: function (){
        document.addEventListener('click', function(event){
            this.nombre; //en este caso hay un error por que este this hace referencia al contexto de document y no a obj
        })
    }
}

//para arreglar esto lo que se hacia antes era disfrazar a this de una variable, en este caso "that"
var objeto = {
    nombre: function (){return 'nombre'},
    edad: function (){
        var that = this;
        document.addEventListener('click', function(event){
            that.nombre(); //entonces cada vez que hacemos click en el documento estamos llamando a la funcion foo() de obj
        })
    }
}

//a partir del ECMAScript 5 tenemos un metodo especial llamado bind que nos permite hacer un enlazamiento del contexto con el componente
var objeto = {
    nombre: function (){return 'nombre'},
    edad: function (){
        document.addEventListener('click', function(event){
            this.nombre; 
        }).bind(this)
    }
}

 //con la llegada del ECMAScript 6 y las arrow functions se puede simplificar mucho mas 
 var objeto = {
    nombre: function (){return 'nombre'},
    edad: function (){
        document.addEventListener('click', event => this.nombre())
            this.nombre; 
        
    } //nos ahorramos el bind por que el arrow function ya lleva implicito el bind
}