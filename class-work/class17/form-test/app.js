$("#myForm").submit(handleSubmit)

function handleSubmit(event) {
	event.preventDefault()
	var input = $("#name-input").val()

	$("#target").html(input)
}