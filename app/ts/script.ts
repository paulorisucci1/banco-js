const c1 = new Conta('1', 100);
const c2 = new Conta('2', 200);
const c3 = new Conta('3', 1000);
const c4 = new Conta('4', 3300);

const cb1 = new ContaBonificada('10001', 7130);
const cb2 = new ContaBonificada('10002', 33.3);
const cb3 = new ContaBonificada('10003', 10000.50);

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

const jazias = new PessoaJuridica('Jazias', 38, new Date('10/02/1984'), '12345678988');

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

const repositorioPessoas = new RepositorioPessoas();

const jezequiel = new Cliente('Jezequiel', 31, new Date('10/02/1991'), '12345678989');
const jeremias = new Cliente('Jeremias', 27, new Date('10/02/1995'), '12345678990');
const jeronimo = new Cliente('Jeronimo', 21, new Date('10/02/2001'), '12345678991');

const disneymar = new Empresa('Disneymar', 0, new Date('11/09/2022'),  '1234567891234');
const paraSonic = new Empresa('ParaSonic', 0, new Date('11/09/2022'),  '1234567891235');
const paoDeSal = new Empresa('paoDeSal', 0, new Date('11/09/2022'),  '1234567891236');


repositorioPessoas.adicionar(jezequiel);
repositorioPessoas.adicionar(disneymar);
repositorioPessoas.adicionar(jeremias);
repositorioPessoas.adicionar(paraSonic);
repositorioPessoas.adicionar(jeronimo);
repositorioPessoas.adicionar(paoDeSal);


jezequiel.acrescentarConta(c1);
jeremias.acrescentarConta(cb1);
jeronimo.acrescentarConta(c2);

disneymar.acrescentarConta(c1);
disneymar.acrescentarConta(c2);
disneymar.acrescentarConta(c3);
disneymar.acrescentarConta(c4);
disneymar.acrescentarConta(cb1);
disneymar.acrescentarConta(cb2);
disneymar.acrescentarConta(cb3);

paraSonic.acrescentarConta(cb3);

paoDeSal.acrescentarConta(cb3);

console.log('disneymar.listar(): '+disneymar.listarContas());

console.log(`Removendo conta de disneymar: ${cb1}`)
disneymar.removerConta(cb1.numero);
console.log('disneymar.listar(): ');
console.log(disneymar.listarContas());

console.log('disneymar.pesquisarConta(): ');
console.log(disneymar.pesquisarConta(c4.numero));


for (const pessoa of repositorioPessoas.listar()) {
        console.log(pessoa.nome+":");
        console.log(pessoa.saldoTotalContas());
        console.log(pessoa.mediaSaldoContas());

}