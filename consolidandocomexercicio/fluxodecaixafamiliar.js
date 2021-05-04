/* ### Sistema de gastos familiar

    Crie um obejto que possuirpa 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []

    Agora, crie uma função que irpa calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [8200, 9200, 250.54, 360.45],
    expenses: [320.34, 567.87, 176.87, 1450.00, 9000]
}

function sum(array) {
    let total =0

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const istOk = total >= 0

    let balanceText = "negativo"
    if (istOk) {
        balanceText = "positivo"
    }
    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}


calculateBalance()