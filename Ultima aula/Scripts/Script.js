const meupromise = new Promise((resolve, reject) => {
    const Nome = "Pedro";
    if(Nome == "Pedro"){
        resolve("O nome é Pedro");
    }
    else {
        reject("O nome é inválido!!");
    }
})

 meupromise.then((data) => {
    console.log(data)

})

function sujeitoDemorado(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log("Espera concluida!")
            resolve
        },2000)
    })
}