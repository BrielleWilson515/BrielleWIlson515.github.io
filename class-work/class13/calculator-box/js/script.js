 /*

	HINT: define a variable, var count = 0 outside of any functions. Use this variable to keep track of what to display inside of #out
	Ex: when the user clicks #a10, add 10 to the "count" and then reflect this change in the HTML

	jQuery Methods Needed:
	- .click()
	- .html()
	- .css()

*/

//store variables
var total = 0 


function addTen() {
	//update the value of 'total'. This is called variable Re-assignment
	total = total + 10
	//update the DOM
	$('#out').html(total)
}

function addTwenty() {
	total = total + 20
	$('#out').html(total)
}

function addThirty() {
	total = total + 30
	$('#out').html(total)
}

function minusTen() {
	total = total - 10
	$('#out').html(total)
}

function minusTwenty() {
	total = total - 20
	$('#out').html(total)
}

function minusThirty() {
	total = total - 30
	$('#out').html(total)
}



//$('#m20').click(changeRed)

function changeRed() {
	$('#out').css('background','red')
}

function changeBlue() {
	$('#out').css('background','blue')
}



//reassign total to 0 and colors to white

function refresh() {
	$('#out').css('background','white')
	total = 0
	$('#out').html(total)
}






//output
$('#a10').click(addTen)
$('#a30').click(addThirty)
$('#a20').click(addTwenty)
$('#m10').click(minusTen)
$('#m20').click(minusTwenty)
$('#m30').click(minusThirty)
$('#red').click(changeRed)
$('#blue').click(changeBlue)
$('#out').click(refresh)




