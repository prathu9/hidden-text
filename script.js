const viewBox = document.querySelector('.view-box');
const svgCircle = document.querySelector('.view-box circle')

document.body.addEventListener('mousemove', (e)=> {
   viewBox.setAttribute("style", `position:absolute;top:${e.clientY}px; left:${e.clientX}px`)
});

document.body.addEventListener('mouseout', (e)=> {
    viewBox.setAttribute("style", `top:-100%; left:-100%`)
 });
