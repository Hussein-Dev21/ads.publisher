includeHTML();

$(document).ready(function () {

  setInterval( function() {
    $("#myDiv").load(location.href + " #myDiv");
  }, 9000 );

});
