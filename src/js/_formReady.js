$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScyUFH0shSRizZX4MeLE1e3isFvJ8XWnjdsM_dPrdDvaAxVUA/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".aobtn-form__end-message").slideDown();
          $(".btn--blue.aobtn-form__btn").fadeOut();
          setTimeout(function() {
            window.location.href = "https://wp126704.wpx.jp/tyukyuEX/dist/thanks/";
          }, 2000);        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});