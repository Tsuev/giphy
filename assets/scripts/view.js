import { getTrendingGifs } from './services.js'
import { gifCard } from './models.js'

const container = document.querySelector('.gifs')

async function renderGif() {
  const gifs = await getTrendingGifs();
  gifs.forEach(gif => container.innerHTML += gifCard(gif));
}

export {
  renderGif
}