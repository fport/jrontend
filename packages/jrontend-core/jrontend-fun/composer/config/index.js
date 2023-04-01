const fs = require('fs')
const filePath = './webpack.dev.js'

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log(data.devConfig)
})
