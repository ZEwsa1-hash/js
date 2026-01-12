function trafficLight() {
  setTimeout(() => {
    setColor('red');
    setTimeout(() => {
      setColor('yellow');
      setTimeout(() => {
        setColor('green');
        trafficLight();
      }, 2000);
    }, 1000);
  }, 3000);
}

function setColor(color) {
  document.querySelectorAll('.traffic-light div')
    .forEach(el => el.style.background = 'gray');

  document.querySelector(`.${color}`).style.background = color;
}

trafficLight();