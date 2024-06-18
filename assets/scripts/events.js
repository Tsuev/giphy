import { renderGif, renderSearchGifs } from './view.js';
import { input, body } from './ui.js'

async function initApp() {
  window.onload = () => renderGif();
  input.addEventListener('input', async (e) => renderSearchGifs(e.target.value))
  body.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('toast')) window.location.reload();
  });
}

export {
  initApp
}