const color = document.querySelector("#color");
const start = document.querySelector("#rand");
const int = document.getElementById("interfaceMain");
const HOB = document.getElementById("chooseColor")
const nav = document.getElementById("hexorrgb")



//rgb randomizer vars
let red;
let green;
let blue;
let onRgb = true;
let onHex = false;



//main func
start.onclick = ()=>{
    
    colorDefiner()
}

rgb.oninput = ()=> {
    if (!onRgb) {
        onRgb = true;
        onHex = false;
        console.log("heloo");
    }
}
hex.oninput = ()=> {
    if (!onHex) {
        onHex = true;
        onRgb = false;
        console.log("works")
    }
}

//some functions
function colorDefiner(){
        //randing the no.
    red = Math.round(Math.random() * 255);
    green = Math.round(Math.random()* 255);
    blue = Math.round(Math.random() * 255);
    //cOoL dEbUg cOnSoLe
    console.log("%c" + red, `color: rgb(${red}, ${green}, ${blue})`);
    console.log("%c" + green, `color: rgb(${red}, ${green}, ${blue})`);
    console.log("%c" + blue, `color: rgb(${red}, ${green}, ${blue})`);
    
    //now, setting it up
    document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
    color.style.color = `rgb(${red}, ${green}, ${blue})`;
    start.style.background = `rgb(${red}, ${green}, ${blue})`;
    int.style.background =  `rgb(${red + 100}, ${green + 100}, ${blue + 100})`;
    
    if(onRgb){
        color.textContent = `color = ${red}, ${green}, ${blue} (in rgb context)`;
        if (red - green > 50 && red - blue > 50) {
            color.textContent += "(reddish)";
        }
        else if (green - red > 50 && green - blue > 50) {
            color.textContent += "(greenish)";
        }
        else if (blue - green > 50 && blue - red > 50) {
            color.textContent += "(bluish)";
        }
        else{
            color.textContent += "(mixed)";
        }
        
    }
    else{
        function toHex(num){
            let hexadecimal = Number(num).toString(16);
            if (hexadecimal.length < 2) {
                hexadecimal = "0" + hexadecimal;
            }
            
            return hexadecimal;
        }
        let hexr = toHex(red);
        let hexg = toHex(green);
        let hexb = toHex(blue);
        color.textContent = `color = #${hexr+hexg+hexb} (in hex context)`;
        if (red - green > 50 && red - blue > 50) {
            color.textContent += "(reddish)";
        }
        else if (green - red > 50 && green - blue > 50) {
            color.textContent += "(greenish)";
        }
        else if (blue - green > 50 && blue - red > 50) {
            color.textContent += "(bluish)";
        }
        else {
            color.textContent += "(mixed)";
        }
        
    }

}
