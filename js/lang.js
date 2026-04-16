<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>لوحة الكاشير</title>
<style>
body { font-family: Arial, sans-serif; background:#f0f0f0; margin:0; padding:20px; }
.dark { background:#222; color:#fff; }
.top-bar { margin-bottom:20px; }
.top-bar button { margin-right:5px; padding:5px 10px; cursor:pointer; }
.card { background:#fff; padding:20px; margin-bottom:20px; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.2); }
.card h2,h3 { margin-top:0; }
.card input { padding:8px; width:200px; margin-right:10px; }
.card button { padding:8px 12px; margin-right:5px; cursor:pointer; }
table { width:100%; border-collapse: collapse; margin-top:10px; }
th, td { border:1px solid #ccc; padding:8px; text-align:center; }
th { background:#eee; }
</style>
</head>

<body class="dark">

<div class="top-bar">
  <button onclick="setLang('ar')">AR</button>
  <button onclick="setLang('en')">EN</button>
</div>

<div class="card">
  <h2 id="title">لوحة الكاشير</h2>
  <input id="phone" placeholder="رقم الجوال">
  <button id="addCustomerBtn" onclick="addCustomer()">➕ إضافة زبون</button>
  <button id="addPointBtn" onclick="addPoint()">⭐ إضافة نقطة</button>
  <button id="rewardBtn" onclick="giveReward()">🎁 صرف المكافأة</button>
</div>

<div class="card">
  <h3 id="listTitle">قائمة الزباين</h3>
  <table>
    <thead>
      <tr>
        <th id="thPhone">الجوال</th>
        <th id="thPoints">النقاط</th>
        <th id="thReward">المكافأة</th>
        <th id="thLast">آخر تحديث</th>
      </tr>
    </thead>
    <tbody id="customersTable"></tbody>
  </table>
</div>

<script>
let customers = JSON.parse(localStorage.getItem("customers") || "{}");
let currentLang = localStorage.getItem("lang") || "ar";

// حفظ البيانات وإعادة عرض الجدول
function save(){
  localStorage.setItem("customers", JSON.stringify(customers));
  render();
}

// تاريخ اليوم YYYY-MM-DD
function today(){ return new Date().toISOString().split("T")[0]; }

// قراءة الرقم مع التحقق
function phoneValue(){
  const val = document.getElementById("phone").value.trim();
  if(!val){
    alert(currentLang==="ar"?"ادخل رقم الجوال":"Enter phone number");
    return null;
  }
  return val;
}

// إضافة زبون
function addCustomer(){
  const phone = phoneValue();
  if(!phone) return;
  if(!customers[phone]){
    customers[phone] = {points:0,rewardTaken:false,lastUpdate:today()};
    save();
  } else alertText("exists");
}

// إضافة نقطة
function addPoint(){
  const phone = phoneValue();
  if(!phone) return;
  if(customers[phone]){
    customers[phone].points++;
    customers[phone].lastUpdate = today();
    save();
  } else alertText("notFound");
}

// صرف المكافأة
function giveReward(){
  const phone = phoneValue();
  if(!phone) return;
  if(customers[phone] && customers[phone].points >= 5){
    customers[phone].points = 0;
    customers[phone].rewardTaken = true;
    customers[phone].lastUpdate = today();
    save();
  } else alertText("notEligible");
}

// عرض الجدول
function render(){
  const table = document.getElementById("customersTable");
  table.innerHTML = "";
  Object.keys(customers).forEach(p=>{
    const c = customers[p];
    table.innerHTML += `
      <tr>
        <td>${p}</td>
        <td>${c.points}</td>
        <td>${c.points>=5 ? (currentLang==="ar"?"🎁 نعم":"🎁 Yes") : (currentLang==="ar"?"❌ لا":"❌ No")}</td>
        <td>${c.lastUpdate}</td>
      </tr>
    `;
  });
}

// رسائل التنبيه
function alertText(type){
  const messages = {
    ar: {
      exists: "الزبون موجود مسبقًا ✅",
      notFound: "الزبون غير موجود ❌",
      notEligible: "غير مستحق للمكافأة بعد ⚠️"
    },
    en: {
      exists: "Customer already exists ✅",
      notFound: "Customer not found ❌",
      notEligible: "Not eligible for reward yet ⚠️"
    }
  };
  alert(messages[currentLang][type]);
}

// تبديل اللغة
function setLang(l){
  currentLang = l;
  localStorage.setItem("lang", l);
  document.documentElement.lang = l;
  document.documentElement.dir = l==="ar"?"rtl":"ltr";

  if(l==="ar"){
    document.getElementById("title").innerText = "لوحة الكاشير";
    document.getElementById("phone").placeholder = "رقم الجوال";
    document.getElementById("addCustomerBtn").innerText = "➕ إضافة زبون";
    document.getElementById("addPointBtn").innerText = "⭐ إضافة نقطة";
    document.getElementById("rewardBtn").innerText = "🎁 صرف المكافأة";
    document.getElementById("listTitle").innerText = "قائمة الزباين";
    document.getElementById("thPhone").innerText = "الجوال";
    document.getElementById("thPoints").innerText = "النقاط";
    document.getElementById("thReward").innerText = "المكافأة";
    document.getElementById("thLast").innerText = "آخر تحديث";
  } else {
    document.getElementById("title").innerText = "Cashier Dashboard";
    document.getElementById("phone").placeholder = "Phone Number";
    document.getElementById("addCustomerBtn").innerText = "➕ Add Customer";
    document.getElementById("addPointBtn").innerText = "⭐ Add Point";
    document.getElementById("rewardBtn").innerText = "🎁 Give Reward";
    document.getElementById("listTitle").innerText = "Customers";
    document.getElementById("thPhone").innerText = "Phone";
    document.getElementById("thPoints").innerText = "Points";
    document.getElementById("thReward").innerText = "Reward";
    document.getElementById("thLast").innerText = "Last Update";
  }

  render();
}

// تحميل اللغة السابقة وعرض الجدول
setLang(currentLang);
render();
</script>

</body>
</html>
