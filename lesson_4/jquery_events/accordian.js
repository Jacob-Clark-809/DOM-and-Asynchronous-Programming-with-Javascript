/* global $ */

$(function() {
  let form = $('form');
  form.submit((e) => {
    e.preventDefault();

    let char = $('#key').val();
    $(document).off('keypress').on('keypress', function(e) {
      if (e.key !== char) {
        return;
      }

      $('a').trigger('click');
    });
  });

  $('a').click((e) => {
    e.preventDefault();

    $('#accordion').slideToggle();
  });
});