
$(document).ready(function() {

      // Initialize the plugin
      $('#my_popup').popup({transition: 'all 0.3s'});

    });





var bigImg = $('#bigimage')

function swapFirstPic() {
  bigImg.attr('src', 'img/restaurants/flatiron_district/abckitchen.jpg')
}

function swapSecondPic() {
  bigImg.attr('src', 'img/restaurants/flatiron_district/dailyprovisions.jpg')
}

function swapThirdPic() {
  bigImg.attr('src', 'img/restaurants/flatiron_district/gramercytavern.jpg')
}

function swapFourthPic() {
  bigImg.attr('src', 'img/restaurants/flatiron_district/abckitchen.jpg')
}

$('#first').click(swapFirstPic)
$('#second').click(swapSecondPic)
$('#third').click(swapThirdPic)
$('#fourth').click(swapFourthPic)