var BtnTema = document.querySelector("#BtnTema");

BtnTema.addEventListener('click', TrocarTema);

function TrocarTema(){
    let body = document.querySelector('body');

    // hasAttributte = verifica se tem atributo
    // getAttribute = recebe o valor do atributo
    // setAttribute = seta um novo atributo ou substitui
    if(body.getAttribute("data-bs-theme") == "dark"){
        body.setAttribute("data-bs-theme","light");
        Imgbtn.setAttribute("src", "/Bootstrap/Aula 1 - BootStrap/images/icons/moon-Stars-fill.svg" )
        BtnTema.classlist.replace("btn-outline-dark", "btn-outline-light");
        

    }
    else{
        body.setAttribute("data-bs-theme","dark");
        Imgbtn.setAttribute("src", "/Bootstrap/Aula 1 - BootStrap/images/icons/brightness-high-fill.svg")
        BtnTema.classlist.replace("btn-outline-light", "btn-outline-dark")
    }
}