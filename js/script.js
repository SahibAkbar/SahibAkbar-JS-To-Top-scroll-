let scrollBtn = document.querySelector(".scroll-to-top");

scrollBtn.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // window.scrollTo(0,0)
})

window.addEventListener("scroll",function(){
    
    if(document.documentElement.scrollTop < 300){
        scrollBtn.style.display="none";
    }else{
        scrollBtn.style.display="block";
    }
})



