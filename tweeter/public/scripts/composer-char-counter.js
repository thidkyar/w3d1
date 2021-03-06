//counter to keep track of character count
$(document).ready(function() {
  $(".textarea").on("input", function(event) {
    const maxLength = 140;
    const valLength = $(this).val().length;
    const $counter = $(this).siblings(".counter");
    let length = maxLength - valLength;
    if (length < 0) {
      $counter.addClass("red-text"); //character turns red if character limit exceeds 140
    } else if (length >= 0) {
      $counter.removeClass("red-text");
    }
    $counter.text(length);
  });
});
