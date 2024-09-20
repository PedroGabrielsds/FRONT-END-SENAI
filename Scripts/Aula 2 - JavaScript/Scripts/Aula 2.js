function Explicacao(){
    if(true){
        console.log("Estou no if");

    }
    else{
        console.log("Estou no else");

    }

    let idade = Number(prompt("Qual é a idade?"))

    if(idade < 18){
        alert("Entrada não permitida")
        location.href = "https://www.google.com"
    }
    else{
        alert("Entrada liberada")
        location.reload()

    }
}

function Explicação2(){
    const emailAdm = "adm@gmail.com"
    const senhaAdm = "123"

    alert("Seja bem vindo ao Senai");
    let email = prompt("Digite o E-mail:")
    let senha = prompt("Digite a senha:")

    // = Atribuição
    // == comparação de conteudo
    // === Comparação de conteudo e tipo
    // != não igual diferente 
    // & (Equivale ao "e")
    // || (Equivale ao "ou")

    if(email == emailAdm & senha == senhaAdm){
        alert("Você é adm")

    }
    else{
        alert("Usuario ou senha incorreta, tente novamente")

        let repete = confirm("Deseja tentar novamente?")
         if(repete){
            Explicação2()

         }
    }

        // ---------------------------------
        // Se senao - If else
        // If(Expressão){
            // Bloco
        //}
        //else{
            // Bloco   
        //} 
        // ---------------------------------
}
 
function Explicação3(){
    alert("Seja bem vindo a lojinha!")
    let Opção = prompt("A) Placa de video, B) Processador, C)Placa mãe")
    // ---------------------------------------------------
    // Escolha caso - Switch() Case
    // Switch(Expressão){
            //case
                //(Bloco)
                //break
    // }
    // OBS: Condicional indicada para opções únicas!!!
    //----------------------------------------------------


    switch(Opção){
        case "A":
            alert("Placa de video foi adicionada no seu carrinho")
            break
            case "Placa de video":
                alert("Placa de video foi adicionada no seu carrinho")
                break
        case "B":
            alert("Processador foi adicionado no seu carrinho")
            break
            case "Processador":
                alert("Processador foi adicionado no seu carrinho")
                break
                case "Processador":
                alert("Processador foi adicionado no seu carrinho")
                break
        case "C":
            alert("Placa mãe foi adicionada no seu carrinho")
            break
            case "Placa mãe":
                alert("Placa mãe foi adicionado no seu carrinho")
                break
        default:
            confirm("Deseja comprar de novo?")
            Explicação3()
            break
    }

}


