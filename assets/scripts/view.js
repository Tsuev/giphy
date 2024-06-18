import { getTrendingGifs, serchGifs } from './services.js'
import { gifCard, toast } from './models.js'
import { container, body } from './ui.js'

async function clearContainer() {
  container.innerHTML = ''
}

async function renderErrorToast(message) {
  body.innerHTML = toast(message)
}

async function renderGif() {
  const gifs = await getTrendingGifs();
  await clearContainer();
  gifs.forEach(gif => container.innerHTML += gifCard(gif));
}

async function renderSearchGifs(request) {
  if(request.length > 3) {
    const gifs = await serchGifs(request);
    await clearContainer();
    gifs.forEach(gif => container.innerHTML += gifCard(gif))
  }

  if(request.length === 0) renderGif()
}

export {
  renderGif,
  clearContainer,
  renderSearchGifs,
  renderErrorToast
}