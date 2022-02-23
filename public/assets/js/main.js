// const { promiseImpl } = require("ejs");

const textInit = document.getElementById('initText')
const myText = document.getElementById('myText')
const animation = document.getElementById('animation')
const background = document.getElementById('grandEcran')
const moi = document.getElementById('aPropos')
const pc = document.getElementById('grandEcran')


function domReady(f) {
  if (document.readyState === 'complete') {
    f();
  } else {
    document.addEventListener('DOMContentLoaded', f);
  }
}

domReady(function () {
  background.style.background = "url('./assets/home/picture/pcFace.webp')";
});



const text = "λ npm init \nλ loading.........../ \nλ Portfolio Samy \nλ npm start \nλ le serveur démarre"

setTimeout(() => {// appelle ma fonction avec un delai de 1sec  

  textInit.style.display = "block";

  (async function demo() {
    for (let i = 0; i <= text.length; i++) {
      await sleep(20);
      myText.innerText = text.substring(0, i);
    }

    pc.classList.add("opacityOut")
   
    
    setTimeout(() => {
      pc.style.display = "none"
      moi.style.display = "block"
      moi.classList.add("opacityIn")
    } ,3000)

    


    //  animation.style.backgroundImage = "url('https://i.pinimg.com/originals/88/15/63/881563d6444b370fa4ceea0c3183bb4c.gif')";
  })()

}, 1000);




function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


