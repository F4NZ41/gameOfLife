const width = 10;
const height = 10;

var c = document.getElementById("c");
var ctx = c.getContext("2d");

var pg = [
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],  
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];

function loopthis() {
    setInterval(render, 75);
}


function render() {

    // just a reference gotta clone this array (pg) into other array so that a tick represents an instantaneous change in all variables at the same time 
    // see comment 2.

    var pgf = pg;
    console.error(pgf)

    for(var i = 0; i < height; i++) {
        for(var j = 0; j < width; j++) {

            var n = 0;

            try { if (pg[i-1][j-1]==1){n++}} catch {console.log("catch xd")}
            try { if (pg[i-1][j]==1) {n++} } catch {console.log("catch xd")}
            try { if(pg[i-1][j+1]==1) {n++}} catch {console.log("catch xd")}
            try { if (pg[i][j-1]==1) {n++} } catch {console.log("catch xd")}
            try { if (pg[i][j+1]==1) {n++} } catch {console.log("catch xd")}
            try { if(pg[i+1][j-1]==1) {n++}} catch {console.log("catch xd")}
            try { if (pg[i+1][j]==1) {n++} } catch {console.log("catch xd")}
            try { if(pg[i+1][j+1]==1) {n++}} catch {console.log("catch xd")}
            


            console.log(n, i, j)

            console.log(pg[i][j]);
            

            if(pg[i][j]==1) {
                ctx.fillRect(j*40,i*40,40,40)
            }
            else {
                ctx.fillStyle = "white";
                ctx.fillRect(j*40,i*40,40,40)
                ctx.fillStyle = "black";
            }

            ctx.fillStyle = "gray";
            ctx.font = "20px Consolas";
            ctx.fillText(n, j*40+12,i*40+24);
            ctx.fillStyle = "black";

            if (pg[i][j] == 1 && n<2) {
                pgf[i][j] = 0;
            }

            else if (pg[i][j] == 1 && n>3) {
                pgf[i][j] = 0;
            }

            else if (pg[i][j] == 0 && n==3) {
                pgf[i][j] = 1;
            }

            else {

            } 
        }
    }
    
    // comment 2.
    pg = pgf;
}

