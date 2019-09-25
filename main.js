// Animate Smooth Scroll
$('#readmore').on('click', function() {
    const text = $('#text').position().top;
  
    $('html, body').animate(
      {
        scrollTop: 500
      },
      1500
    );
  });