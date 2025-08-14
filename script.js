let n = 0;
let numElen = document.getElementById("num");

function start_random() {
    if(n>0) return;
    n = 50;
    next_number();
}
function next_number() {
    var r = Math.round(Math.random()*999999)+"";
    numElen.innerText = r.padStart(6, '0');
    n--;
    if(n>0) {
        setTimeout(next_number,150-n);
    }
}