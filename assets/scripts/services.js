import { createURL } from './helpers.js';
import { renderErrorToast } from './view.js';

async function getTrendingGifs(){
  try {
    const response = await fetch(createURL('/search', 30, 'Frontend'));
    const { data } = await response.json();
    return data 
  } catch (error) {
    renderErrorToast(error.message)
  }
}

async function serchGifs(request){
  try {
    const response = await fetch(createURL('/search', 10, request));
    const { data } = await response.json(); 
    return data
  } catch (error) {
    renderErrorToast(error.message)
  }
}

export {
  getTrendingGifs,
  serchGifs
}

