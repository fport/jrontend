/*
 @desc: This is the entry point for the application
 @params: answer - the answer to patterns, a string
*/

const createProject = async (answer) => {
    console.log('Creating project with name: ' + answer.framework)
}

module.exports = {
    createProject,
}
