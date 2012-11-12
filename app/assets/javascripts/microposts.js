$(document).ready(function() {
	$('.letter_count').html(140 - $('#micropost_content').val().length);
});

$('#micropost_content').live({
	keyup: function() {
		$('.letter_count').html(140 - ($('#micropost_content').val().length));
	}
});