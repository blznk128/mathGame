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
        moveRight()
        generateNumbers()
    } else {
        moveLeft()
    }
}

// sets the img
var imgObj = null;
function right() {
    imgObj = $('#ball')[0];
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

function lose() {
    let pic = $('#ball').position();
    console.log(pic)
    if(pic === pic.left + 0) {
        alert('lose')
    }
}

lose()