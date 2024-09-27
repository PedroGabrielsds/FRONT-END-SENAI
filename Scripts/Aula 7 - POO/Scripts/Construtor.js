var Clientes = []


class Cliente{
    constructor(Nconta, Nome, CPF, Email, Saldo, Credito){
        this.Nome = Nome;
        this.Nconta = Nconta;
        this.CPF = CPF;
        this.Email = Email;
        this.Saldo = 0;
        this.Credito = Credito;
        this.FazerCompra - function(Valor){}
        this.Transferir - function(Valor, cliente){}
        this.Receber - function(Valor, cliente){}


    }

}

Clientes.push(new Cliente(`9999`, `Pitter`, `999.999.999-99`, `Pitter@gmail.com`, 0, 2000))
console.log(Clientes)