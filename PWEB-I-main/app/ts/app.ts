let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);



// 3. Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir clientes dentro, listar,
//  remover e pesquisar (pode fazer o código diretamente no app.ts e imprimir no console o resultado)

let cl1 = new Cliente("Gabriel", "111.111.111-11", c1);

let objCliente = new Clientes;

//insere
objCliente.inserir(cl1);

//lista
console.log(objCliente.listar());

//busca
console.log(objCliente.pesquisar("111.111.111-11"));

//remover
objCliente.remover("111.111.11-11");
console.log(objCliente.listar());



