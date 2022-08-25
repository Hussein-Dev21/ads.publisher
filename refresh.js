includeHTML();

$(document).ready(function () {

  setInterval( function() {
    $("#ads.checktatoo").load(location.href + " #ads.checktatoo");
  }, 9000 );

});
