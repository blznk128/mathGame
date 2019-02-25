let hi = () => {
    let answer = $('#answer').val()
    if (answer === '4') {
        moveRight()
    } else {
        moveLeft()
    }
}

// 
var imgObj = null;
function right() {
    imgObj = $('#ball')[0];
    imgObj.style.position= 'absolute'; 
    imgObj.style.left = '700px';
    imgObj.style.right = '700px';
}

function moveRight () {
    imgObj.style.left = parseInt(imgObj.style.left) + 30 + 'px';
    console.log(imgObj.style.left)
}
// 
right()

function moveLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 30 + 'px';
    console.log(imgObj.style.right)
}
