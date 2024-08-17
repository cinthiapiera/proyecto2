function validarTarjeta(){
    
    let alerta = document.getElementById("alerta");
    alerta.innerText="";
    alerta.className="";
    
    let numero = document.getElementById("numero-tarjeta");
    let digitosTC = numero.value;

    let arrTC = Array.from(digitosTC);
    console.log(arrTC);
    let arrInverso = arrTC.reverse();
    //console.log(arrInverso);
    let digitoPar = -1;
    for (let i = 1; i <= arrInverso.length ; i+=2){
        digitoPar = parseInt(arrInverso[i]);
        digitoPar = digitoPar * 2;
        //console.log(digitoPar);
        if(digitoPar>=10){
                digitoPar = digitoPar.toString();
                //console.log(digitoPar);
                digitoPar = parseInt(digitoPar[0])+parseInt(digitoPar[1]);
                //console.log(digitoPar);
        }
        arrInverso[i] = digitoPar.toString();
    }
    console.log(arrInverso);

    let suma = 0;
    for (let j = 0; j < arrInverso.length; j++) {
        suma = suma + parseInt(arrInverso[j]);
    }
    console.log(suma);

    if (suma % 10 == 0) {
        alerta.innerText = "Tarjeta Valida";
        alerta.className = "alerta-valida"
    } else {
        alerta.innerText = "Tarjeta Invalida";
        alerta.className = "alerta-error";
    }
}

document.getElementById("btn-validar").addEventListener("click", function(){
    validarTarjeta();
})