const audio = new Audio()
const pauseBtn = document.querySelector('')

const playMusic = url => {
    audio.src = url;
    audio.play() // запустить трек
}

pauseBtn.addEventListener('click', ()=>{
    playMusic()
})