console.log('Hello')

const buttonElement = document.querySelector('.click-button')
const bodyElement = document.querySelector('body')
const rootElement = document.querySelector('#root')

buttonElement.innerHTML = 'klikkelj rám'

let darkTheme = false

buttonElement.addEventListener('click', function(){
  console.log('clicked')
  
  darkTheme = !darkTheme
  
  if (darkTheme === true) {
    buttonElement.innerHTML = 'dark theme on'
    bodyElement.classList.add('dark')
  }
  else {
    buttonElement.innerHTML = 'dark theme off'
    bodyElement.classList.remove('dark')
  }
})

setTimeout(function(){
  rootElement.insertAdjacentHTML('beforeend',`<p>Hello World</p>`)
  
  console.log('Hello World')
},6000)