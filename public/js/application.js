$(document).ready(function() {

  $('button#show-report-form').click(function() {
    $('#create-report-page').show('slow');
    $(this).hide();
  });

  $('form#create-report').submit(function(event) {
    event.preventDefault();

    $form = $(event.target);

    ajaxRequest = $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize()
    }).done(function(response) {
      $('.all-reports').prepend(response);
    });
  });

});

