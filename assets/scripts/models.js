function gifCard({images: { original: { url }}}) {
  return `
      <div class="gif">
        <a href="${url}" target="_blank">
          <img width="300" src="${url}">
        <a>
      </div>
    `
}

export {
  gifCard
}