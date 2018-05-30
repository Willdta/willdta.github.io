$(() => {
  $(window).scroll(function() {
    const skillLink = document.getElementsByClassName('menu')[1].offsetTop + 100
  
    if (window.scrollY > skillLink) {
      $('.landing-link').addClass('toggle-landing-link')
    } else {
      $('.landing-link').removeClass('toggle-landing-link')
    }
  })

  $('.menu').click(function(e) {
    e.preventDefault()

    $('body, html').animate({
      'scrollTop': $(this.hash).offset().top
    }, 1000)
  })
})