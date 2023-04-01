const glob = require('glob')
const fs = require('fs')
const path = require('path')

/*
 * @desc This function replaces the template variables in the files
 * with the values provided in the config object.
 * The template variables are defined as {{NAME}} or {{ NAME }}.
 * The function is recursive and will replace the template variables
 * in all files in the directory and subdirectories.
 * @param {string} name - The name of the directory to replace the template variables in.
 * @param {object} config - The object containing the values to replace the template variables with.
 */
const templateFile = (fileName, replacements, clientType) => {
    const fileContent = fs.readFileSync(fileName, 'utf8').toString()

    const template = Object.entries(replacements).reduce(
        (acc, [key, value]) => {
            return acc.replace(
                new RegExp(`(\{\{${key}\}\}|\{\{ ${key} \}\})`, 'g'),
                value?.toString() ?? ''
            )
        },
        fileContent
    )
    fs.writeFileSync(fileName, template)
}

const replace = (name, config) => {
    glob.sync(`${name}/**/*`).forEach((file) => {
        if (fs.lstatSync(file).isFile()) {
            templateFile(file, config)
        }
    })
}

const changeModuleFedaration = ({ name, clientName, clientType }) => {
    if (clientType === 'fragment') {
        const webpackDevServerPath = `${name}/composer/config/webpack.dev.js`
        // const test = fs.readFileSync(webpackDevServerPath, 'utf8')
        // console.log(webpackDevServerPath, 'osman test =>', test)

        fs.readFile(webpackDevServerPath, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            const remotesRegex = /remotes:(.*),/s
            const remotesMatch = data.match(remotesRegex)

            if (remotesMatch) {
                const remotesStr = remotesMatch[1].trim()
                const remotes = eval(`(${remotesStr})`)
                console.log(remotes)
            } else {
                console.log('remotes objesi bulunamadı.')
            } // const config = JSON.parse(data)
            //
            // const remotes = config.plugins.find(
            //     (plugin) => plugin instanceof ModuleFederationPlugin
            // ).options.remotes
            //
            // remotes.newRemote = 'newRemote@http://localhost:8082/remoteEntry.js'
            //
            // fs.writeFile(
            //     webpackDevServerPath,
            //     JSON.stringify(config, null, 2),
            //     (err) => {
            //         if (err) {
            //             console.error(err)
            //             return
            //         }
            //
            //         console.log('Dosya başarıyla kaydedildi.')
            //     }
            // )
        })
    }
}

/*
 * @desc This function creates the config object to be used in the replace function.
 * @param {string} data.clientName - The value to replace the template variable {{CLIENT_NAME}} with.
 * @param {string} data.clientType - The value to replace the template variable {{CLIENT_TYPE}} with.
 * @param {string} data.port - The value to replace the template variable {{NAME}} with.
 * @returns {object} - The config object to be used in the replace function.
 */
const createConfig = ({ clientName, clientType, port }) => {
    const config = {
        CLIENT_NAME: clientName,
        CLIENT_TYPE: clientType,
        PORT: port,
    }
    return config
}

/*
 * @desc This function replaces starter
 * with the values provided in the data object.
 */
const replaceConfig = (data) => {
    const config = createConfig(data)
    replace(data.name, config, data.clientType)
    changeModuleFedaration(data)
}

module.exports = {
    replaceConfig,
}
