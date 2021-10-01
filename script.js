// let div = document.getElementById('maze');
// const dani = document.createElement('div');
// dani.classList.add("wall");
// div.appendChild(dani);

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let line = [];
let lineClass = '';
let divToAppend = document.getElementById('maze');

for (let i=0; i<map.length; i++) {
    const lineWall = document.createElement('div');
    lineWall.classList.add("line");
    divToAppend.appendChild(lineWall);
    line = map[i].split("");
    for(let i=0; i<line.length; i++) {
        let div = document.createElement("div");
        if (line[i] == "W") {
            div.classList.add("wall");
        } else if (line[i] == " ") {
            div.classList.add("free");
        } else if (line[i] == "S") {
            div.classList.add("start");
        } else if (line[i] == "S") {
            div.classList.add("final");
        }
        lineWall.appendChild(div);
    }
}


let boxTop = 270;
let boxLeft = 0;
let l = 10;
let c = 0;
let pos = [];
let gamer = [];

document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    console.log(keyName);
    pos = gamer;
    console.log(gamer);
    if (keyName == "ArrowDown") {
        boxTop += 30;
        l = l+1;
        pos = [l, c];
        if (map[l][c] == " ") {
            document.getElementById("gamer").style.top = boxTop + "px";
            gamer = [l, c];
        }
        console.log(pos);
    } else if (keyName == "ArrowUp") {
        boxTop = boxTop - 30;
        document.getElementById("gamer").style.top = boxTop + "px";
        l = l-1;
        pos = [l, c];
        console.log(pos);
    } else if (keyName == "ArrowRight") {
        boxLeft += 30;
        document.getElementById("gamer").style.left = boxLeft + "px";
        c = c+1;
        pos = [l, c];
        console.log(pos);
    } else if (keyName == "ArrowLeft") {
        boxLeft = boxLeft - 30;
        document.getElementById("gamer").style.left = boxLeft + "px";
        c = c-1;
        pos = [l, c];
        console.log(pos);
    }
                
});

function noWall(l,c) {
    
}

