let direction = true;
let trigger = 1;
let trigger_name;
let trigger_action;
let prev_trigger_name;
let prev_trigger;
function FirstButton(){
  prev_trigger = trigger;
  Translate();
  animate({
    duration: 500,
    timing: quadEaseOut,
    draw: function(progress) {
      document.getElementsByClassName(prev_trigger_name)[0].style.background = "rgba(0,0,0,0)";
    }
  });
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", trigger_action);
  trigger = 1;
  Prev();
  Translate();
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", "");
  document.getElementsByClassName(trigger_name)[0].style.background = "#FAB807";
}

function SecondButton(){
  prev_trigger = trigger;
  Translate();
  animate({
    duration: 500,
    timing: quadEaseOut,
    draw: function(progress) {
      document.getElementsByClassName(prev_trigger_name)[0].style.background = "rgba(0,0,0,0)";
    }
  });
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", trigger_action);
  if(trigger < 2){
    trigger = 2;
    Next();
  } else {
    trigger = 2;
    Prev();
  }
  Translate();
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", "");
  document.getElementsByClassName(trigger_name)[0].style.background = "#FAB807";

}
function ThirdButton(){
  prev_trigger = trigger;
  Translate();
  animate({
    duration: 500,
    timing: quadEaseOut,
    draw: function(progress) {
      document.getElementsByClassName(prev_trigger_name)[0].style.background = "rgba(0,0,0,0)";
    }
  });
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", trigger_action);
  if(trigger < 3){
    trigger = 3;
    Next();
  } else {
    trigger = 3;
    Prev();
  }
  Translate();
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", "");
  document.getElementsByClassName(trigger_name)[0].style.background = "#FAB807";
}
function FourthButton(){
  prev_trigger = trigger;
  Translate();
  animate({
    duration: 500,
    timing: quadEaseOut,
    draw: function(progress) {
      document.getElementsByClassName(prev_trigger_name)[0].style.background = "rgba(0,0,0,0)";
    }
  });
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", trigger_action);
  if(trigger < 4){
    trigger = 4;
    Next();
  } else {
    trigger = 4;
    Prev();
  }
  Translate();
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", "");
  document.getElementsByClassName(trigger_name)[0].style.background = "#FAB807";
}

function Next(){

  let Next_slide = document.createElement("div");
  Next_slide.setAttribute("class", "next_slide");
  Next_slide.style.background = "url(../img/main-page-"+ trigger +".png) center center / cover";
  document.body.appendChild(Next_slide);
  let Next_slide_container = document.createElement("div");
  Next_slide_container.setAttribute("class", "next_slide_container");
  Next_slide.appendChild(Next_slide_container);
  animate({
    duration: 2000,
    timing: quadEaseOut,
    draw: function(progress) {
      Next_slide.style.left = document.documentElement.clientWidth + -progress * document.documentElement.clientWidth + "px";
    }
  });
  setTimeout(Change, 2000);
}

function Prev(){
  let Prev_slide = document.createElement("div");
  Prev_slide.setAttribute("class", "prev_slide");
  Prev_slide.style.background = "url(../img/main-page-"+ trigger +".png) center center / cover";
  document.body.appendChild(Prev_slide);
  let Prev_slide_container = document.createElement("div");
  Prev_slide_container.setAttribute("class", "prev_slide_container");
  Prev_slide.appendChild(Prev_slide_container);
  animate({
    duration: 2000,
    timing: quadEaseOut,
    draw: function(progress) {
      Prev_slide.style.left = -document.documentElement.clientWidth + progress * document.documentElement.clientWidth + "px";
    }
  });
  setTimeout(Change, 2000);

}
function Change(){
  if($('.next_slide').length > 1){
    let itemForDelete = document.getElementsByClassName('next_slide')[0];
    itemForDelete.parentNode.removeChild(itemForDelete);
  } else if($('.prev_slide').length > 1){
    let itemForDelete = document.getElementsByClassName('prev_slide')[0];
    itemForDelete.parentNode.removeChild(itemForDelete);
  }
}
function Translate(){
  if (trigger == 1) {
  trigger_name = "first-slide";
  trigger_action = "FirstButton()";
}
  else  if (trigger == 2) {
  trigger_name = "second-slide";
  trigger_action = "SecondButton()";
}
  else  if (trigger == 3) {
  trigger_name = "third-slide";
  trigger_action = "ThirdButton()";
}
  else  if (trigger == 4) {
  trigger_name = "fourth-slide";
  trigger_action = "FourthButton()";
}

if (prev_trigger == 1) {
  prev_trigger_name = "first-slide";
}
  else  if (prev_trigger == 2) {
    prev_trigger_name = "second-slide";
}
  else  if (prev_trigger == 3) {
    prev_trigger_name = "third-slide";
}
  else  if (prev_trigger == 4) {
    prev_trigger_name = "fourth-slide";
}
}