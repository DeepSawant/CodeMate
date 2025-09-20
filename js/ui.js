// Small UI helpers: mobile menu toggle
(function(){
  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(() => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.topbar .nav');
    if(toggle && nav){
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
      });
    }
  });
})();
