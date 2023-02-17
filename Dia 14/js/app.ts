const toggle = document.getElementById('toggle') as HTMLInputElement;
const nav = document.getElementById('nav') as HTMLElement;

toggle.addEventListener('click', () => nav.classList.toggle('active'))
