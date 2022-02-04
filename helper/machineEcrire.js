
     class Helper {

    static   loop() {
        let myText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas voluptatibus dicta"
        let myArray = myText.split("");
        let timeLooper;
        if (myArray.length > 0) {
            document.getElementById("secretary_text").innerHTML += myArray.shift();
        } else {
            clearTimeout(timeLooper);
        }

        timeLooper = setTimeout('loop()', 70)
    }

   
}

module.exports.Helper = Helper