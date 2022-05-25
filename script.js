let digitalElement = document.querySelector('.digital');
let segElement = document.querySelector('.p_seg');
let minElement = document.querySelector('.p_min');
let hourElement = document.querySelector('.p_hour');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;  //relogio digital

    let segDeg = ((360 / 60) * second) - 90;             //360 graus divide por 60 e a cada segundo 6 graus e a cada 10 segundos 60 graus 
    let minDeg = ((360 / 60 ) * minute) - 90;           // -90 eh porque no css os ponteiros ficam na horizontal.
    let hourDeg = ((360 / 12) * hour) - 90;

    segElement.style.transform = `rotate(${segDeg}deg)`; 
    minElement.style.transform = `rotate(${minDeg}deg)`;  
    hourElement.style.transform = `rotate(${hourDeg}deg)`;  
}

function fixZero(time){
      return time < 10 ? `0${time}` : time;   //se time for menor que 10 acrescenta o 0 senao so o time mesmo.
}

setInterval(updateClock, 1000);
updateClock();