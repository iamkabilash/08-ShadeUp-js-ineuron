const hexToRgb = (hex) =>{
  return (hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
  .substring(1).match(/.{2}/g)
  .map(x => parseInt(x, 16)))
}

function hexConvbtn() {
    const hexInput = document.querySelector("#hexCInp");
    const output = document.querySelector(".hexConv-out-box");
    const outputValue = document.querySelector("#hexCOut");
    output.style.backgroundColor = "#" + hexInput.value;
    outputValue.innerText = "rgb (" + hexToRgb(("#"+hexInput.value))  + ")"; 
}
// <---------->

const rgbToHex = (r, g, b) => {
    return ('#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join(''))
}

function rgbConvbtn() {
  const RC = parseInt(document.querySelector("#RCInput").value);
  const GC = parseInt(document.querySelector("#GCInput").value);
  const BC = parseInt(document.querySelector("#BCInput").value);
  const output = document.querySelector(".rgbConv-out-box");
  const outputValue = document.querySelector("#rgbCOut");

  output.style.backgroundColor = rgbToHex(RC, GC, BC);
  outputValue.innerText = rgbToHex(RC, GC, BC);
}

// <-------->
function RangeSelector() {
    const Rr = parseInt(document.querySelector("#RrInput").value);
    const Gr = parseInt(document.querySelector("#GrInput").value);
    const Br = parseInt(document.querySelector("#BrInput").value);
    const output = document.querySelector("#range-color-box");
    const outputValue = document.querySelector("#rangeOut");

    output.style.backgroundColor = rgbToHex(Rr, Gr, Br);
    outputValue.innerText = "rgb (" + String(Rr) +", "+ String(Gr) +", "+ String(Br) +" )";
}

// <---------->
function hexFindbtn() {
    const hexInput = document.querySelector("#hexInput");
    const output = document.querySelector("#color-box");
    output.style.backgroundColor = hexInput.value;
}

// <---------->
function RgbFindbtn() {
    const Ri = parseInt(document.querySelector("#RInput").value);
    const Gi = parseInt(document.querySelector("#GInput").value);
    const Bi = parseInt(document.querySelector("#BInput").value);
    const output = document.querySelector("#rgb-color-box");

    output.style.backgroundColor = rgbToHex(Ri, Gi, Bi);
}

// <---------->
function randomColor(){
    let hex = "#";
    const numbers = "0123456789ABCDEF";
    for (let i=0; i<6; i++){
        hex += numbers[Math.floor(Math.random() * 16)];
    }
    return hex;
}

function randompickerbtn() {
    const output = document.querySelector("#randomPicker");
    const outputValue = document.querySelector("#randomValuePara");
    randomHex = randomColor();
    output.style.backgroundColor = randomHex;
    outputValue.innerText = randomHex;
}


