const startGame = document.querySelector(".startGame")
const Enter = document.querySelector(".Enter")
let firstDigitDisplay = document.querySelector("#digitOne")
let secondDigitDisplay = document.querySelector("#digitTwo")

class Digits {
constructor(){
this.digitOne =[]
this.digitTwo =[]
}
shuffle1() {
    var currentIndex = this.digitOne.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this.digitOne[currentIndex];
        this.digitOne[currentIndex] = this.digitOne[randomIndex];
        this.digitOne[randomIndex] = temporaryValue;
    }

    return this.digitOne;
}
shuffle2() {
    var currentIndex = this.digitTwo.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this.digitTwo[currentIndex];
        this.digitTwo[currentIndex] = this.digitTwo[randomIndex];
        this.digitTwo[randomIndex] = temporaryValue;
    }

    return this.digitTwo;
}
}

for (let i=0;i<100;i++){
    this.digitOne.push(i)
    this.digitTwo.push(i)
}


startGame.addEventListener("click", function(e){
    this.digitOne.shuffle1()
    this.digitTwo.shuffle2()
    firstDigitDisplay.innerHTML=this.digitOne[0]
    secondDigitDisplay.innerHTML=this.digitTwo[0]
})

// for (let j=0;j<digitOne.length;j++){
//     for (let k=0;k<digitTwo.length;k++){
    
//         firstDigitDisplay.innerHTML=digitOne[j]
//         secondDigitDisplay.innerHTML=digitTwo[k]
//         console.log(digitOne[j])
//     }
//     }
    