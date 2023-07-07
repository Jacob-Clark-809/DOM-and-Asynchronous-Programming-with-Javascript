/* global $ */

$(function () {
  let $p = $("p");
  let OUTPUT = "Your favourite fruit is ";

  $("a").click(function(event) {
    event.preventDefault();
    let $anchor = $(this);
    $p.text(OUTPUT + $anchor.text());
  });

  $("form").submit(function (event) {
    event.preventDefault();
    let $input = $(this).find("input[type=text]");
    $p.text(OUTPUT + $input.val());
  });
});