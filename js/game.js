"use strict";var timer,timeRemaining=6e4,score=0,playButton=document.getElementById("button"),scoreContainer=document.getElementById("score"),holes=document.querySelectorAll(".hole"),moles=document.querySelectorAll(".mole");playButton.addEventListener("click",function(){setTimeout(function(){for(var e=0;e<holes.length;e++)holes[e].classList.remove("active");alert("Well done, you whacked "+score+" moles!")},timeRemaining);var o=function(){for(var e=Math.floor(Math.random()*holes.length),t=0;t<holes.length;t++)holes[t].classList.remove("active");setTimeout(function(){holes[e].classList.add("active"),setTimeout(function(){o()},500)},Math.ceil(5e3*Math.random()))};o()});for(var i=0;i<moles.length;i++)moles[i].addEventListener("click",function(){score+=1,scoreContainer.innerHTML=score});