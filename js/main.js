const bottomArr = document.querySelector('.bottom')
const menuItems = document.querySelectorAll('.menu')

bottomArr.addEventListener('click', () => {
  bottomArr.classList.toggle('bottom-transform')
  
  if (bottomArr.classList.contains('bottom-transform')) {
    setTimeout(() => {
      menuItems.forEach(item => item.classList.toggle('menu-toggle'))
    }, 1000)
  } else {
    menuItems.forEach(item => item.classList.toggle('menu-toggle'))
  }
})