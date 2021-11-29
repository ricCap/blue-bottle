var card = document.querySelector('.card');
card.addEventListener( 'onmouseenter', function() {
  card.classList.toggle('is-flipped');
});
card.addEventListener( 'onmouseleave', function() {
    card.classList.toggle('is-flipped');
  });