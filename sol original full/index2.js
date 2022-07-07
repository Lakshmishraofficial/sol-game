const laser = document.getElementById("laser");
const asteroid = document.getElementById("astr");
const asteroid2 = document.getElementById("astr2");
const asteroid3 = document.getElementById("astr3");
const asteroid4 = document.getElementById("astr4");
const asteroid5 = document.getElementById("astr5");
const lightyr = document.getElementById("lightyr");
const blast = document.getElementById("blast");

var r = document.querySelector(':root');
const x = document.getElementById("myAudio"); 
const bg = document.getElementById("bgmusic");
bg.play();
function hit(){
    go(100);
    x.play(); 
    randomnumber = Math.floor(Math.random() * 31) + 50 ;
        laser.style.display = "block";
        lightyr.style.marginTop = "-6%";
        blast.style.display="block";
        asteroid.style.display="none";
    //    console.log(randomnumber);

    blast.style.setProperty('--margin-left',randomnumber+"%");
        lightyr.style.animationName ="fire";
        
        setTimeout(() => {
            laser.style.display = "none";
            asteroid.style.display="block";
            blast.style.display="none";
            lightyr.style.animationName = "fly";
          }, 1000);
       
}

function hit2(){
    go(100);
    x.play(); 
    randomnumber = Math.floor(Math.random() * 31) + 50 ;
        laser.style.display = "block";
        lightyr.style.marginTop = "0%";
        laser.style.marginTop = "12%";
        blast.style.display="block";
        blast.style.marginTop="4%";
        asteroid2.style.display="none";
    //    console.log(randomnumber);

    blast.style.setProperty('--margin-left',randomnumber+"%");
        lightyr.style.animationName ="fire";
        
        setTimeout(() => {
            laser.style.display = "none";
            asteroid2.style.display="block";
            blast.style.display="none";
            laser.style.marginTop = "6%";
            blast.style.marginTop="0%";
            lightyr.style.animationName = "fly";
          }, 1000);
       
}

function hit3(){
    go(100);
    x.play(); 
    randomnumber = Math.floor(Math.random() * 31) + 50 ;
        laser.style.display = "block";
        lightyr.style.marginTop = "5%";
        laser.style.marginTop = "17%";
        blast.style.display="block";
        blast.style.marginTop="10%";
        asteroid3.style.display="none";
    //    console.log(randomnumber);

    blast.style.setProperty('--margin-left',randomnumber+"%");
        lightyr.style.animationName ="fire";
        
        setTimeout(() => {
            laser.style.display = "none";
            asteroid3.style.display="block";
            blast.style.display="none";
            laser.style.marginTop = "6%";
            blast.style.marginTop="0%";
            lightyr.style.animationName = "fly";
          }, 1000);
       
}

function hit4(){
    go(100);
    x.play(); 
    randomnumber = Math.floor(Math.random() * 31) + 50 ;
        laser.style.display = "block";
        lightyr.style.marginTop = "13%";
        laser.style.marginTop = "24%";
        blast.style.marginTop="16%";
        blast.style.display="block";
        asteroid4.style.display="none";
    //    console.log(randomnumber);

    blast.style.setProperty('--margin-left',randomnumber+"%");
        lightyr.style.animationName ="fire";
        
        setTimeout(() => {
            laser.style.display = "none";
            asteroid4.style.display="block";
            blast.style.display="none";
            laser.style.marginTop = "6%";
            blast.style.marginTop="0%";
            lightyr.style.animationName = "fly";
          }, 1000);
       
}

function hit5(){
    go(100);
    x.play(); 
    randomnumber = Math.floor(Math.random() * 31) + 50 ;
        laser.style.display = "block";
        lightyr.style.marginTop = "16%";
        laser.style.marginTop = "29%";
        blast.style.marginTop="22%";
        blast.style.display="block";
        asteroid5.style.display="none";
    //    console.log(randomnumber);

    blast.style.setProperty('--margin-left',randomnumber+"%");
        lightyr.style.animationName ="fire";
        
        setTimeout(() => {
            laser.style.display = "none";
            asteroid5.style.display="block";
            blast.style.display="none";
            laser.style.marginTop = "6%";
            blast.style.marginTop="0%";
            lightyr.style.animationName = "fly";
          }, 1000);
       
}

function pause(){
    bg.pause();
    x.pause(); 
    document.getElementById("pause").style.display="none";
    document.getElementById("play").style.display="block";

}

function play(){
    bg.play();
    x.play(); 
    document.getElementById("pause").style.display="block";
    document.getElementById("play").style.display="none";

}

score = 0;

function go(x){
  $({score: 0}).animate({score: x},{
    duration: 1000,
    easing:"linear",
    step: function(now, fx){
      $("#score").html(score + Math.floor(now));
    },
    queue:false,
    complete: function(now, fx){
      score += x;
    }
  });
  $("#tag").fadeIn({
    duration:700,
    easing:"linear",
    step:function(now, fx){
      $(this).css("top", -55 * now  +"px");
    }
  }).fadeOut({
    duration:300,
    step:function(now, fx){
      $(this).css("top",-55 * ( 2 - now) + "px");
    }
  });

}
  