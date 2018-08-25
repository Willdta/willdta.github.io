$(() => {

  // Scroll To Landing Check //

  $(window).scroll(function() {
    const skillLink = document.getElementsByClassName('menu')[1].offsetTop + 500
    
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

  const first = document.querySelector('.first')
  const second = document.querySelector('.second')
  const third = document.querySelector('.third')
  const fourth = document.querySelector('.fourth')
  const next = document.querySelector('.next')
  const prev = document.querySelector('.prev')
  let count = 1

  next.addEventListener('click', () => {
    if (count == 0) {
      fourth.style.left = "57%"
      fourth.style.height = "550px"
      fourth.style.zIndex = 1
      fourth.style.boxShadow = "0 0 0 0"

      first.style.left = "50%"
      first.style.zIndex = 3
      first.style.height = "600px"
      first.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.1)"

      second.style.left = "43%"
      second.style.zIndex = 2

      third.style.left = "43%"
      third.style.zIndex = 1

      count = 1
    } else if (count == 1) {
      first.style.left = "57%"
      first.style.height = "550px"
      first.style.zIndex = 1
      first.style.boxShadow = "0 0 0 0"

      second.style.left = "50%"
      second.style.zIndex = 3
      second.style.height = "600px"
      second.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.1)"

      third.style.left = "43%"
      third.style.zIndex = 2

      fourth.style.left = "43%"
      fourth.style.zIndex = 1

      count = 2
    } else if (count == 2) {
      second.style.left = "57%"
      second.style.height = "550px"
      second.style.zIndex = 1
      second.style.boxShadow = "0 0 0 0"

      third.style.left = "50%"
      third.style.zIndex = 3
      third.style.height = "600px"
      third.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.1)"

      fourth.style.left = "43%"
      fourth.style.zIndex = 2

      first.style.left = "43%"
      first.zIndex = 1

      count = 3
    } else if (count == 3) {
      third.style.left = "57%"
      third.style.height = "550px"
      third.style.zIndex = 1
      third.style.boxShadow = "0 0 0 0"

      fourth.style.left = "50%"
      fourth.style.zIndex = 3
      fourth.style.height = "600px"
      fourth.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.1)"

      first.style.left = "43%"
      first.style.zIndex = 2

      second.style.left = "43%"
      second.style.zIndex = 1

      count = 0
    }
  })

  prev.addEventListener('click', () => {
    if (count == 0) {
      fourth.style.left = "43%"
      fourth.style.height = "550px"
      fourth.style.zIndex = 1
      fourth.style.boxShadow = "0 0 0 0"

      third.style.left = "50%"
      third.style.zIndex = 3
      third.style.height = "600px"
      third.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.1)"

      second.style.left = "57%"
      second.style.zIndex = 2

      first.style.left = "57%"
      first.style.zIndex = 1

      count = 3
    } else if (count == 1) {
      first.style.left = "43%"
      first.style.height = "550px"
      first.style.zIndex = 1
      first.style.boxShadow = "0 0 0 0"

      fourth.style.left = "50%"
      fourth.style.zIndex = 3
      fourth.style.height = "600px"
      fourth.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.1)"

      third.style.left = "57%"
      third.style.zIndex = 2

      second.style.left = "57%"
      second.style.zIndex = 1

      count = 0
    } else if (count == 2) {
      second.style.left = "43%"
      second.style.height = "550px"
      second.style.zIndex = 1
      second.style.boxShadow = "0 0 0 0"

      first.style.left = "50%"
      first.style.zIndex = 3
      first.style.height = "600px"
      first.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.1)"

      third.style.left = "57%"
      third.style.zIndex = 2

      fourth.style.left = "57%"
      fourth.zIndex = 1

      count = 1
    } else if (count == 3) {
      third.style.left = "43%"
      third.style.height = "550px"
      third.style.zIndex = 1
      third.style.boxShadow = "0 0 0 0"

      second.style.left = "50%"
      second.style.zIndex = 3
      second.style.height = "600px"
      second.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.1)"

      first.style.left = "57%"
      first.style.zIndex = 2

      fourth.style.left = "57%"
      fourth.style.zIndex = 1

      count = 2
    }
  })
})