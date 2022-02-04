const twig = require('twig')
const express = require('express'); //importe express
const { response } = require('express');
const app = express() //instentie
const Helper = require('./helper/machineEcrire');



//demande a express d'aller chercher les fichier static (image,css,js.) dans le dossier assets
app.use(express.static('./public'));

app.listen(8080, () => {
    console.log("le serveur a demarrer");
})

app.get('/', (request, response) => {
    response.render('index.twig',
        { message: 'Hello there!' })
})

app.get('/header.twig', (request, response) => {
    response.render('header.twig', {

    })
})
app.get('/PorteFolio.html', (request, response) => {
    response.render('PorteFolio.twig', {

    })
})

app.get('/footer.twig', (request, response) => {
    response.render('footer.twig', {

    })
})

app.get('/cv', (request, response) => {
    response.render('cv.twig', {

    })
})

//page navdu cv
app.get('/nav', (request, response) => {
    response.render('./nav/_nav.html.twig')
})

//page d'acceill du cv
app.get('/homCv', (request, response) => {
    response.render('./cvIframe/home.html.twig')
})

//page Moi du cv
app.get('/moi', (request, response) => {
    response.render('./cvIframe/moi.html.twig')
})

//page compétence du cv
app.get('/competence', (request, response) => {
    response.render('./cvIframe/competence.html.twig')
})

//page experience professionnel du cv
app.get('/experience', (request, response) => {
    response.render('./cvIframe/experience.html.twig')
})

//page formation du professionnel du cv
app.get('/formation', (request, response) => {
    response.render('./cvIframe/formation.html.twig')
})




app.get('/porteFolio', (request, response) => {
    response.render('porteFolio.twig', {

    })
})



app.get('/contact', (request, response) => {
    response.render('contact.twig', {

    })
})


