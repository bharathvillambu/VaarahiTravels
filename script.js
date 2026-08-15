const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

if (tabs.length && panels.length) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((panel) => {
        panel.classList.toggle('active', panel.id === target);
      });
    });
  });
}
