let int1 = Math.floor((Math.random() * 11) +1);
let int2 = Math.floor((Math.random() * 11) +1);
$('#question').text(int1 + ' ' + '+' + int2 + ' ' + '=')

function generateNumbers() {
     int1 = Math.floor((Math.random() * 11) +1);
     int2 = Math.floor((Math.random() * 11) +1);
     $('#question').text(int1 + ' ' + '+' + int2 + ' ' + '=')
}

let hi = () => {
    let answer = parseInt($('#answer').val());
    console.log(int1 + int2)
    if (answer === int1 + int2) {
      $(".block").animate({"left": "+=100px"}, "fast", checkCollisions);
        generateNumbers()
    } else {
        moveLeft()
        $(".block").animate({"left": "-=10px"}, "fast", checkCollisions)
       
    }
}

// sets the img
var imgObj = null;
function right() {
    imgObj = $('.block')[0];
    imgObj.style.left = '700px';
}
// moves the image right or left depending on answer
function moveRight () {
    imgObj.style.left = parseInt(imgObj.style.left) + 125 + 'px';
}

function moveLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 100 + 'px';
    console.log($('#ball').position())
}
right()

function getPositions(box) {
    var square = $(box);
    var pos = square.position();
    var width = square.width();
    var height = square.height();
    return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
  }
          
  function comparePositions(p1, p2) {
    var x1 = p1[0] < p2[0] ? p1 : p2;
    var x2 = p1[0] < p2[0] ? p2 : p1;
    console.log(x1)
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }
  
  function checkCollisions(){
    var box = $(".bomb")[0];
    var splinter = $('.monkey')[0];
    var hey = getPositions(splinter)
    console.log(hey)
    var pos = getPositions(box);
    console.log(this)
    var pos2 = getPositions(this);
    
    var horizontalMatch = comparePositions(pos[0], pos2[0]);
    var verticalMatch = comparePositions(pos[1], pos2[1]);    
    var phase = comparePositions(hey[0], pos2[0])  
    var haze = comparePositions(hey[1], pos2[1])
    var laze = phase && haze;
       
    var match = horizontalMatch && verticalMatch;
    if (laze) { alert('lose') }
    if (match) { alert('crash') }

    
  }

  $("#right").click(function(){
    $(".block").animate({"left": "+=100px"}, "fast", checkCollisions);
  });
  
  // $("#left").click(function(){
  //   $(".block").animate({"left": "-=50px"}, "fast", checkCollisions);
  // });
  
  // $("#up").click(function(){
  //   $(".block").animate({"top": "-=50px"}, "fast", checkCollisions);
  // });
  
  // $("#down").click(function(){
  //   $(".block").animate({"top": "+=50px"}, "fast", checkCollisions);
  // });