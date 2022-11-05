const audio = new Audio()
const tracksCard = document.getElementsByClassName('track')
console.log('tracksCard: ', tracksCard);
const pauseBtn = document.querySelector('.player__icon_pause')
const stopBtn = document.querySelector('player__controller_stop')

const playMusic = event => {
    audio.src = event.currentTarget.dataset.track;
    audio.play()
}

for (let i = 0; i < tracksCard.length; i++) {
    const card = tracksCard[i];
    card.addEventListener('click', playMusic)
}

pauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
        pauseBtn.classList.remove('player__icon_play')
    } else {
        audio.pause()
        pauseBtn.classList.add('player__icon_pause')
    }
})