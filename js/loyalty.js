function getCustomers() {
  return JSON.parse(localStorage.getItem("customers")) || {};
}

function saveCustomers(customers) {
  localStorage.setItem("customers", JSON.stringify(customers));
}

function showPoints() {
  const phone = document.getElementById("phoneInput").value.trim();
  if (!phone) {
    alert("أدخل رقم الجوال");
    return;
  }

  let customers = getCustomers();

  // لو مو موجود = ننشئه بنقاط 0
  if (!customers[phone]) {
    customers[phone] = {
      points: 0,
      lastUpdate: new Date().toISOString().split("T")[0]
    };
    saveCustomers(customers);
  }

  alert(`نقاطك الحالية: ${customers[phone].points}`);
}