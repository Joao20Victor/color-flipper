const colors = ["#00A8B5", "#FBB901", "#432160","#D4172F", "#0C7094", "#94591B", "#FF00D0","#109401", "#E00C04","#0300E0", "#ffffff", "#000000" ]
const color =document.querySelector(".color")


function trocar(){
   const randomNumber = getRamdomNumber();
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];

}
function getRamdomNumber(){
    return Math.floor(Math.random() * colors.length);
}