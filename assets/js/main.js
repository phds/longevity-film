var videoTitle = {
  1: "An obsession with work and increased productivity",
  2: "The political dream - a construction of conspiracy",
  3: "An illusion of freedom",
  4: "What next? The future of human purpose.",
  5: "A fear of death.",
  6: "An outdated dream/way of working",
  7: "RIP a three stage life",
  8: "Longevity is a conspiracy",
  9: "Conspiracy from a psychological POV",
  10: "What happens when we don’t need to work anymore?",
  11: "The [dairy] industry is shrinking/new language for change",
  12: "Computer therapy",
  13: "Choosing when to be milked",
  14: "Conspiracy as a tool for critical thinking"
}

var videoDescription = {
  1: "We live in a world where we are obsessed with work and increased productivity and efficiency, but is it dangerous to super-charge a system?",
  2: "Our so-called “post-truth world, where politicians are always supposedly conspiring against us, can make us feel out of control and lead us to conspiracy.",
  3: "We’ve always been slaves, slaves to society. But the illusion changes as time changes - the mechanisms for enslavement shift.",
  4: "We’ve been made to fear death throughout history, but in a world subject to increased human lifespans, an unstable job economy (due to automation, precarious work and universal basic income), what next?",
  5: "A fear of death is a form of control. Significant and exponential technological and scientific advances mean we can escape more illnesses and diseases than before, ones that might have otherwise already eliminated us. A fear of death then makes us want to stay alive longer and thus work for longer.",
  6: "\“The American Dream\” is an outdated one and the way we work now certainly isn’t working. Our mindsets are stuck in the outdated belief of a new prosperity embedded in hard work, despite our rapidly changing world.",
  7: "If people living longer and longer lifetimes, over 100, people are going to want to reinvent themselves. A three-stage life of work-education-retirement is no longer feasible or sustainable.",
  8: "They know it is happening, they make it happen, but they don’t seem bothered in stopping it. It’s the greatest conspiracy of all. Longevity is not the gift it’s made out to be, don’t thank advances in science and technology. Longevity is no more than elaborate hoax to milk us of our time, our lives, our money, our assets.",
  9: "Why do we believe in conspiracies? What makes them so appealing?",
  10: "What happens when we don’t need to work anymore? We live in a society that puts the value of hard work above all else, but we live in an economy that has no jobs for us.",
  11: "The working world is shrinking. How can we create new images, stories and language to discuss this serious issue?",
  12: "Creating conspiracy can be an illusion, but sometimes we need illusion to gain control. Fantasy is an easy way to give meaning to the world to cloak our harsh realities with escapist comfort. After all, isn’t that why we surround ourselves with so many screens?",
  13: "In the future of work, we’ll choose when we want to work instead of being forced to work. We innately need to feel of some purpose in the world, we feel as though we must work - if we cannot, we may surely go insane.",
  14: "In an ever automated world, with humankind living longer and longer and there being a great sense of distrust in authorities, what we need is a greater emphasis on critical thinking - that will definitely involve the questioning of those in authority, the questioning of the official version."
}

var videoText = {
  1: "There are certainly other ways of doing things, and what I really don’t like is when you apply business principles to a farming system, in a way that you go “How can we make this more efficient?” That kind of focus that obsession with efficiency with growth with productivity, is really dangerous.",
  2: "If you awaken from this illusion, and you understand that black implies white, self implies other, life implies death — or shall I say, death implies life — you can feel yourself. Not as a stranger in the world, not as something here on probation, not as something that has arrived here by fluke, but you can begin to feel your own existence as absolutely fundamental.",
  3: "We’ve always been slaves, slaves to society. But the illusion changes as time changes - the mechanisms for enslavement shift.",
  4: "Civilisations have always been controlled by authorities spreading fear primarily and confusion because a weakened civilisation that is like in fear and terror is a lot more amenable to control. And a fear of death has always been used to control people.",
  5: "“But why am I so afraid? Why do we all try to outrun our biological clocks?” “It’s a form of control. Significant and exponential technological and scientific advances mean we can escape more illnesses and diseases than before, ones that might have otherwise already eliminated us. A fear of death then makes us want to stay alive longer.”",
  6: "Day breaks in the East! And a mighty army arises - not an army marching to the deep and desolating roar of shells, but a mighty army of builders. The promise of a new prosperity, in a land where that prosperity brings a fuller life to every man who labours and who serves.",
  7: "If people living longer and longer lifetimes, over 100, people are going to want to reinvent themselves.",
  8: "They know it is happening, they make it happen, but they don’t seem bothered in stopping it. It’s the greatest conspiracy of all, using our instincts against us. They play God without permission, and they’re after all of us. Longevity is not the gift it’s made out to be, don’t thank advances in science and technology. Longevity is no more than elaborate hoax to milk us of our time, our lives, our money, our assets.",
  9: "From a psychological point of view, we’re not primarily interested in whether this or that particular conspiracy is true or not. I mean we’re not saying conspiracies don’t actually happen in the real world - clearly they do. But what’s of interest from a psychological point of view is that some people are more prone to believing in conspiracies than others.",
  10: "So what happens to the human spirit when we don’t need to do anything anymore? Some people will still do stuff and create art and stuff but some people will just become really lazy which is quite scary… ",
  11: "The dairy industry is shrinking you see - I’m probably the smallest one left. / So I really think we need to start coming up with new words, and like new concepts, and that will help define new rules and create new social paradigms.",
  12: "Control can be an illusion - it is an illusion. But sometimes you need illusion to gain control. Fantasy is an easy way to give meaning to the world to cloak our harsh realities with escapist comfort. After all, isn’t that why we surround ourselves with so many screens?",
  13: "Yeah so they choose when they want to be milked, so all of the cows will start off in the barn and only when they’ve gone through the voluntary milking system will they be allowed outside. We want to make the system as good as possible, so they want to come round the system and visit the robot.",
  14: "Certainly, that kind of degree of weariness, a questioning of the official views is a healthy thing - it’s something we’ve got to encourage and support in society. What we need is a greater emphasis on critical thinking and to an extent that will definitely involve the questioning of those in authority - the questioning of the official version."
}

