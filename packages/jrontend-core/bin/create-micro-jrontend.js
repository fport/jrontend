#!/usr/bin/env node

const inquirer = require('inquirer')
const { createBoilerplate } = require('../src/application')
const fs = require('fs')
const path = require('path')

;(async () => {
    console.info('Welcome to the micro frontend generator')
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'App name:',
            name: 'name',
            default: 'jrontend-fun',
        },
        {
            type: 'list',
            message: 'Pattern:',
            name: 'pattern',
            choices: ['module-federation'],
            default: 'module-federation',
        },
        {
            type: 'list',
            message: 'Project Type:',
            name: 'projectType',
            choices: ['Client App', 'Api Server'],
            default: 'Client App',
        },
    ])

    if (!fs.existsSync(answers?.name)) {
        await fs.mkdirSync(answers?.name)
    }

    if (answers.projectType === 'Client App') {
        const client = await inquirer.prompt([
            {
                type: 'list',
                message: 'Client Type:',
                name: 'clientType',
                choices: ['Composer', 'Fragment'],
                default: 'Composer',
            },
        ])

        const composerTemplateList = fs
            .readdirSync(
                path.join(
                    __dirname,
                    `../templates/${client.clientType.toLowerCase()}`
                )
            )
            .sort()

        const composerAnswers = await inquirer.prompt([
            {
                type: 'input',
                message: 'Client name:',
                name: 'clientName',
                default: `${client.clientType}-app`,
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
                default: 'react',
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
                choices: ['None', 'Sass', 'Less', 'Stylus', 'Tailwind'],
                default: 'None',
            },
        ])

        createBoilerplate({
            ...answers,
            ...client,
            ...composerAnswers,
        })
        console.log('Ready project...')
    }
})()
