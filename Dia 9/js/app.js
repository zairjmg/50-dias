const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const buttons = document.getElementById('buttons')

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = sound

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    buttons.appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}
