const c1 = new Conta('1', 100);
const c2 = new Conta('2');
console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();
const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());
const joao = new Pessoa('João', 3, new Date('10/02/2019'));
const joaquim = new PessoaFisica('Joaquim', 30, new Date('10/02/1992'), '12345678987');
const jazias = new PessoaJuridica('Jazias', 38, new Date('10/02/1984'), '12345678990');
console.log(joao.toString());
console.log(joaquim.toString());
console.log(jazias.toString());
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
