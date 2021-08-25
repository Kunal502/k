canvas= document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

background_al = "alphabet.png";
background_no = "no.png";

function background_alup(){
    ctx.drawImage(background_al, 0, 0, canvas.width,canvas.height);

}

function background_noup(){
    ctx.drawImage(background_no, 0, 0, canvas.width,canvas.height);
}

window.addEventListener("keydown", keydown);

function keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if((keyPressed >= 97 && keyPressed <= 122 )  (keyPressed >= 65 && keyPressed <= 90 ))
    {
      console.log("alphabet key press");
      background_alup();

    }

    if(keyPressed >= 48 && keyPressed<= 57){
        console.log("Number Key is Press");
        background_noup();
    }


}