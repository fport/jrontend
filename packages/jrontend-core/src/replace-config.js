const glob = require('glob');
const fs = require('fs');
// const path = require('path');

const templateFile = (fileName, replacements) => {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    const template = Object.entries(replacements).reduce((acc, [key, value]) => {
        return acc.replace(new RegExp(`(\{\{${key}\}\}|\{\{ ${key} \}\})`, 'g'), value?.toString() ?? '');
    }, fileContent);

    fs.writeFileSync(fileName, template);
};

const replace = (projectPath, config) => {
    glob.sync(`${projectPath}/**/*`).forEach((file) => {
        if (fs.lstatSync(file).isFile()) {
            templateFile(file, config);
        }
    });
};

const createConfig = ({ clientName, clientType, port }) => ({
    CLIENT_NAME: clientName,
    CLIENT_TYPE: clientType,
    PORT: port,
});

const replaceConfig = ({ clientName, clientType, port, projectPath }) => {
    const config = createConfig({ clientName, clientType, port });
    replace(projectPath, config);
};

module.exports = {
    replaceConfig,
};
