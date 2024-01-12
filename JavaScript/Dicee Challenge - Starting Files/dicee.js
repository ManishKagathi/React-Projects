    
    var randomNumber1 = Math.round((Math.random()* 5)+1);
    var randomDiceeImg = "dice"+randomNumber1+".png";
    var randomImgSrc = "images/" + randomDiceeImg;


    var image1=document.querySelector(".img1");

    image1.setAttribute("src",randomImgSrc);


var randomNumber2 = Math.round((Math.random()* 5)+1);
document.querySelector(".img2").setAttribute("src","images/" + "dice"+randomNumber2+".png");

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Drow...! 🤝";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 won...! 🎉"
}
else{
    document.querySelector("h1").innerHTML="Player2 won...! 🎊"
}