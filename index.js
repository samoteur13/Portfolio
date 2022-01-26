const twig = require('twig')
const express = require('express'); //importe express
const { response } = require('express');
const app = express() //instentie

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
app.get('/PorteFolio.html', (request, response) =>{
    response.render('PorteFolio.twig',{

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

app.get('/porteFolio', (request, response) => {
    response.render('porteFolio.twig', {

    })
})


app.get('/contact', (request, response) => {
    response.render('contact.twig', {

    })
})
