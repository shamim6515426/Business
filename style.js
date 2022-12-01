var video= document.querySelector(".video");
var palayext= document.querySelector("#palayext");

palayext.addEventListener("click",function(){
     video.classList.toggle('videof');
});




// .bannerimg



var  image= document.querySelector(" #headid");

let images= ["./image/1 (1).jpg", "./image/2.jpg","./image/70.jpg"];
  
 
  
  
  
   setInterval(() => {
    let rat= Math.floor(Math.random() * 3);
     image.src=images[rat];
   }, 1000);



//    haed animaton

var head= document.querySelector(".hradner");
var navbar= document.querySelector(".navbar");

window.addEventListener("scrool",()=>{
     navbar.classList.toggle("sticky",window.scrollY >0);
})