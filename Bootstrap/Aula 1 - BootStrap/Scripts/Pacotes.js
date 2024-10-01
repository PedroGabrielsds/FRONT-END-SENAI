class Pacotes{
    constructor(SrcImg, Local, Descriçao, Preço, Pacotes){
    this.SrcImg = SrcImg;
    this.Local = Local;
    this.Descriçao = Descriçao;
    this.Preço = Preço;
    this.Pacotes = Pacotes;
    }
}

var TodosPacotes = []
TodosPacotes.push(new Pacotes("#", "Nordeste", "Melhor comida brasileira", 350, ["Pacote 3 dias", "Pacote 5 dias"] ))

TodosPacotes.forEach(CadaPacote => {
    document.getElementById("Catalogo").innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Eiffel_Tower_Marsfeld_Paris.jpg/1200px-Eiffel_Tower_Marsfeld_Paris.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${CadaPacote.Local}</h5>
            <p class="card-text">${CadaPacote.Descriçao}</p>
            <p class="card-text">${CadaPacote.Preço}</p>
            <p class="card-text">${CadaPacote.Pacotes}</p>
            <a href="#" class="btn btn-primary">Comprar Pacote</a>
        </div>
    </div>
    
    `
})