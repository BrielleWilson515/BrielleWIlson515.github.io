 /*
	
	Add .click() handlers for each of the boxes:

	A) Boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out

	B) Boxes #m10, #m20, and #m30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out

	C) #red and #blue should change the background color of #out to red and blue, respectively
	
	D) #out should change the background of #out to white, and set the value back to zero

	HINT: define a variable, var count = 0 outside of any functions. Use this variable to keep track of what to display inside of #out
	Ex: when the user clicks #a10, add 10 to the "count" and then reflect this change in the HTML

	jQuery Methods Needed:
	- .click()
	- .html()
	- .css()

*/

//store variables
var total = 0 


function addTen(){
	//update the value of 'total'. This is called variable Re-assignment
	total = total + 10
	//update the DOM
	$('#out').html(total)

	$('#a10').click(addTen)
}


$('#a20').click(addTwenty)
function addTwenty(){
	total = total + 20
	$('#out').html(total)
}


$('#a30').click(addThirty)
function addThirty(){
	total = total + 30;
	$('#out').html(total);
}

$('#m10').click(minusTen)
function minusTen(){
	total = total - 10;
	$('#out').html(total);
}

$('#m20').click(minusTwenty)
function minusTwenty(){
	total = total - 20;
	$('#out').html(total);
}

$('#m30').click(minusThirty)
function minusThirty(){
	total = total - 30;
	$('#out').html(total);
}


$('#m20').click(changeRed)
function changeRed(){
	$('#out').css('background','red')
}



//reassign total to 0

$('#m20').click(changeWhite)
function changeRed(){
	$('#out').css('background','white')
}

$('#out').click(refresh)
function refresh(){
	total = 0;
	$('#out').html(total)
}






//output
$('#out').html(addTen)
$('#red').click(changeRed)




