let direction = true;
let trigger = 1;
let trigger_name;
let trigger_action;
let prev_trigger_name;
let prev_trigger;
function FirstButton(){
  prev_trigger = trigger;
  Translate();
  document.getElementsByClassName(prev_trigger_name)[0].style.background = "rgba(0,0,0,0)";
  animate({
    duration: 200,
    timing: linear,
    draw: function(progress) {
      document.getElementsByClassName(prev_trigger + "-round")[0].style.border = 10 + -progress * 10 + "px" + " solid #FAB807";
    }
  });
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", trigger_action);
  trigger = 1;
  Prev();
  Translate();
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", "");
  animate({
    duration: 200,
    timing: linear,
    draw: function(progress) {
      document.getElementsByClassName(number + "-round")[0].style.border = progress * 10 + "px" + " solid #FAB807";
    }
  });
  document.getElementsByClassName(trigger_name)[0].style.background = "#FAB807";

}

function OtherButton(number){
  prev_trigger = trigger;
  Translate();
  document.getElementsByClassName(prev_trigger_name)[0].style.background = "rgba(0,0,0,0)";
  animate({
    duration: 200,
    timing: linear,
    draw: function(progress) {
      document.getElementsByClassName(prev_trigger + "-round")[0].style.border = 10 + -progress * 10 + "px" + " solid #FAB807";
    }
  });
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", trigger_action);
  if(trigger < number){
    trigger = number;
    Next();
  } else {
    trigger = number;
    Prev();
  }
  Translate();
  document.getElementsByClassName(trigger_name)[0].setAttribute("onclick", "");
      document.getElementsByClassName(number + "-round")[0].style.border = 10 + "px" + " solid #FAB807";
  document.getElementsByClassName(trigger_name)[0].style.background = "#FAB807";

}
function Next(){

  let Next_slide = document.createElement("div");
  Next_slide.setAttribute("class", "next_slide");
  Next_slide.style.background = "url(img/main-page-"+ trigger +".png) center center / cover";
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
  Prev_slide.style.background = "url(img/main-page-"+ trigger +".png) center center / cover";
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
  trigger_action = "OtherButton(2)";
}
  else  if (trigger == 3) {
  trigger_name = "third-slide";
  trigger_action = "OtherButton(3)";
}
  else  if (trigger == 4) {
  trigger_name = "fourth-slide";
  trigger_action = "OtherButton(4)";
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
let a = 0;
function Hover(number){
  animate({
    duration: 200,
    timing: linear,
    draw: function(progress) {
      document.getElementsByClassName(number + "-round")[0].style.border = progress * 10 + "px" + " solid #FAB807";
      a = progress * 10;
    }
  });
}
function OutHover(number){
  animate({
    duration: 200,
    timing: linear,
    draw: function(progress) {
      document.getElementsByClassName(number + "-round")[0].style.border = a + -progress * a + "px" + " solid #FAB807";
      
    }
  });

}