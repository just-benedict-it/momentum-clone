const clock = document.querySelector("h2");

clockRenew();

setInterval(clockRenew, 1000);

function clockRenew(){
    const d = new Date();
    const hour = String(d.getHours()).padStart(2,'0');
    const minute = String(d.getMinutes()).padStart(2, '0');
    // const second = String(d.getSeconds()).padStart(2,'0');
    // clock.innerHTML = `${hour}:${minute}:${second}`;
    clock.innerHTML = `${hour}:${minute}`;

}