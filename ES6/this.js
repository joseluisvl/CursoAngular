let prueba ={precio: 12, iva:62};
prueba.calculaIvaAsync = function (){
    setTimeout(()=>{
        let precioFinal = this.precio * this.iva;
        console.log(`Precio ${precioFinal}`);
    }, 1);
};

prueba.calculaIvaAsync();