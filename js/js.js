$(document).ready(function () {
    setTimeout(function(){
       $(".ring").fadeOut()
    },1500)
    
});
function size(){
    var texth1 = document.querySelector(".text_h1");
    texth1.style="font-size:3rem";
}
// let text_h1=document.querySelector(".text_h1");
// let fadeAndMove = [
//     {
//     opacity: 0,
//     transform: `translateY(-20px)`,
//     },
//     {
//     opacity: 1,
//     transform: `translateY(0px)`,
//     },
// ];
// let titleTiming = {
//     duration: 1500,
//     easing: "ease-in-out",
// };
// text_h1.animate(fadeAndMove,titleTiming);
    
$(".about-me").click(function(){
    //alert(id);
        var target_top = $(".about-me2").offset().top;
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop:target_top
        },1000)
        
})
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal>=400){
            $(function(){
                $("#text_h1").fadeIn();
                $(".about-me2 p").fadeIn();
            })
        }
    });
})
let width = window.innerWidth;
console.log(width);
if(width>=720){
    setTimeout(function(){
        $(".text_h1").fadeIn(1000);
     },1700)
    setTimeout(function(){
        var allimg=document.getElementsByClassName("a-img");
        for(var img of allimg){
            $(img).css({
                
                "height":"50px",
                "font-size":"35px",
                "transition":"0.5s",
                "overflow":"hidden"
            });
        }
    },3200)
}else if(width<=720){
    setTimeout(function(){
        $(".text_h1").fadeIn(1000,size());
     },1700)
    var navigation = document.querySelector(".navigation");
    navigation.style="font-size:15px";
    var blog=document.querySelector(".blog");
    blog.style="width: 100px";
    var aboutme=document.querySelector(".about-me");
    aboutme.style="width: 100px;right: 100px";
    var home=document.querySelector(".home");
    home.style="width: 150px";
    var img=document.querySelectorAll(".a-img img");
    for(allimg of img){
        allimg.style="width:30px";
    }
    
    var imginside=document.querySelector(".img-inside");
    imginside.style="width:300px";
    setTimeout(function(){
        var allimg=document.getElementsByClassName("a-img");
        for(var img of allimg){
            $(img).css({
                "margin":"10px 40%"
            })
        }
        for(var img of allimg){ 
            $(img).css({
                "display":"flex",
                "justify-content":"left",
                "align-items": "center",
                "height":"40px",
                "font-size":"25px",
                "transition":"0.5s",
                "overflow":"hidden",
                "vertical-align": "center",
                "margin":"10px 10% 10px 30%",   
                "transform": "translateX(10%)"   
            });
        }
        var h1=document.querySelector("#text_h1");
        h1.style="font-size:4rem";
        var p=document.querySelectorAll(".about-me2 p");
        for(var allp of p){
            allp.style="font-size:20px;padding:3px";
        }
    },3200)
}