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
      console.log("monkeys");
    });
  });

    $("#say").submit(function(event) {
    event.preventDefault();

    $form = $(event.target);
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize()
    })
    .done(function(response) {
      $('#grandma_says').html(response).hide();
      $('#grandma_says').fadeIn("slow")
      console.log(response);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  });

});

