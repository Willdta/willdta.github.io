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
      'scrollTop': $(this.hash).offset().top
    }, 1000)
  })

  // Loader //
  
  setTimeout(() => {
    $('body').addClass('toggle-overflow')
    $('.loader').addClass('toggle-loader')
    $('#landing-section > h1').fadeIn()
  }, 1300)

  setTimeout(() => {
    $('#landing-section > ul > li').addClass('toggle-nav')   
  }, 2000)
})