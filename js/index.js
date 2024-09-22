function getElementValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}
function getElementsById(id) {
  const elementById = document.getElementById(id);
  return elementById;
}
function getElementInnerTextById(id) {
  const elementInnerText = parseFloat(document.getElementById(id).innerText);
  return elementInnerText;
}

function allInputField() {
  const income = getElementValueById("income");
  const software = getElementValueById("software");
  const courses = getElementValueById("courses");
  const internet = getElementValueById("internet");
  const expenses = getElementsById("total-expenses");
  const balance = getElementsById("balance");
  const savings = getElementsById("savings-amount");
  const remainingBalance = getElementsById("remaining-balance");
  return {
    income,
    software,
    courses,
    internet,
    expenses,
    balance,
    savings,
    remainingBalance,
  };
}

document.getElementById("calculate").addEventListener("click", function () {
  const {
    income,
    software,
    courses,
    internet,
    expenses,
    balance,
    savings,
    remainingBalance,
  } = allInputField();

  const totalExpenses = internet + courses + internet;
  expenses.innerText = totalExpenses;
  const calculate = income - totalExpenses;
  balance.innerText = calculate;
  document.getElementById("results").classList.remove("hidden");
});

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const {
      income,
      software,
      courses,
      internet,
      expenses,
      balance,
      savings,
      remainingBalance,
    } = allInputField();
    console.log(getElementInnerTextById("balance"));
    const currentBalance = getElementInnerTextById("balance");
    const savingField = getElementValueById("savings");
    console.log(getElementValueById("savings"));
    const totalSavings = (currentBalance * savingField) / 100;
    const remainBalance = currentBalance - totalSavings;
    savings.innerText = totalSavings;
    remainingBalance.innerText = remainBalance;
  });
