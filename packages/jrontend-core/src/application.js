const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')

/**
 * @description This function creates the boilerplate for the project.
 * @param {string} name - The name of the project.
 * @param {string} pattern - The pattern of the project.
 * @param {string} clientType - The client type of the project.
 * @param {number} port - The port of the project.
 * @param {string} framework - The framework of the project.
 * @param {string} language - The language of the project.
 * @param {string} cssPreprocessor - The CSS preprocessor of the project.
 */

// TODO: switch case for project type
const createBoilerplate = async ({
    name,
    pattern,
    projectType,
    clientType,
    port,
    framework,
    language,
    cssPreprocessor,
}) => {
    const lang = language.toLocaleLowerCase() === 'javascript' ? 'js' : 'ts'
    await fs.mkdirSync(`${name}`)

    const templatePath = path.join(
        __dirname,
        `../templates/${clientType?.toLocaleLowerCase()}/${framework.toLocaleLowerCase()}/base`
    )
    const languagePath = path.join(
        __dirname,
        `../templates/${clientType?.toLocaleLowerCase()}/${framework.toLocaleLowerCase()}/${lang}`
    )

    await fse.copy(templatePath, name)
    await fse.copy(languagePath, name)
}

module.exports = {
    createBoilerplate,
}
