$(() => {

  // Scroll To Landing Check //

  $(window).scroll(function() {
    const skillLink = document.getElementsByClassName('menu')[1].offsetTop + 100
    
    if (window.scrollY > skillLink) {
      $('.landing-link').addClass('toggle-landing-link')
    } else {
      $('.landing-link').removeClass('toggle-landing-link')
    }
  })
  
  // Link Navigation Animation //
  
  $('.menu').click(function(e) {
    e.preventDefault()

    $('body, html').animate({
      scrollTop: $(this.hash).offset().top - 20
    }, 1000)
  })

  // Animation to Landing Section //

  $('.landing-menu').click(function(e) {
    e.preventDefault()

    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
  })

  // Loader, Landing Animation //
  
  setTimeout(() => {
    $('body').addClass('toggle-overflow')
    $('.loader').addClass('toggle-loader')
    $('#landing-section > h1').fadeIn()
  }, 1300)

  setTimeout(() => {
    $('#landing-section > ul > li').addClass('toggle-nav')   
  }, 2000)

  // Project Slideshow

  const content = document.querySelectorAll('.child')
  const next = document.querySelector('.next')
  const prev = document.querySelector('.prev')
  let index = 0

  const reset = () => {
    for (item of content) {
      item.style.display = 'none'
      item.style.left = '50%'
    }
  }

  const firstImage = () => {
    reset()

    content[index].style.display = 'block'
  }

  firstImage()

  const nextImage = () => {
    reset()
    content[index + 1].style.display = 'block'
    content[index + 1].classList.remove('fadeInRight')
    content[index + 1].classList.add('pulse')
    index++
  }

  const prevImage = () => {
    reset()
    content[index - 1].style.display = 'block'
    content[index - 1].classList.remove('fadeInLeft')
    content[index - 1].classList.add('pulse')
    index--
  }

  next.addEventListener('click', () => {
    if (index === content.length - 1) {
      index = -1
    }

    nextImage()
  })

  prev.addEventListener('click', () => {
    if (index === 0) {
      index = content.length
    }

    prevImage()
  })
})