const cipher = {

encode: (offset,valorInput) =>{

      let palabraCifrada ='';

      for (let i=0; i<valorInput.length; i++){

        if (valorInput.charCodeAt(i) === 32) {
           palabraCifrada += ' ';
        } else {
        let codigo = (valorInput.charCodeAt(i)-65+parseInt(offset))%26+65;
        palabraCifrada= palabraCifrada + String.fromCharCode(codigo)
        }

}
return palabraCifrada
},

decode: (offset1,valorInput1) =>{

      let descifrado ='';

      for (let i=0; i<valorInput1.length; i++){

        if (valorInput1.charCodeAt(i) === 32) {
           descifrado += ' ';
       } else {
       let codigo = (valorInput1.charCodeAt(i)+65-parseInt(offset1))%26+65;
       descifrado= descifrado + String.fromCharCode(codigo);
       }

}
return descifrado
}
};


export default cipher;
