const URL = 'https://api.giphy.com/v1/gifs'
const KEY = '6yb0lbVAwM4Nm2wmvfEu5C8MUL6yXIwD';

// https://api.giphy.com/v1/gifs/search?api_key=6yb0lbVAwM4Nm2wmvfEu5C8MUL6yXIwD&q=ronaldo&limit=10

async function getTrendingGifs(){
    const response = await fetch(`${URL}/trending?api_key=${KEY}&limit=10`);
    const { data } = await response.json();
    return data 
}

async function serchGifs(request){
    const response = await fetch(`${URL}/search?api_key=${KEY}&q=${request}&limit=10`)
    const { data } = await response.json(); 
    return data
}

export {
  getTrendingGifs,
  serchGifs
}

