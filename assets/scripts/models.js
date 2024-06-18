function gifCard({images: { fixed_height: { url }}}) {
  return `
      <div class="gif">
        <a href="${url}" class="gif" target="_blank">
          <img width="300" src="${url}">
        <a>
      </div>
    `
}

function toast(message) {
  return `
    <div class="toast">
      <div class="toast__message">Ошибка: ${message}</div>
      <div class="toast__prompt">Нажмите на сообщение, чтобы перезагрузить страницу</div>
    </div>
  `
}

export {
  gifCard,
  toast
}