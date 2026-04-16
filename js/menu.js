const menuItems = [
  // 🍔 Burgers
  {
    ar: "ترافل برجر",
    en: "Truffle Burger",
    price: 29,
    kcal: 820
  },
  {
    ar: "دبل سماش",
    en: "Double Smash",
    price: 29,
    kcal: 780
  },
  {
    ar: "بيكون برجر",
    en: "Bacon Burger",
    price: 29,
    kcal: 850
  },
  {
    ar: "سجنتشر برجر",
    en: "Signature Burger",
    price: 29,
    kcal: 800
  },
  {
    ar: "ميبل برجر دجاج",
    en: "Maple Chicken Burger",
    price: 22,
    kcal: 720
  },
  {
    ar: "كلاسيك برجر دجاج",
    en: "Classic Chicken Burger",
    price: 22,
    kcal: 690
  },

  // 🍟 Fries & Salad
  {
    ar: "فيلي تشيز ستيك",
    en: "Philly Cheesesteak",
    price: 24,
    kcal: 650
  },
  {
    ar: "تاكو ستربس دجاج",
    en: "Chicken Strips Tacos",
    price: 15,
    kcal: 420
  },
  {
    ar: "ستربس دجاج",
    en: "Chicken Strips",
    price: 18,
    kcal: 560
  },
  {
    ar: "سيزر سلط",
    en: "Caesar Salad",
    price: 19,
    kcal: 310
  },
  {
    ar: "بطاطس ترافل",
    en: "Truffle Potatoes",
    price: 19,
    kcal: 480
  },
  {
    ar: "بطاطس ديناميت",
    en: "Potato Dynamite",
    price: 19,
    kcal: 520
  },
  {
    ar: "بطاطس كلاسيك",
    en: "Classic Fries",
    price: 7,
    kcal: 350
  }
];

function renderMenu(lang = "ar") {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";

 card.innerHTML = `
  <div class="menu-image">
    <span>صورة</span>
  </div>

  <h4>${item[lang]}</h4>
  <p>S.R ${item.price}</p>
  <small>${item.kcal} kcal</small>
`;

    menu.appendChild(card);
  });
}

// أول تحميل
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "ar";
  renderMenu(lang);
});