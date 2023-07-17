let All=document.querySelectorAll("ul.list li");
let all=document.querySelector("ul li.all");
let App=document.querySelector("ul li.App");
let Photo=document.querySelector("ul li.Photo");
let Web=document.querySelector("ul li.code");
let Print=document.querySelector("ul li.design");
let imgs=Array.from(document.querySelectorAll(".row .boxs")) ;
let more=document.querySelector(".more");
let hide=document.querySelector(".hide");
let b=Array.from(document.querySelectorAll(".b")) ;
all.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    all.classList.add("active");
    // imgs.classList.add("block");
    imgs[5].style.cssText="display:block;";
imgs[2].style.cssText="display:block;";
imgs[1].style.cssText="display:block;";
imgs[7].style.cssText="display:block;";
imgs[0].style.cssText="display:block;";
imgs[3].style.cssText="display:block;";
imgs[4].style.cssText="display:block;";
imgs[6].style.cssText="display:block;";
imgs[7].style.cssText="display:block;";
imgs[8].style.cssText="display:block;";
}
App.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    imgs[7].style.cssText="display:none;";
    imgs[0].style.cssText="display:none;";
    imgs[3].style.cssText="display:none;";
    imgs[4].style.cssText="display:none;";
    imgs[6].style.cssText="display:none;";
    // imgs.length=3;
    App.classList.add("active");
imgs[5].style.cssText="display:block;";
imgs[2].style.cssText="display:block;";
imgs[1].style.cssText="display:block;";
}
hide.style.cssText="display:none;";
Photo.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    Photo.classList.add("active");
    imgs[7].style.cssText="display:none;";
    imgs[1].style.cssText="display:none;";
    imgs[2].style.cssText="display:none;";
    imgs[5].style.cssText="display:none;";
    imgs[6].style.cssText="display:block;";
    imgs[2].style.cssText="display:block;";
    imgs[8].style.cssText="display:block;";
}
Web.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    Web.classList.add("active");
    imgs[0].style.cssText="display:none;";
    imgs[2].style.cssText="display:none;";
    imgs[3].style.cssText="display:none;";
    imgs[5].style.cssText="display:none;";
    imgs[4].style.cssText="display:none;";
    imgs[7].style.cssText="display:block;";
    imgs[1].style.cssText="display:block;";
    imgs[2].style.cssText="display:block;";
    imgs[5].style.cssText="display:block;";
}
Print.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    Print.classList.add("active");
    imgs[7].style.cssText="display:none;";
    imgs[1].style.cssText="display:none;";
    imgs[4].style.cssText="display:none;";
    imgs[5].style.cssText="display:none;";
    imgs[6].style.cssText="display:block;";
    imgs[0].style.cssText="display:block;";
    imgs[2].style.cssText="display:block;";
    imgs[3].style.cssText="display:block;";
}
more.onclick=function(){
    b[0].style.cssText="display:block;";
    b[1].style.cssText="display:block;";
    b[2].style.cssText="display:block;";
    b[3].style.cssText="display:block;";
    b[4].style.cssText="display:block;";
hide.style.cssText="display:block;";
}
hide.onclick=function(){
    b[0].style.cssText="display:none;";
    b[1].style.cssText="display:none;";
    b[2].style.cssText="display:none;";
    b[3].style.cssText="display:none;";
    b[4].style.cssText="display:none;";
hide.style.cssText="display:none;";

}