function type(querySelector, str, cb, preStringTyped){
  Typed.new(querySelector, {
  	strings: [str],
  	contentType: 'html',
    showCursor: false,
  	cursorChar: "|",
    typeSpeed: 30,
    callback: function(){
      if(cb) {
        cb();
      }
    },
  });
}

var activeTextBoxes = [];

function showTextBox(specificPreview){

  var preview;

  if(!specificPreview){
    var randomPreview = (Math.floor(Math.random()*12) + 1).toString();

    while(activeTextBoxes.includes(randomPreview)){
      randomPreview = (Math.floor(Math.random()*12) + 1).toString();
      if(!activeTextBoxes.includes(randomPreview)){
        break;
      }
    }

    preview = randomPreview;
  }
  else{
    preview = specificPreview;
  }
  if(!activeTextBoxes.includes(preview)){
    activeTextBoxes.push(preview);
  }

  if(activeTextBoxes.length >= 4){
    hideTextBox(activeTextBoxes[0]);
  }

  var el = document.querySelector('#preview-' + preview + ' > .text-box');
  el.style.opacity = 1;
  el.style.top = (Math.floor(Math.random()*51)) + '%';
  el.style.left = (Math.floor(Math.random()*42) + 3) + '%';
  type('#preview-' + preview + ' > .text-box', videoText[preview]);
}

function hideTextBox(preview){
  var el = document.querySelector('#preview-' + preview + ' > .text-box');
  el.style.opacity = 0;
  el.innerHTML = "";
  activeTextBoxes.shift();
}

function closeVideo(){
  var overlay = document.getElementById('overlay');
  overlay.style.display = "none";
}

function showVideo(position){
  var overlay = document.getElementById('overlay');
  var currentVideo = overlay.getElementsByTagName
  var newVideo;
  var oldId;
  if(position == "-1"){
    // oldId = this.id.split('-')[1];
    // newVideo = oldId - 1;
    // if(newVideo == 0){
    //   newVideo = 14;
    // }
    newVideo = 1;
  }
  else if(position == "+1"){

    // newVideo = (oldId + 1) % 14
    newVideo = 6;
  }
  else{
    newVideo = position;
  }

  var video = overlay.getElementsByTagName('video')[0];

  video.addEventListener('mouseover', function() { this.controls = true; }, false);
  video.addEventListener('mouseout', function() { this.controls = false; }, false);

  if(![6,7].includes(newVideo)){
    video.scr = "assets/video/6.mp4";
  }
  else{
    video.src = "assets/video/" + newVideo + ".mp4";
  }
  video.poster = "assets/img/" + newVideo +  ".jpg";

  overlay.getElementsByClassName('title')[0].innerHTML = videoTitle[newVideo];
  overlay.getElementsByClassName('description')[0].innerHTML = videoDescription[newVideo];

  overlay.style.display = "flex";
}

function scrollTo(element, to, duration) {
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };

    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}



document.addEventListener("DOMContentLoaded", function(){

  for (var i = 1; i <= 14; i++) {
    (function(i){
      console.log(i)
      document.querySelector('#preview-' + i + ' > .prev_pic').addEventListener('click', function(e){
        showVideo(i);
      });
      document.querySelector('#preview-' + i + ' > .text-box').addEventListener('click', function(e){
        showVideo(i);
      });
    })(i);
  }

  document.getElementById('scrollme').onclick = function () {
     scrollTo(document.body, 0, 1250);
  }

  setInterval(function(){
    showTextBox();
  }, 10000);

  $('article').hover(function(){
    var id = this.id.split('-')[1];
    if(!activeTextBoxes.includes(id)){
      showTextBox(id);
    }
  });
})
