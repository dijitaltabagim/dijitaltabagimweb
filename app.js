// =============================================
// Dijital Tabağım — Global JS
// Dil değişimi + navbar + genel yardımcılar
// =============================================

/* ---- DİL SİSTEMİ ---- */
let currentLang = localStorage.getItem('dt_lang') || 'tr';

function applyLang() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-tr]').forEach(el => {
    el.textContent = currentLang === 'en' ? el.dataset.en : el.dataset.tr;
  });
  document.querySelectorAll('[data-tr-ph]').forEach(el => {
    el.placeholder = currentLang === 'en' ? el.dataset.enPh : el.dataset.trPh;
  });
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = currentLang === 'tr' ? 'EN' : 'TR';
}

function toggleLang() {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  localStorage.setItem('dt_lang', currentLang);
  applyLang();
  document.dispatchEvent(new Event('langchange')); // sayfalar dinamik içeriği yeniden çizer
}

/* Dinamik metin: t('Türkçe', 'English') */
function t(tr, en) { return currentLang === 'en' ? en : tr; }
/* Veri alanı: varsa obj.key_en kullanılır, yoksa obj.key (Supabase'e *_en kolonları eklenirse otomatik çalışır) */
function L(obj, key) { return (currentLang === 'en' && obj[key + '_en']) || obj[key]; }
/* Tarih, dile göre */
function fmtDate(d) { return new Date(d).toLocaleDateString(currentLang === 'en' ? 'en-GB' : 'tr-TR'); }

document.addEventListener('DOMContentLoaded', () => {
  applyLang();

  // Navbar scroll efekti
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
  });
});

/* ---- HAMBURGER MENU ---- */
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const ham   = document.getElementById('hamburger');
  if (!links) return;
  links.classList.toggle('open');
  ham.classList.toggle('open');
}

/* ---- SUPABASE AUTH HELPERS ---- */
async function getUser() {
  try {
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user;
  } catch { return null; }
}

async function signOut() {
  await supabaseClient.auth.signOut();
  window.location.href = 'giris.html';
}

/* ---- TOAST ---- */
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = `alert alert-${type}`;
  t.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;min-width:280px;box-shadow:0 8px 24px rgba(0,0,0,.15);animation:slideIn .3s ease';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}
