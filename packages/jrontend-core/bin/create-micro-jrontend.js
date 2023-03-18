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
            choices: ['Client App', 'Api server'],
            default: 'Client App',
        },
    ])

    if (answers.projectType === 'Client App') {
        const composerTemplateList = fs
            .readdirSync(path.join(__dirname, '../templates/composer'))
            .sort()

        const composerAnswers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Client Type:',
                name: 'clientType',
                choices: ['Composer', 'Fragment'],
                default: 'Composer',
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
        console.log('Creating project...')
        createBoilerplate({
            ...answers,
            ...composerAnswers,
        })
    }
})()
