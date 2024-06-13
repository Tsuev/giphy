import { serchGifs } from './services.js'
import { gifCard} from './models.js'
import { renderGif } from './view.js';

const input = document.querySelector('input');
const container = document.querySelector('.gifs');

input.addEventListener('input', async (e) => {
    if(e.target.value.length > 3) {
        const gifs = await serchGifs(e.target.value);
        container.innerHTML = ''
        gifs.forEach(gif => container.innerHTML += gifCard(gif))
    }
    

    if(e.target.value.length === 0) {
        renderGif()
    }
})


