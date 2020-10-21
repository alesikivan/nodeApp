
var a = 35;
var b = 178;


function getTrueTime(h, m){
    console.log(h);
    console.log((m / 60).toFixed(0));
    return h + +(m / 60).toFixed(0);
}

console.log(getTrueTime(a, b))
