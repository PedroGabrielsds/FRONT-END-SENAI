



function Testar(){
    /*
    (document - se refere ao documento HTML)
    (.getElement = buscar um elemento (id, class, tag))
    (.Value = buscar o valor dentro do input)
    
    */
    var Teste = document.getElementById("Teste").value

    /*
    (.innerHTML = colocar algo dentro do elemento com tags)
    (.innerText = colocar algo dentro do elemento (apenas texto))
    */
    document.getElementById("Resposta").innerHTML += `
        <div class="Elementos">
            ${Teste}
        </div>

    `
}

function Repeticao(tipo){
    /*
         Estrutura de Repetição
    (Enquanto) corresponde a ( While(){} ) 
    
    (Para) corresponde a ( for(){} )
    */

    if(tipo == 'enquanto'){
        let Contador = 0
        while(Contador <= 10){
            document.getElementById("Resposta1").innerHTML += "*"
            Contador++
        }
    }else if(tipo == 'para'){
        for(let i = 0; i <= 10;i++){
            document.getElementById("Resposta2").innerHTML += i
        }
    }
}

function Lista(){
    /*
    var arrayComen = Array()
    arrayComen[0] = "Info"
    */
    var Livros = [true, "String", 100, []]
    console.log(Livros[2])

    var ListaProdutos = ['Mangá','Livros', 'Resvistas', 'Apostila']
    ListaProdutos.forEach(Produto => {
        document.getElementById("Resposta3").innerHTML += `
            <div class="Elementos">
                <h2>${Produto}</h2>
            </div>
        `
    });
}