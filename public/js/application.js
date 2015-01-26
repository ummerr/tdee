$(document).ready(function() {

  $('button#show-report-form').click(function() {
    $('#create-report-page').show('slow');
    $(this).hide();
  });

  $('form#create-report').submit(function(event) {
    event.preventDefault();

    $form = $(event.target);

    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize()
    }).done(function(response) {
      console.log(response);
      $('.main-report-display').append(response);
      $('.main-report-display').show('slow');
    });
  });

});

