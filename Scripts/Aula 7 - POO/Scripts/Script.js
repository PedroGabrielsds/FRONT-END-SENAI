
// Criando Objetos - POO

class cliente{
    Nconta;
    Nome;
    CPF;
    Email;
    Saldo;
    Credito;
    FazerCompra(valor){
        if(this.Saldo >= valor){
            this.Saldo = this.Saldo - valor;
            return"Compra efetuada com sucesso!";
        }
        else{
            return"Saldo não suficiente!";
        }
    }
    
    Transferir(valor, cliente){
        if(this.Saldo >= valor){
            this.Saldo = this.Saldo + valor;
            return `O valor de R$ ${valor} foi tranferido para o usuario $(cliente)`;
        }
        else{
            return `A transferencia não pode ser efetuada! Saldo insuficiente!`;
        }   
    }

    Receber(valor, cliente){
        this.Saldo = this.Saldo + valor;
        return `O valor R$ ${valor} foi recebido do usuario ${cliente}`;

    }
}

var cliente1 = new cliente();
console.log(cliente1);
cliente1.Nome = "Pitter";
cliente1.CPF = "999.999.999-99";
cliente1.Nconta = "001";
cliente1.Email = "umemailmaneirodemais@gmail.com";
cliente1.Saldo = 0;
cliente1.Credito = 2000;


// console.log(cliente1.FazerCompra(2000))
// alert(cliente1.FazerCompra(2000))