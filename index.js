const items = [...document.querySelectorAll('.circle')]
const list = document.querySelector('.clickeable-circle')
const app = document.getElementById('app');

let menuIsActive = false

items.forEach((element)=>{
  const bgColor = element.getAttribute('data-color');
  element.style.setProperty('background-color',  bgColor)
})


function displayElements(){
  items.forEach((el, idx)=>{
    el.style.transform = `rotate(${((360/items.length)*(idx))}deg) translate(${(-(120+items.length+50))}px)`
  })
}

function hideElements(){
  items.forEach((el, idx)=>{
    el.style.transform = `rotate(${((360/items.length)*(-idx))}deg) translate(0)`
  })
  app.style.setProperty('background-color', 'rgba(114, 17, 108, 0.849)')
}

items.forEach((element)=>{
  element.addEventListener('click', (e)=>{
    const bgColor = getComputedStyle(e.target, null).backgroundColor
    app.style.setProperty('background-color', bgColor)
  })
})

list.addEventListener('click', (e)=>{
  if(!menuIsActive) displayElements()
  else hideElements()
  menuIsActive = !menuIsActive 
  e.target.classList.toggle('active', menuIsActive)
})

