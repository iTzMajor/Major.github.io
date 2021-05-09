var character = document.getElementById("character");

var block = document.getElementById("block");

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
        block.style.animation = "none";
        block.style.display = "none";
        alert("U lost omegaLUL");
    }
},10)