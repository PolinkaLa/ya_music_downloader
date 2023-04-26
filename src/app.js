const CONTROL_LOCATION = "player-controls__seq-controls"
console.log('test')
// const controls = document.getElementsByClassName(CONTROL_LOCATION)
const controls = document.getElementsByClassName("player-controls__seq-controls")
const span = document.createElement("div")
span.className = "d-icon deco-icon d-icon_share"
span.style = "transform: rotate(180deg); margin: 6px;"
span.id = 'download_track_btn'
span.title = 'Скачать трек'
const div = document.createElement("div")
div.className = "player-controls__btn deco-player-controls__button"
controls[0].appendChild(div).appendChild(span)