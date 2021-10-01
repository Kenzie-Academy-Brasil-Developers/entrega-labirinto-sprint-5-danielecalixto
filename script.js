
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
let divToAppend = document.getElementById("maze");

for (let i=0; i<map.length; i++) {
    const lineWall = document.createElement("div");
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
        } else if (line[i] == "F") {
            div.classList.add("final");
        }
        lineWall.appendChild(div);
    }
}

let l = 9;
let c = 0;
let mapPosition = [l, c];
let mapPositionArray = [];
let mapPositionString = "";
let gamer = mapPosition;
let result;

function noWallAndWinner(map, keyName) {
    if (keyName == "ArrowDown") {
        l += 1;
    } else if (keyName == "ArrowUp") {
        l -= 1;
    } else if (keyName == "ArrowRight") {
        c += 1;
    } else if (keyName == "ArrowLeft") {
        c -= 1;
    }
    if (c>0 && c<=20) {
        if (map[l][c] == " ") {
            gamer = [l, c];
            result = true;
        } else if (map[l][c] == "W") {
            l = gamer[0];
            c = gamer[1];
            result = false;
        } else if (map[l][c] == "S") {
            gamer = [l, c];
            result = true;
        } else if (map[l][c] == "F") {
            gamer = [l, c];
            result = true;
            let body = document.getElementById("body");
            const paragraph = document.createElement('p');
            paragraph.innerText = "VITÓRIA!";
            body.appendChild(paragraph);
        }
    } else result = false;
    return result;
}

boxLeft = 0;
boxTop = 270;

document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (noWallAndWinner(map, keyName) == true) {
        if (keyName == "ArrowDown") {
            boxTop += 30;
            document.getElementById("gamer").style.top = boxTop + "px";
        } else if (keyName == "ArrowUp") {
            boxTop -= 30;
            document.getElementById("gamer").style.top = boxTop + "px";
        } else if (keyName == "ArrowRight") {
            boxLeft += 30;
            document.getElementById("gamer").style.left = boxLeft + "px";
        } else if (keyName == "ArrowLeft") {
            boxLeft -= 30;
            document.getElementById("gamer").style.left = boxLeft + "px";
        }
    }            
});




