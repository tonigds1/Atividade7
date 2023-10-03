let saldoInicial = 1000; // Saldo inicial da conta
let transacoes = []; // Array para armazenar histórico de transações

function depositar(valor) {
  saldoInicial += valor;
}

function sacar(valor) {
  if (saldoInicial >= valor) {
    saldoInicial -= valor;
  } else {
    alert('Saldo insuficiente para saque.');
  }
}

function verSaldo() {
  alert('Seu saldo atual é: R$' + saldoInicial.toFixed(2));
}

function verHistorico() {
  if (transacoes.length === 0) {
    alert('Nenhuma transação realizada ainda.');
  } else {
    alert('Histórico de transações:\n' + transacoes.map(transacao => transacao.tipo + ' de R$' + transacao.valor.toFixed(2) + ' em ' + transacao.data).join('\n'));
  }
}

function exibirMenu() {
  while (true) {
    const escolha = parseInt(prompt(`
Bem-vindo ao Sistema de Conta Bancária! Escolha uma opção:
1. Depositar
2. Sacar
3. Ver Saldo
4. Ver Histórico de Transações
5. Sair
`));

    switch (escolha) {
      case 1:
        const deposito = parseFloat(prompt('Digite o valor que deseja depositar:'));
        depositar(deposito);
        transacoes.push({ tipo: 'Depósito', valor: deposito, data: new Date().toLocaleString() });
        alert('Depósito realizado com sucesso. Novo saldo: R$' + saldoInicial.toFixed(2));
        break;
      case 2:
        const saque = parseFloat(prompt('Digite o valor que deseja sacar:'));
        sacar(saque);
        transacoes.push({ tipo: 'Saque', valor: saque, data: new Date().toLocaleString() });
        break;
      case 3:
        verSaldo();
        break;
      case 4:
        verHistorico();
        break;
      case 5:
        return; // Encerra o programa
      default:
        alert('Opção inválida. Tente novamente.');
    }
  }
}

exibirMenu();
