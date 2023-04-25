const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');
let load = 0;

let count = setInterval(blurring, 20);
function blurring() {
  load++;

  if (load === 100) {
    clearInterval(count);
  }

  loadText.innerHTML = load + '%';
  loadText.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${(100 - load) * 0.3}px)`;
}
