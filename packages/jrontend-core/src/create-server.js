const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const { replaceConfig } = require('./replace-config')

const createServer = async ({ name }) => {
    const projectPath = path.join(name, 'server')
    const templatePath = path.join(
        __dirname,
        `../templates/server/express`,
    )

    fs.mkdirSync(projectPath)

    await fse.copy(templatePath, projectPath)
}

module.exports = {
    createServer,
}
