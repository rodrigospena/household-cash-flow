/*
DESAFIO 02 - FLUXO DE CAIXA FAMILIAR
Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

Desafio:

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/


// List & History
let balanceList = {
    incomes: [],
    expenses: []
}
let balanceHistory = []

// Function - Sum
function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }   

    return total  
}

// Function - Entry/Push
function balanceEntry(entry) {
    balanceHistory.push(entry)
    if (entry >= 0) {
        balanceList.incomes.push(entry)
    } else {
        balanceList.expenses.push(entry)
    }
}

// Function - Total
function calculateBalance() {
    let balanceTotal = sum(balanceList.incomes) + sum(balanceList.expenses)
    
    if (balanceTotal > 0) {
        console.log(`Your balance is positive. You have $${balanceTotal.toFixed(2)}.`)
    } else if (balanceTotal == 0) {
        console.log(`Your balance is empty. You have $${balanceTotal.toFixed(2)}.`)
    } else {
        console.log(`Your balance is negative. You have $${balanceTotal.toFixed(2)}.`)
    }
    console.log(`History: ${balanceHistory}`)
}   

// Entry
balanceEntry(-55)
balanceEntry(-200)
balanceEntry(25)
balanceEntry(-50)
balanceEntry(-100)
balanceEntry(500)

// Logs
calculateBalance()
console.log(balanceList);