let clickResult = 0;

function resultOfClick(value) {
    $("#progress-line").width(value+"%");
  }
  
function growthValue(value) {
    clickResult = clickResult + value;
    if (clickResult > 100) {
        clickResult = 100
    }
    resultOfClick(clickResult);
    $("p").html(`Прогресс: ${clickResult}%`);
}

function init() {
    $('.button-1').click(function() {
      growthValue(1);
    });
    $('.button-2').click(function() {
      growthValue(3);
    });
    $('.button-3').click(function() {
      growthValue(7);
    });
  }
  
    $(document).ready(init);