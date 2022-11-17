const fs = require('fs')
const path = require('path')

const audioDir = path.resolve(__dirname, 'assets/audio')

fs.readdir(audioDir, (err, files) => {
    if(err) throw new Error('No such file')
    const res = []
    files.forEach(file => {
        let [artist, title] = file.split('-')
        title = title.split('.')[0]
        const artistWithTitle = `${artist.trim()}_${title.trim()}`
        const str = `import ${artistWithTitle} from '/../audio/${file}'`
        res.push(str)
    })
    console.log(res);
})