const twig = require('twig')
const bodyParser = require('body-parser')
const express = require('express'); //importe express
const { response } = require('express');
const app = express() //instentie
const Helper = require('./helper/machineEcrire');
const nodemailer = require("nodemailer"); 
const email = require("./config.js");



// debut du transporteur pour nodemailer
let transporter = nodemailer.createTransport({
    service: 'gmail', // car mon adresse est en gmail. si autre (hotmail) changer cette config
    auth: {
      user: email.Config.mail, // j'aurai pu mettre direct mon adresse mail mais elle aurait été visible sur github
      pass: email.Config.mailPass // pareil que le commentaire au dessus
    }
  });
  // fin du tranporteur pour nodemailer


//demande a express d'aller chercher les fichier static (image,css,js.) dans le dossier assets
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }))
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
    response.render('porteFolio.twig', {

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

app.post('/contact',async function (req, res) {
    let message = "";
    console.log(req.body.email);
    let mailOptions = { // obligatoire pour la config de nodemailer (a mettre dans le post de la route souhaité)
        from: req.body.email,
        to: 's.chabani13@gmail.com',
        subject: 'Contact de ' + req.body.name + ' via le CV en ligne',
        text: req.body.message
      };

     transporter.sendMail(mailOptions, function(error, info){ // obligatoire pour la config de nodemailer
        if (error) {
          console.log(error);
          message = "Le message n'a pa pu etre envoyé"
          res.render('contact.twig', {
            message: message
        })
        } else {
          console.log('Email sent: ' + info.response);
          message = "Le message a été envoyé"
          res.render('contact.twig', {
            message: message
        })
        }
      });
})


