 const containerEl = document.querySelector('.container');
let paraEl = document.querySelectorAll('.para');
let color = []; 
var audio = new Audio('mech-keyboard.mp3');
// div Element 
const one_1 = document.querySelector('.one1');
const one_2 = document.querySelector('.one2');
const one_3 = document.querySelector('.one3');
const one_4 = document.querySelector('.one4');
const one_5 = document.querySelector('.one5');

// para Element 
const codeColor_1 = document.querySelector('.code-color1');
const codeColor_2 = document.querySelector('.code-color2');
const codeColor_3 = document.querySelector('.code-color3');
const codeColor_4 = document.querySelector('.code-color4');
const codeColor_5 = document.querySelector('.code-color5');

let first = 0;
let seccond = 0;
let third = 0;
let fourth = 0;
let fifth = 0;

// lock Element 
const oneLock = document.querySelector('.lock-one');
const twoLock = document.querySelector('.lock-two');
const threeLock = document.querySelector('.lock-three');
const fourLock = document.querySelector('.lock-four');
const fiveLock = document.querySelector('.lock-five');

function copyText(copy) {
    navigator.clipboard.writeText(copy);
}
paraEl.forEach((para) => {
    para.addEventListener('click', function() {
        copyText(para.innerHTML);
        alert('Text Copyed');
    })
});

// RGB TO HEX 
function valueToHex(c) {

    var hex =  c.toString(16);
  
    return hex
  }

  function rgbToHex(r, g, b) {

    return( "#" + valueToHex(r) + valueToHex(g) + valueToHex(b));
  
  }


// ALLLOCK ITEM CLICK FUNCTION 
oneLock.addEventListener('click', () => {
    if (first == 0) {
        first = 1;
       
         document.querySelector('.openone').style.display = 'none';
        document.querySelector('.onelock').style.display = 'block';
    }
    else {
        first = 0;
         document.querySelector('.openone').style.display = 'block';
        document.querySelector('.onelock').style.display = 'none';
    }
   
})

twoLock.addEventListener('click', () => {
    if (seccond == 0) {
        seccond = 1;
       
         document.querySelector('.opentwo').style.display = 'none';
        document.querySelector('.twolock').style.display = 'block';
    }
    else {
        seccond = 0;
         document.querySelector('.opentwo').style.display = 'block';
        document.querySelector('.twolock').style.display = 'none';
    }
   
})

threeLock.addEventListener('click', () => {
    if (third == 0) {
        third = 1;
       
         document.querySelector('.openthree').style.display = 'none';
        document.querySelector('.threelock').style.display = 'block';
    }
    else {
        third = 0;
         document.querySelector('.openthree').style.display = 'block';
        document.querySelector('.threelock').style.display = 'none';
    }
   
})

fourLock.addEventListener('click', () => {
    if (fourth == 0) {
        fourth = 1;
       
         document.querySelector('.openfour').style.display = 'none';
        document.querySelector('.fourlock').style.display = 'block';
    }
    else {
        fourth = 0;
         document.querySelector('.openfour').style.display = 'block';
        document.querySelector('.fourlock').style.display = 'none';
    }
   
})

fiveLock.addEventListener('click', () => {
    if (fifth == 0) {
        fifth = 1;
       
         document.querySelector('.openfive').style.display = 'none';
        document.querySelector('.fivelock').style.display = 'block';
    }
    else {
        fifth = 0;
         document.querySelector('.openfive').style.display = 'block';
        document.querySelector('.fivelock').style.display = 'none';
    }
   
})

// event = keyup or keydown
document.body.addEventListener('keyup', event => {
    if (event.code === 'Space') {
    audio.play();
        color = [];
        updateColor();
    }
  })
function updateColor() {
    if (first != 1) {
        color[0] = rgbToHex(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
        one_1.style.backgroundColor = color[0];
        codeColor_1.textContent = color[0]; 
    }
    
    if (seccond != 1) {
        color[1] = rgbToHex(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
       one_2.style.backgroundColor = color[1];
       codeColor_2.textContent = color[1];
    }
    

      if (third != 1) {
        color[2] = rgbToHex(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
        one_3.style.backgroundColor = color[2];
        codeColor_3.textContent = color[2];
      }
        
     if (fourth != 1) {
        color[3] = rgbToHex(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
       one_4.style.backgroundColor = color[3];
       codeColor_4.textContent = color[3];
     }
    
     if (fifth != 1) {
        
       color[4] = rgbToHex(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
        one_5.style.backgroundColor = color[4];
        codeColor_5.textContent = color[4];
     }

    

}


updateColor();