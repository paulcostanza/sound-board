const sounds = ['applause', 'yes', 'boo', 'woo', 'trombone', 'gasp', 'snare', 'tada', 'ok', 'victory', 'dog', 'ding', 'wrong', 'air', 'no', 'excellent', 'guitar', 'retro', 'engage', 'comedy', 'hello', 'china', 'fart']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    const span = document.createElement('span')

    // for pushing button effect
    btn.classList.add('push')
    btn.setAttribute('role', 'button')

    btn.appendChild(span)
    span.classList.add('test')

    span.innerText = sound

    // JavaScript API for audio has a method of play
    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        // The API does not have a stop, so we must pause and reset
        song.pause()
        song.currentTime = 0;
    })
}
