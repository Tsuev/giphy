import CONFIG from './config.js';

function createURL(endpoint, limit, query) {
  return `${CONFIG.BASE_URL}${endpoint}?api_key=${CONFIG.API_KEY}&limit=${limit}&${query ? `q=${query}` : ''}`
}

export {
  createURL
}