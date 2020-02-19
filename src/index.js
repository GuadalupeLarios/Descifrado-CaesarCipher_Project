import cipher from './cipher.js';

const boton = document.getElementById('btn');

boton.addEventListener ('click',()=>{

        let valorInput = document.getElementById('respuesta').value.toUpperCase();
        let offset = document.getElementById('offsetresultado').value;
        let palabraCifrada=cipher.encode(offset,valorInput);
        document.getElementById('cifrado').value=palabraCifrada;
})


const botonDescifrado = document.getElementById('btnfinal');
    botonDescifrado.addEventListener ('click',()=>{

        let valorInput1 = document.getElementById('final').value.toUpperCase();
        let offset1 = document.getElementById('offsetfinal').value;
        let descifrado = cipher.decode(offset1,valorInput1);
        document.getElementById('cifradofinal').value=descifrado;
});
