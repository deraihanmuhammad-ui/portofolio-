// Simple interactions: theme toggle, mobile nav, contact form demo
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const yearEl = document.getElementById('year');

yearEl.innerText = new Date().getFullYear();

themeToggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-theme');
  // swap icon
  const i = themeToggle.querySelector('i');
  if (i) i.className = document.documentElement.classList.contains('light-theme') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});

// mobile nav
navToggle?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// smooth scroll + active nav on scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href === '#') return;
    const target = document.querySelector(href);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav
      if(window.innerWidth < 880) nav.style.display = 'none';
    }
  });
});

// contact form demo (prevent real submit)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = contactForm.name.value.trim();
    alert(`Thanks ${name || 'there'} — pesan lo udah dikirim (demo). Ganti handler di script.js kalau mau konek ke backend.`);
    contactForm.reset();
  });
}
const texts = [
  "Network Administrator ",
  "Web Developer ",
  "Network Administrator Web Developer"
];

const el = document.getElementById("typewriter");

let idx = 0;       // index teks
let char = 0;      // index huruf
let deleting = false;
let done = false;

function type() {
  if (done) return;

  let current = texts[idx];

  if (!deleting) {
    // proses ngetik
    el.textContent = current.substring(0, char + 1);
    char++;

    if (char === current.length) {
      if (idx === texts.length - 1) {
        // teks terakhir → berhenti
        done = true;
        return;
      }
      setTimeout(() => deleting = true, ); // jeda sebelum hapus
    }
  } else {
    // proses hapus
    el.textContent = current.substring(0, char - 1);
    char--;

    if (char === 0) {
      deleting = false;
      idx++; // lanjut ke teks berikutnya
    }
  }

  setTimeout(type, deleting ? 80: 80); // speed ketik/hapus
}

type();

/* =============== LINGKARAN ANIMASI =============== */
const circles = document.querySelectorAll(".outer-circle");

circles.forEach(circle => {
    let percent = circle.getAttribute("data-percent");
    let degree = percent * 3.6; // ubah % → derajat

    let current = 0;  
    let speed = 30;  // makin kecil makin cepat

    let anim = setInterval(() => {
        current++;

        let smallBlue = Math.min(current * 3.6, degree); 
        // warna biru muda gue kecilin area-nya

        circle.style.background = `
            conic-gradient(
                #4dc2ff ${smallBlue}deg,
                #1b1b1b ${smallBlue}deg
            )
        `;

        if (current >= percent) {
            clearInterval(anim);
        }
    }, speed);
});


/* =============== BAR ANIMASI =============== */
const fills = document.querySelectorAll(".fill");

fills.forEach(fill => {
    let target = fill.getAttribute("data-fill");

    setTimeout(() => {
        fill.style.width = target + "%";
    }, 200);
});