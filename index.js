class Cliente{
    nome;
    cpf;
}

class contaCorrente{
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Jonas" ;
cliente1.cpf = 458665541;

const cliente2 = new Cliente();
cliente2.nome = "Daniele";
cliente2.cpf = 572753753435;

const contaCorrenteJonas = new contaCorrente();
contaCorrenteJonas.saldo = 0;
contaCorrenteJonas.agencia = 1001;
console.log(contaCorrenteJonas.saldo);
contaCorrenteJonas.saldo = 100;
console.log(contaCorrenteJonas.saldo);



console.log(cliente1);
console.log(cliente2);