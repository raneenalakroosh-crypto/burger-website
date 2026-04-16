// Mobile menu toggles
document.addEventListener('DOMContentLoaded', function () {
  // set years in footers
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  // toggle for header 1
  const toggle1 = document.getElementById('mobile-toggle');
  const nav1 = document.getElementById('nav');
  if (toggle1) toggle1.addEventListener('click', () => {
    nav1.style.display = nav1.style.display === 'flex' ? 'none' : 'flex';
    nav1.style.flexDirection = 'column';
    nav1.style.gap = '12px';
    nav1.style.padding = '12px';
    nav1.style.background = '#fff';
    nav1.style.position = 'absolute';
    nav1.style.right = '16px';
    nav1.style.top = '68px';
    nav1.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
  });

  // other toggles (if present)
  [['mobile-toggle-2','nav2'],['mobile-toggle-3','nav'],['mobile-toggle-4','nav']].forEach(pair=>{
    const t = document.getElementById(pair[0]), n = document.getElementById(pair[1]);
    if (t && n) t.addEventListener('click', () => {
      n.style.display = n.style.display === 'flex' ? 'none' : 'flex';
      n.style.flexDirection = 'column';
      n.style.gap = '12px';
      n.style.padding = '12px';
      n.style.background = '#fff';
      n.style.position = 'absolute';
      n.style.right = '16px';
      n.style.top = '68px';
      n.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
    });
  });
});

// simple contact form handler (demo)
function submitForm(e) {
  e.preventDefault();
  alert('شكرًا! تم إرسال رسالتك (هذا مجرد مثال — ربط السيرفر مطلوب لإرسال فعلي).');
  return false;
}
document.getElementById('show-second-image').addEventListener('click', function(e) {
  e.preventDefault(); // منع الانتقال الافتراضي للروابط
  const secondImage = document.getElementById('second-image');
  secondImage.classList.add('show');
  // تمرير الصفحة إلى الصورة بعد ظهورها
  secondImage.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
// Toggle Mobile Menu
const mobileToggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('nav');

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
