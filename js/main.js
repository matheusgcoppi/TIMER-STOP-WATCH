const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const clear = document.querySelector('.clear');
let seconds = 0;
let timer;

function createSeconds(seconds) {
    const date = new Date(seconds * 1000); //because js receive in milliseconds
    return date.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })  
}

function iniciaRelogio() {
    timer = setInterval(()=>{
    seconds++
    clock.innerHTML = createSeconds(seconds)
    },1000)
}

start.addEventListener('click', (e) => {
    clearInterval(timer)
    iniciaRelogio()
    clock.classList.remove('paused');
})

stop.addEventListener('click', (e) => {
    clearInterval(timer);
    clock.classList.add('paused')
})

clear.addEventListener('click', (e) => {
    clearInterval(timer);
    clock.innerHTML = "00:00:00"
    seconds = 0
    clock.classList.remove('paused');
})