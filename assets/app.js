// Active nav highlight
const path = location.pathname.replace(/\/+$/, '').split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});




// Lightbox
const lightbox = document.querySelector('.lightbox');
if (lightbox){
  document.addEventListener('click', e=>{
    const t = e.target.closest('[data-lightbox-src]');
    if (t){
      lightbox.querySelector('img').src = t.dataset.lightboxSrc;
      lightbox.classList.add('show');
    }
    if (e.target.matches('.lightbox, .lightbox img')) { lightbox.classList.remove('show'); }
  });
}

// Tabs (Conference schedule)
document.querySelectorAll('.tabs').forEach(group=>{
  const tabs = group.querySelectorAll('.tab');
  const panels = group.parentElement.querySelectorAll('[data-tab-panel]');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      const id = tab.dataset.tab;
      tabs.forEach(t=>t.classList.toggle('active', t===tab));
      panels.forEach(p=>p.style.display = p.dataset.tabPanel===id ? 'block' : 'none');
    });
  });
  if (tabs[0]) tabs[0].click();
});

// Scroll buttons
document.querySelectorAll('[data-scroll-to]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const el = document.getElementById(btn.dataset.scrollTo);
    if (el) el.scrollIntoView({behavior:'smooth'});
  });
});

// Download demo
document.querySelectorAll('[data-fake-download]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const original = btn.textContent;
    btn.textContent = 'Preparing...';
    setTimeout(()=>{ btn.textContent='Downloading...'; }, 800);
    setTimeout(()=>{ btn.textContent = original; alert('Connect a real file URL for downloads.'); }, 1600);
  });
});
