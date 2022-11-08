// название трека артист
const artistTitles = `Save your tears
The Weeknd
Follow You
Imagine Dragons
Dirt Femme
How Long
Another Love
Tom Odell
Born to Die
Lana Del Rey
Hello
Adele
Can't Pretend
Tom Odell
Young and Beautiful
Lana Del Rey
Someone Like You
Adele
Natural
Imagine Dragons
Laugh now cry later
Drake
Frozen
Madonna`;


export function createList() {
    const res = []
    let info = {}

    artistTitles.split('\n').forEach((elem, i) => {
        if ((i + 1) % 2 === 0) {
            info.artist = elem;
            info.src = `photo${i}`;
            info.id = `${i+1}`
            res.push(info);
            info = null;
        } else {
            info = {}
            info.title = elem
        }
    })

    return res
}