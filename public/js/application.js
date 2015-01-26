$(document).ready(function() {

  $('button#show-report-form').click(function() {
    $('#create-report-page').show('slow');
    $(this).hide();
  });

  $('form#')

  $('form#create-report').submit(function(event) {
    event.preventDefault();

    $form = $(event.target);

    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize()
    }).done(function(response) {
      console.log(response);
      $('#create-report-page').hide();
      $('.main-report-display').html(response);
      $('.main-report-display').show('fast');
    });
  });

});

