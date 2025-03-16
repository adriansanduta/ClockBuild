const secondHandle = document.querySelector('.handle__seconds');
const minuteHandle = document.querySelector('.handle__minutes');
const hourHandle = document.querySelector('.handle__hours');

requestAnimationFrame(setHandles);


function setHandles() {
 const d = new Date();   
 const hour = d.getHours();
 const minutes = d.getMinutes();
 const seconds = d.getSeconds();

 hourHandle.style.transform = `translateX(-50%) rotate(${hour * 30}deg)`;
 minuteHandle.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;    
 secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;

    requestAnimationFrame(setHandles);
}