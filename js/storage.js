function getCustomers() {
  return JSON.parse(localStorage.getItem("customers")) || {};
}

function saveCustomers(customers) {
  localStorage.setItem("customers", JSON.stringify(customers));
}

function getCustomer(phone) {
  const customers = getCustomers();

  if (!customers[phone]) {
    customers[phone] = {
      phone: phone,
      points: 0,
      history: []
    };
    saveCustomers(customers);
  }

  return customers[phone];
}