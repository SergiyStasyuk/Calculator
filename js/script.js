function insrt(num) {
	$(".calc-display").val($(".calc-display").val() + num);
};

function eql() {
	$(".calc-display").val(eval($(".calc-display").val()));
};

function c() {
	$(".calc-display").val("");
};

function del() {
	value = $(".calc-display").val();
	$(".calc-display").val(value.substring(0, value.length - 1));
}

function opp() {
	value = $(".calc-display").val() * -1;
	$(".calc-display").val(value);
}

window.onkeydown = function(event) {
	var e = event;
	switch(e.keyCode) {
		case 13:
		eql();
		break;
		case 8:
		del();
		break;
	}
}