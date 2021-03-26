const width = 10;
const height = 10;

var c = document.getElementById("c");
var ctx = c.getContext("2d");

const pg = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],  
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];

function ngbr() {
    var n = 0;
    if(pg[i-1][j-1]) {n++}
    if(pg[i-1][j]) {n++}
    if(pg[i-1][j+1]) {n++}
    if(pg[i][j-1]) {n++}
    if(pg[i][j+1]) {n++}
    if(pg[i+1][j-1]) {n++}
    if(pg[i+1][j]) {n++}
    if(pg[i+1][j+1]) {n++}
    return(n)
}

function render() {
    for(var i = 0; i < height; i++) {
        for(var j = 0; j < width; j++) {
            console.log(pg[i][j]);

            if(pg[i][j]==1) {
                ctx.fillRect(j*20,i*20,20,20)
            }
            
        }
    }
}