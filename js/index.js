const refs = {
     btn: document.querySelector('[data-action="checkTime"]'),
    timeLeft: document.querySelector('.dateLeft')
}
const zeroFirst = (value) => {
    if(value < 10){
        value = '0' + value;
    }
    return value;
}
const currentTime = (hours, minutes, seconds) =>{
const date = new Date();
 hours = date. getHours();
 minutes = date.getMinutes();
 seconds = date.getSeconds();
return `${zeroFirst(hours)} : ${zeroFirst(minutes)} : ${zeroFirst(seconds)}`;
}
 setInterval(function()  {
    let a = document.querySelector('.deteNow');
    a.innerHTML = currentTime();
}, 1000);

const chekTime = () => {
    const d = new Date();
    let h = d.setHours(11,20,00);

alert( h/ 3600*24*1000 - d.getHours());
}

refs.btn.addEventListener('click', chekTime);