const viewBox = document.querySelector('.view-box');
const svgCircle = document.querySelector('.view-box circle')

document.body.addEventListener('mousemove', (e)=> {
   viewBox.setAttribute("style", `position:absolute;top:${e.clientY}px; left:${e.clientX}px`)
});