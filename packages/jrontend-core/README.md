# 🐣 Jrontend Core package
A terminal application that helps you easily set up micro frontend applications.

## Jrontend Introduction Page
<img width="1330" alt="Screenshot 2023-05-07 at 17 29 35" src="https://user-images.githubusercontent.com/56169582/236688787-1fedab63-34f6-4634-9163-47bb428ea220.png">
In recent years, the micro frontend architecture has become a popular approach to facilitate the management of large and complex projects. 
In this article, we'll discuss how to easily create micro frontend applications via the terminal using a package called Jrontend. 
Jrontend accelerates the learning process, allowing you to quickly get started with micro frontend architecture. 
However, please note that it is not currently recommended for production use.

## Installation Steps:
### Node.js Installation:
Before you start using Jrontend, make sure [Node.js](https://nodejs.org/en/download) is installed on your system. If not, you can download and install it from.

### Creating an Application Using the Jrontend Package:
Open your terminal and use the following command to start the application creation process using the latest version of Jrontend:
```bash
npx @jrontends/core@latest
```

### Terminal Application Sample Options:
Jrontend will ask you for some settings while creating your application. Here are these settings and example values:  
<img width="291" alt="Screenshot 2023-05-07 at 18 51 41" src="https://user-images.githubusercontent.com/56169582/236688784-59ab584e-30ca-4788-b898-f8103f380efc.png">
   
After entering the application settings, Jrontend will create your application.
### Conclusion:
The Jrontend npm package is a handy tool for starting to work with micro frontend architecture. With easy installation steps and a ready-made template, you can quickly start a project. However, it is not currently recommended for production use. If you are new to learning micro frontend architecture, you can try Jrontend to speed up your learning process.
Happy coding 🎉

# Roadmap
- [x] composer exile
- [x] fragment exile
- [x] making necessary fm transactions
- [x] choose style library
- [x] set the deploy part
- [x] start to deploy

- [ ] Dockerize each project (staged dockerfiles for cache usage)
- [x] Heroku || vercel deploy's
- [ ] Create .gitlab-ci.yml for each project (only changes deploys)
- [ ] Create .github/workflows/composer.yml for composer
- [ ] Create .github/workflows/fragment.yml for fragments
- [ ] Create deployment.yml with HPA and service.yml for k8s. (NodePort for each)

# Expected to be supported in roadmap 
## Client 
- [x] React
- [x] Vue
- [x] Vanilla

## Api Server
- [ ] Express
- [ ] Fastify
- [ ] qraphql-apollo

## style
- [x] Pure 
- [ ] Tailwind
- [ ] Module Css
