const { createClient } = require('./create-client')

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
