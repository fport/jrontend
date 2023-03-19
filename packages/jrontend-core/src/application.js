const { createClient } = require('./create-client')

/*
 * @desc This is the main entry point for the application.
 * It will be called from the command line.
 * It will take the project options and pass them to the appropriate function.
 * This is the only file that should be called from the command line.
 */
const createBoilerplate = async (projectOptions) => {
    switch (projectOptions.projectType) {
        case 'Client App':
            await createClient({ ...projectOptions })
            break
        case 'Api Server':
            console.log('Not supported yet. Sorry! :(')
            break
        default:
            break
    }
}

module.exports = {
    createBoilerplate,
}
