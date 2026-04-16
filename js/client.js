function showPoints() {
  const phoneInput = document.getElementById("phoneInput");
  const phone = phoneInput.value.trim();

  if (!phone) {
    alert("أدخل رقم الجوال");
    return;
  }

  const customer = getCustomer(phone);
  alert("نقاطك: " + customer.points);
}