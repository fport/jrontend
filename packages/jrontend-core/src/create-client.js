const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const { replaceConfig } = require('./replace-config');

const createClient = async ({
                                name,
                                clientType,
                                port,
                                framework,
                                language,
                                cssPreprocessor,
                                clientName,
                            }) => {
    const lang = language.toLowerCase() === 'javascript' ? 'js' : 'ts';
    const projectPath = path.join(name, clientName);
    const templatePath = path.join(
        __dirname,
        `../templates/${clientType?.toLowerCase()}/${framework.toLowerCase()}/base`
    );
    const languagePath = path.join(
        __dirname,
        `../templates/${clientType?.toLowerCase()}/${framework.toLowerCase()}/${lang}`
    );

   /*
   TODO: Add support for creating a new orchestra.json file
   const defaultOrchestra = {
        composer: '',
        fragments: [],
        server: [],
    };

    fs.writeFileSync(path.join(name, 'orchestra.json'), JSON.stringify(defaultOrchestra));*/

    fs.mkdirSync(projectPath);

    await fse.copy(templatePath, projectPath);
    await fse.copy(languagePath, projectPath);

    replaceConfig({
        clientName,
        clientType,
        port,
        projectPath,
    });
};

module.exports = {
    createClient,
};
