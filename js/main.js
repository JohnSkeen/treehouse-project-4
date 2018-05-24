lightbox.option({
  'showImageNumberLabel' : false
});

$('input').keyup(function(event) {
    $('a').each(function() {
      if (($(this).attr('data-title')) && ($(this).attr('data-title').toUpperCase().includes(document.getElementById('search').value.toUpperCase()) === true)) {
          $(this).show();
      } else {
          $(this).hide();
      }
    });
});
