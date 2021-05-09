var character = document.getElementById("character");

var block = document.getElementById("block");

var counter=0;

function jump(){
    if(character.classList.contains("animate")){return}
    character.classList.add("animate");
    
    setTimeout(function(){
        character.classList.remove("animate");
    },500);

}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){jump()}}

var checkup = setInterval(function(){
    //Y של דינו
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   
   // console.log(charactertop);
   
    //X של בלוק
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    //console.log(blockleft);
    
    //איתור התנגשות חישוב לפי גודל משחק
    if(blockleft<20 && blockleft>0 && charactertop>=130){
        //התנגשות
        //console.log("collision");
        block.style.display = "none";
        //alert("U lost omegaLUL, Here's ur score tho: " + Math.floor(counter/100));
        //Math מחזיר את הערך של FLOOR
        counter=0;
        block.style.animation="block 1s infinite linear"
        
    }
    else{
        counter++;
        document.getElementById("scorespan").innerHTML = Math.floor(counter/100);

    }
},10)
//כל 10 מילשנייה בדיקה