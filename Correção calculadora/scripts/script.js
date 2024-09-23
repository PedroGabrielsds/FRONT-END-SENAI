var N1;
var N2;
var Operador;
var S;


function BtnNumero(botao){
    if(N1 != undefined){
        N2 = Number(botao)
    }
    else{
        N1 = Number(botao)
    }
    alert(`${N1} ${Operador} ${N2} = ${S}`)
}

function BtnOperador(botao){
    Operador = botao
    alert(`${N1} ${Operador} ${N2} = ${S}`)

}

function Calcular(botao){
    switch(Operador){
        case "+":
            S = N1 + N2
            alert(`${N1} ${Operador} ${N2} = ${S}`)
        break
        case "-":
            S = N1 - N2
            alert(`${N1} ${Operador} ${N2} = ${S}`)
        break
        case "*":
            S = N1 * N2
            alert(`${N1} ${Operador} ${N2} = ${S}`)
        break
        case "/":
            S = N1 / N2
            alert(`${N1} ${Operador} ${N2} = ${S}`)
        break
        default:
            alert("Selecione um operador!")
        break
    }
    N1 = undefined
    N2 = undefined
    S = undefined
    
}

function Reset(botao){
    N1 = undefined
    N2 = undefined
    Operador = undefined

}