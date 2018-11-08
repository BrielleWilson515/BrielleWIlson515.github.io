


var lights = 'on'

function flipTheSwitch () {
  if(lights === 'on') {
     //1. reassign lights to 'off'
    lights = 'off'
    //2. update the DOM / UI
    $("body, button").addClass('dark')
  }
  else {
    lights = 'on'
    $("body, button").removeClass('dark')
  } 
}


$('#light-switch').click(flipTheSwitch)



/*

//Chandlers:
$('#light-switch').click(flipTheSwitch)

function flipTheSwitch() {
  $('body, button').toggleClass('dark')
}



//Baby:
$('#light-switch').click(function() {
  $("body, button").toggleClass('dark');
});

