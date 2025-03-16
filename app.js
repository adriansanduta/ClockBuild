const secondHandle = document.querySelector('.handle__seconds');
const minuteHandle = document.querySelector('.handle__minutes');
const hourHandle = document.querySelector('.handle__hours');

// requestAnimationFrame(setHandles);
setInterval(setHandles, 1000);

function setHandles() {
 const d = new Date();   
 const hour = d.getHours();
 const minutes = d.getMinutes();
 const seconds = d.getSeconds();

 const extraMinutesAngle = seconds * 0.1;
 const minutesAngle = minutes * 6 + extraMinutesAngle;

 const extraHoursAngle = minutes * 0.5;
const hoursHandle = hour * 30 + extraHoursAngle;

 hourHandle.style.transform = `translateX(-50%) rotate(${hoursHandle}deg)`;
 minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;    
 secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;

   // requestAnimationFrame(setHandles);
}