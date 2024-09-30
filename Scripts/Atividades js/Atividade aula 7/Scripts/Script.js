class Carros{
    constructor(Marca, Modelo, Ano, Cor, VelocMax){
        this.Marca = Marca
        this.Modelo = Modelo
        this.Ano = Ano
        this.Cor = Cor
        this.VelocMax = VelocMax
        this.VelocMin = 0
    }
    Acelerar(){
        let AcelerarInput = Number(document.querySelector("#AcelerarInput").value)
        if(AcelerarInput <= Carro.VelocMax){
            Carro.VelocMin = AcelerarInput
            alert("Reduzindo....")
            MostrarCarro()
        }
        else{
            Carro.VelocMin = Carro.VelocMax
            alert("Velocidade Máxima ultrapassada")
            MostrarCarro()
        }
    }
}

function Cadastrar(){
    let Marca = document.querySelector("#Marca").value
    let Modelo = document.querySelector("#Modelo").value
    let Ano = document.querySelector("#Ano").value
    let Cor = document.querySelector("#Cor").value
    let VelocMax = Number(document.querySelector("#VelocMax").value)

    Carro = new Carros (Marca, Modelo, Ano, Cor, VelocMax)
    MostrarCarro()
}

var Carro = null
document.querySelector("#CadastrarBtn").addEventListener("click", Cadastrar)


function MostrarCarro(){
    document.querySelector("#Resultado").innerHTML = `
        <div class="container">
        <p>${Carro.Marca}</p>
        <p>${Carro.Modelo}</p>
        <p>${Carro.Ano}</p>
        <p>${Carro.Cor}</p>
        <p>${Carro.VelocMax}</p>
        <p>${Carro.VelocMin}</p>
        <input id="AcelerarInput" type="number">
        <button id="AcelerarBtn" type="button" onclick"${Carro.Acelerar}">Acelerar</button>
        </div>
    `
    document.querySelector("#AcelerarBtn").addEventListener("click", Carro.Acelerar)
    
}