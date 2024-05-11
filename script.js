let hamburger = document.querySelector(".hamburger");
let cross=document.querySelector(".cross");
console.log(document.querySelectorAll("a"));
let hidden = document.querySelector(".hidden");

console.log("hello")
let var2 = false ;
console.log(var2);
function open(){
    
        
        hidden.style.display="flex";
        cross.style.display="block";
        hamburger.style.display="none";
        

       
    
    
}
function close(){
   
        hidden.style.display="none";
        cross.style.display="none";
        hamburger.style.display="block";

}


hamburger.addEventListener("click" , open);
cross.addEventListener("click",close);