// Global declared function
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

// Global declared function for all value
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

// Calculate button click function
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

  // History Added
  const history = document.createElement("div");

  history.classList.add("border-l-2", "p-2", "border-purple-600", "rounded-xl");
  history.innerHTML = `
  <p class="text-gray-500 text-sm ">Time: ${new Date().toLocaleTimeString()}</p>
  <p class="text-gray-500 text-sm ">Date:  ${new Date().toLocaleDateString()}</p>
  <p class="text-gray-500 text-sm ">Income: ${income.toFixed(2)}</p>
  <p class="text-gray-500 text-sm ">Expenses: ${totalExpenses.toFixed(2)}</p>
  <p class="text-gray-500 text-sm ">Balance: ${calculate.toFixed(2)}</p>

`;

  // Append the new history element to the history list
  document.getElementById("history-list").appendChild(history);
});

// Calculate savings button click function

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

// Assistant button click function
document.getElementById("assistant-tab").addEventListener("click", function () {
  getElementsById("assistant-tab").classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  getElementsById("history-tab").classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  getElementsById("expense-form").classList.remove("hidden");
  getElementsById("history-section").classList.add("hidden");
});

// History button click function
document.getElementById("history-tab").addEventListener("click", function () {
  getElementsById("history-tab").classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  getElementsById("assistant-tab").classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  getElementsById("expense-form").classList.add("hidden");
  getElementsById("history-section").classList.remove("hidden");
});
