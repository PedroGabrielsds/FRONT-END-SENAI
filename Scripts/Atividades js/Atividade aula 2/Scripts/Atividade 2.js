function Atividade1(){

alert("Descubra sua categoria de nado!")   
let Idade = prompt("Qual sua idade?")
    if(Idade >= 0 & Idade <= 15){
        alert("Sua categoria é criança!")
    }
    else 
        if(Idade >= 15 &  Idade <= 30){
            alert("Sua categoria é Jovem!")
        }
        else
            if(Idade >= 30 & Idade <= 60){
                alert("Sua categoria é Aduto!")
            }
        else
            if( Idade >= 60){
                alert("Sua categoria é Idoso!")
            }

}

function Atividade2(){
    let Numero1 = Number(prompt("Qual número?"))
    let Operador = prompt("Qual operador?")
    let Numero2 = Number(prompt("Por: "))

    if(Operador == "+"){
        let Resposta = Numero1 + Numero2
        alert(Numero1 + " + " + Numero2 + " = " + Resposta)
    }
      else
        if(Operador == "-"){
            let Resposta = Numero1 - Numero2
            alert(`${Numero1} - ${Numero2}  =  ${Resposta}`)
        }
          else
            if(Operador == "*"){
                let Resposta = Numero1 * Numero2
                alert(`${Numero1} X ${Numero2}  =  ${Resposta}`)
            }
              else
                 if(Operador == "/"){
                    let Resposta = Numero1 / Numero2
                    alert(`${Numero1} / ${Numero2}  =  ${Resposta}`)

                 }

    //  
    // alert(`${Numero1}  +  ${Numero2}   =   ${Resposta}`)
    
    




}
