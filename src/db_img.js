// название трека артист
const artistTitles = `Save your tears
Follow You
Dirt Femme
Another Love
Born to Die
Hello
The weeknd
Imagine Dragons
How Long
Tom Odell
Lana Del Rey
Adele
Can't Pretend
Young and Beautiful
Someone Like You
Natural
laugh now cry later
Frozen
Tom Odell
Lana Del Rey
Adele
Imagine Dragons
Drake
Madonna`;


export function createList() {
    const res = []
    const info = {
        title: '',
        src: '',
        artist: ''
    }

    artistTitles.split('\n').forEach((elem, i) => {
        if ((i + 1) % 2 === 0) {
            info.artist = elem;
            info.src = `../img/photo${i + 1}`
            res.push(info)
        } else {
            info.title = elem
        }
    })

    return res
}