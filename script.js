//FULLSCREEN
var fullscreenbtn = document.getElementsByClassName("fullscreen");
fullscreenbtn[0].addEventListener('click', OpenFull);
function OpenFull(){
    if (document.fullscreenElement) {
        document.exitFullscreen();
       } else {
        document.documentElement.requestFullscreen();
       }
}

//DIGITS-ON-OUTPUT
var labels = document.getElementsByTagName("label");
for (let elem of labels) {
  let cinput = elem.getElementsByTagName("input");
  let coutput = elem.getElementsByTagName("output");
  cinput[0].addEventListener('input', (event) => {
    coutput[0].value = cinput[0].value;
    }); 
}

//RESET
var inputs = document.getElementsByTagName("input");
var outputs = document.getElementsByTagName("output");
var reset = document.getElementsByClassName("btn-reset");
reset[0].addEventListener('click', (event) => resetF());

function resetF() {
  for (let i = 0; i < 5; i++) {
    inputs[i].value = 0;
    outputs[i].value = 0;
    if (i === 3) {
      inputs[i].value = 100;
      outputs[i].value = 100;
    }
  const suffix = inputs[i].dataset.sizing || '';
  document.documentElement.style.setProperty(`--${inputs[i].name}`, inputs[i].value + suffix);
  }
}

//IMAGELOADER
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector('.img-container');
fileInput.addEventListener('change', function(e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    imageContainer.innerHTML = "";
    imageContainer.append(img);
  }
  reader.readAsDataURL(file);
  fileInput.value = "";
});

//FILTER
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
var labels = document.getElementsByTagName("label");
for (let elem of labels) {
  let inputs = elem.getElementsByTagName("input");
  for (let e of inputs) {
    e.addEventListener('change', handleUpdate);
    e.addEventListener('mousemove', handleUpdate);
  }
}

//NEXT-BUTTON
const next = document.getElementsByClassName('btn-next');
const image = document.getElementsByTagName('img');
var now = new Date();
let k = 1;
next[0].addEventListener('click', (event) => {
  if (k > 20) k = 1;
  if (now.getHours() >=0 && now.getHours() < 6) {
    if (k < 10) {
      image[0].setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/0'+k+'.jpg');
      k++;
    }
    else {
      image[0].setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/'+k+'.jpg');
      k++;
    }
  }
  if (now.getHours() >=6 && now.getHours() < 12) {
    if (k < 10) {
      image[0].setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/0'+k+'.jpg');
      k++;
    }
    else {
      image[0].setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/'+k+'.jpg');
      k++;
    }
  }
  if (now.getHours() >=12 && now.getHours() < 18) {
    if (k < 10) {
      image[0].setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/0'+k+'.jpg');
      k++;
    }
    else {
      image[0].setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/'+k+'.jpg');
      k++;
    }
  }
  if (now.getHours() >=18 && now.getHours() < 24) {
    if (k < 10) {
      image[0].setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/0'+k+'.jpg');
      k++;
    }
    else {
      image[0].setAttribute('src','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/'+k+'.jpg');
      k++;
    }
  }
});