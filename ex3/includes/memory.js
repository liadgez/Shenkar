var letters = ["A", "B", "C", "D", "E", "F" ,"G", "H"];
var size =80;
var letter = "";
var fontSize=30;
var padding=20;
var randNum=0
var cards=0;
document.getElementById('btn_box').onclick = Create3boxes;
var boxField = document.getElementById('box_field');


function Create3boxes() {
for(var i =0; i<3; i++){
    theBox=createBox(size);
    size+=20;
    fontSize+=8;
    boxField.append(theBox);
    cards+=1;
    if (cards==1){
        size+=20;
        fontSize+=8;
        theBox=createBox(size);
        boxField.append(theBox);
        cards++;
        i++;
    }
    cards=0;
    
}
playerMode();
}

function createBox(){
    let theBox = document.createElement('div');
    theBox.className = 'theBox';
    theBox.style.height = size + 'px';
    theBox.style.width = size + 'px';
    theBox.style.width = size + 'px';
    theBox.style.fontSize= fontSize + 'px';
    let h2 =document.createElement('h2');
    if(cards==0){
    letter=random();
    }
    h2.innerHTML= letter;
    theBox.appendChild(h2);
    return theBox;

};

function random ()  {
   randNum = Math.floor(Math.random() * 8)
    letter = letters[randNum];
    return letter;
};

function playerMode ()
{

    theBox.addEventListener('click' , hit);


}

var hit = function () {
    theBox.style.webkitTextFillColor = 'aqua';
 return theBox;
};