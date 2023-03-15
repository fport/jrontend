#!/usr/bin/env node

const inquirer = require('inquirer')
const { createProject } = require('../src/application')

;(async () => {
    console.info('Welcome to the micro frontend generator')
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'Pick the name of your app:',
            name: 'name',
            default: 'host',
        },
        {
            type: 'list',
            message: 'Pick the patterns you want to use:',
            name: 'framework',
            choices: ['module-federation', 'server-driven-ui'],
            default: 'module-federation',
        },
    ])

    if (answers.framework === 'module-federation') {
        createProject(answers)
    }
})()
