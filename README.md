# Color-Hexa
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>HTML</title>
  
  <!-- HTML -->
  

  <!-- Custom Styles -->
  <link rel="stylesheet" href="style.css">
</head>

<body>
    <nav id="hexorrbg">
        <input type="checkbox" id="rgb">Rgb
        <input type="checkbox" id="hex">Hex
    </nav>
    <div id="interfaceMain">
        <h1 id="color">Default</h1>
        <button id="rand">Randomise</button>
    </div>
  <script src="main.js"></script>
</body>
</html>

body {
    background: url("bg.jpeg");
    text-align: center;
    align-items: center;
    color: white;
}

#interfaceMain{
    background: url("bg.jpeg");
    font-size: 10px;
    position: absolute;
    width: 100%;
    top: 250px;
    font-family: monospace;
    color: white;
}

#rand{
    top: 340px;
    font-size: 25px;
    color: honeydew;
    background-color: black;
    font-family: monospace;
    text-shadow: 
        0 0 4px,
        0 0 8px,
        0 0 16px;
}

#color{
    text-shadow: 
        0 0 8px,
        0 0 16px,
        0 0 32px;
}

#chooseColor{
    color: white
}

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
