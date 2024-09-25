function Filmes(){
    var Filmes = ["Missão Impossivel", "John Wick", "Jack Witcher", "Top-Gun", "Iron-Man", "Capitão America" ]
    document.getElementById("Catalogo").innerHTML += `
        <div class="Elementos">

            ${Filmes}
        </div>

    `
}

function tabuada(){
    var Num = document.getElementById("Conta").value
    var Contador = 0

    while(Contador <= 10){
        document.getElementById("Resposta").innerHTML += `
            <div class="Elementos">
                ${Num * Contador}
                ${Contador++}
            </div>
            `
    }
    
    
}