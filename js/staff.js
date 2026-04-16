if (localStorage.getItem("staffLogged") !== "yes") {
  location.href = "staff.html";
}

function getCustomers() {
  return JSON.parse(localStorage.getItem("customers") || "[]");
}

function saveCustomers(data) {
  localStorage.setItem("customers", JSON.stringify(data));
}

function addPoint(phone){
  const customers = JSON.parse(localStorage.getItem("customers")) || {};
  const customer = customers[phone];

  if(!customer){
    alert("الزبون غير مسجل");
    return;
  }

  customer.points += 1;
  customer.history.push({
    type:"add",
    date: new Date().toLocaleDateString("ar-SA")
  });

  localStorage.setItem("customers", JSON.stringify(customers));
}
function redeem(phone){
  const customers = JSON.parse(localStorage.getItem("customers")) || {};
  const customer = customers[phone];

  if(customer.points < 5){
    alert("غير مستحق للمكافأة");
    return;
  }

  customer.points = 0;
  customer.history.push({
    type:"redeem",
    date: new Date().toLocaleDateString("ar-SA")
  });

  localStorage.setItem("customers", JSON.stringify(customers));
}

function render() {
  const table = document.getElementById("tableBody");
  table.innerHTML = "";

  const customers = getCustomers();

  customers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${c.phone}</td>
      <td>${c.points}</td>
      <td>${c.points >= 5 ? "Yes" : "No"}</td>
      <td>${c.date}</td>
    `;
    table.appendChild(tr);
  });
}

render();
