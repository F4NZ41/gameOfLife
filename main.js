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

}

function render() {
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
            
            console.log(n)

            console.log(pg[i][j]);
            

            if(pg[i][j]==1) {
                ctx.fillRect(j*20,i*20,20,20)
            }

            if(n<2) {
                pg[i][j]=0;
            }
            
            
        }
    }
}
