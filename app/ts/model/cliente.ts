/*Desenvolver a classe Cliente, contendo como atributos: 
nome, cpf e uma conta (apenas para simplificar), e seus respectivos métodos get e set*/

class Cliente{
    private _nome : String;
    private _cpf : String;
    private _conta: Conta;

    constructor(nome:String, cpf: String, conta: Conta){
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;

    }

    get nome () {
        return this._nome;
    }

    set nome (nome: String){
        this._nome = nome;
    }

    get cpf () {
        return this._cpf;
    }

    set cpf (cpf: String){
        this._cpf = cpf;
    }

    get conta (){
        return this._conta
    }

    set conta (conta: Conta){
        this._conta = conta;
    }
}