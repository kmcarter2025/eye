const balls = document.getElementsByClassName('ball');
const eyes = document.getElementsByClassName('eyes')[0]


for(let i = 0; i < 1; i++){
  let eye = document.createElement('div')
  let ball = document.createElement('div')
  eye.classList.add('eye')
  ball.classList.add('ball')

  eye.appendChild(ball)
  eyes.appendChild(eye)
}

document.onmousemove = (event) => {
  console.log(event.clientX,event.clientY,window.innerHeight)
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  

  for (let i = 0; i < balls.length; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }

 
};
