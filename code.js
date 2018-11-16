var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');

var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 100;
canvas.height = 100;

var mouse = {x: 0, y: 0};

var ctx_is_done = false;
var ex_shown=false;
/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

/* Drawing on Paint App */
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.strokeStyle = "white";
function setColor(colour){ctx.strokeStyle = colour;}

ctx.lineWidth = 10;
function setSize(size){ctx.lineWidth = size;}

function submitCanvas(DIGIT_LABEL){
  var dataURL = canvas.toDataURL();
  $.ajax({
    type: "POST",
    url: "img_submit.php",
    data: {
      img: dataURL,
      digit: DIGIT_LABEL
    }
    }).done(function(o) {
    console.log(dataURL);
    console.log('submitted to server.');
    ctx_is_done = true;
    $("#success_alert").fadeIn(1000).delay(2000).fadeOut(1000);
    });
  }

function testSVM(){
  document.getElementById("extra").innerHTML= "<h2>SVM Guess: </h2>" + "<img class='loader' src=./loader.gif>"
  var dataURL = canvas.toDataURL();
  $.ajax({
    type: "POST",
    url: "SVM_query.php",
    data: {
       img: dataURL
    },
    success: function (data) {
         console.log(data);
         document.getElementById("extra").innerHTML="<h2>SVM Guess: </h2>" + "<h2>" + data+"</h2>";
     }
  }).done(function(o) {
    console.log(dataURL);
    console.log('saved');
    ctx_is_done = true;
  });
  }

canvas.addEventListener('mousedown', function(e) {
    if (ctx_is_done == true){
      ctx_is_done = false;
      clearCanvas();
    }
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    canvas.addEventListener('mousemove', onPaint, false);
    }, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
    }, false);

var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    };


function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  }


function showSubmitForm(){
$("#form_alert").fadeIn(1000);
}

function toggleExample(){
  if(ex_shown==false){
    $("#example_alert").fadeIn(500);
    ex_shown=true;
  }
  else{
    $("#example_alert").fadeOut(500);
    ex_shown=false;
  }

}

function closeForm(){
  $("#form_alert").fadeOut(500);
}

function validateForm() {
    var x = document.forms["imgSubmitForm"]["inputDigitLabel"].value;
    if(x==""||x<0||x>9){
      console.log("invalid form data.");
      $('#digitForm').tooltip('enable').tooltip('show').tooltip('disable');
      return false
    }
    else{
      $("#form_alert").fadeOut(500);
      submitCanvas(x);
      return true
    }
}
