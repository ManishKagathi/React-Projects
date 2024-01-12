
// var numberOfDrumButtons=document.querySelectorAll(".drum").length;

// for( let i=0; i<numberOfDrumButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function() {
//        const audio = new Audio(drumSounds(i));
//         audio.play();
//       }
//       )}

// function drumSounds(idx){
//     if(idx === 0){
//         return "sounds/tom-1.mp3";
//     } else if(idx=== 1){
//         return "sounds/tom-2.mp3";
//     } else if(idx=== 2){
//         return "sounds/tom-3.mp3";
//     }else if(idx=== 3){
//         return "sounds/tom-4.mp3";
//     }else if(idx=== 4){
//         return "sounds/snare.mp3";
//     }else if(idx=== 5){
//         return "sounds/crash.mp3";
//     }else if(idx=== 6){
//         return "sounds/kick-bass.mp3";
//     }   
// }



// var numberOfDrumButtons = document.document.querySelectorAll(".drum").length;

// for( let i=0; i<numberOfDrumButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function() {
//        const audio = new Audio(drumSounds(i));
//         audio.play();
//       }
//       )}

//      function drumSounds(idx){
//         switch(idx){
//             case 0: return "sounds/tom-1.mp3";
//             case 1: return "sounds/tom-2.mp3";
//             case 2: return "sounds/tom-3.mp3";
//             case 3: return "sounds/tom-4.mp3";
//             case 4: return "sounds/snare.mp3";
//             case 5: return "sounds/crash.mp3";
//             case 6: return "sounds/kick-bass.mp3";
//         }
//      }



var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML; // this.innerHTML...??
        // var buttonInnerHTML = ((document.querySelectorAll(".drum"))[i].innerHTML);
        console.log(this.innerHTML);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown",function(event){
    makeSound(event.key); // key property of the event
    buttonAnimation(event.key);
})
    

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-4.mp3")
            tom2.play();
            break;
       case "j":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "k":
            var tom2 = new Audio("sounds/crash.mp3")
            tom2.play();
            break;
        case "l":
            var tom2 = new Audio("sounds/kick-bass.mp3")
            tom2.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
        }
        ,100);
}