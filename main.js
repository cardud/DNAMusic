let noteA = document.getElementById("audioA"); 
let noteC = document.getElementById("audioC"); 
let noteD = document.getElementById("audioD"); 
let noteE = document.getElementById("audioE"); 
let noteG = document.getElementById("audioG"); 

const s = document.getElementById('s');

let stop = false;

f
/*
function findS(){
    for(let i = 0; i <= s.length; i++){
        if(s[i] == "a" ){
            var a = document.getElementById("audio"); 
            a.play();
        }
    }  
}


function PAudio() {
    var x = document.getElementById("s").value;  
    if(x=="a"){
      var a = document.getElementById("audio"); 
      a.play();
    }
}
*/
// ---

function startSequence() {
    playSequence(s.value);
}
function pauseSequence(){
    playSequence(s).break;
}

function playSound(letter) {
    if(letter == "a" ){
        if (noteA.paused) {
            noteA.play();
        } else {
            noteA.currentTime = 0;
        }
    }
    if(letter == "t" ){
        if (noteD.paused) {
            noteD.play();
        } else {
            noteD.currentTime = 0;
        }
    }
    if(letter == "c"){
        if (noteC.paused) {
            noteC.play();
        } else {
            noteC.currentTime = 0;
        }
    }
    if(letter == "g"){
        if (noteG.paused) {
            noteG.play();
        } else {
            noteG.currentTime = 0;
        }
    }
    if(letter == "u"){
        if (noteE.paused) {
            noteE.play();
        } else {
            noteE.currentTime = 0;
        }
    }
}
    
function playSequence(sequence) {
    if (sequence == '') {
        return;
    }
    if(stop){
        return;
    }

   /* if(document.getElementById('stop').onclick() == true){
        return;
    }*/

   
    const letter = sequence[0];
    playSound(letter);

    window.setTimeout(() => playSequence(sequence.substring(1)), 300);
}




