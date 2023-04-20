#!/usr/bin/env node

const inquirer = require('inquirer')
const { createBoilerplate } = require('../src/application')
const fs = require('fs')
const path = require('path')

const promptProjectConfig = async () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'App name:',
            name: 'name',
            default: 'jrontend-fun',
        },
        {
            type: 'list',
            message: 'Project Type:',
            name: 'projectType',
            choices: ['Client App', 'Api Server'],
            default: 'Client App',
        },
        /*{
            type: 'list',
            message: 'Pattern:',
            name: 'pattern',
            choices: ['module-federation'],
            default: 'module-federation',
        },*/
    ])
}

    const promptClientConfig = async () => {
        return inquirer.prompt([
            {
                type: 'list',
                message: 'Client Type:',
                name: 'clientType',
                choices: ['composer', 'fragment'],
                default: 'composer',
            },
        ])
    }

const promptServerConfig = async () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Server framework:',
            name: 'server',
            choices: ['express'],
            default: 'express',
        },
    ])
}

    const promptComposerConfig = async (clientType) => {
        const composerTemplateList = fs
            .readdirSync(path.join(__dirname, `../templates/${clientType.toLowerCase()}`))
            .sort()

        return inquirer.prompt([
            {
                type: 'input',
                message: 'Client name:',
                name: 'clientName',
                default: `${clientType}`,
            },
            {
                type: 'input',
                message: 'Port:',
                name: 'port',
                default: '8080',
            },
            {
                type: 'list',
                message: 'Framework/Library:',
                name: 'framework',
                choices: composerTemplateList,
                default: 'nextjs',
            },
            {
                type: 'list',
                message: 'With Language:',
                name: 'language',
                choices: ['JavaScript', 'TypeScript'],
                default: 'JavaScript',
            },
            {
                type: 'list',
                message: 'With CSS Preprocessor:',
                name: 'cssPreprocessor',
                choices: ['None', 'Tailwind'],
                default: 'None',
            },
        ])
    };

    (async () => {
        const projectConfig = await promptProjectConfig()

        if (!fs.existsSync(projectConfig?.name)) {
            await fs.mkdirSync(projectConfig?.name)
        }

        if (projectConfig?.projectType === 'Client App') {
            const clientConfig = await promptClientConfig()
            const composerConfig = await promptComposerConfig(clientConfig.clientType)

            createBoilerplate({ ...projectConfig, ...clientConfig, ...composerConfig })
            console.log('Ready project...')
        }

        if (projectConfig?.projectType === 'Api Server') {
            const serverConfig = await promptServerConfig()

            createBoilerplate({ ...projectConfig, ...serverConfig })
            console.log('Ready project...')
        }
    })()
