// loading
$(".loader").delay(1000).fadeOut("fast");
// open link
function openlink(url) {
	window.open(url, "_blank").focus();
}
// click copy
function copytext(str) {
	const el = document.createElement("textarea");
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand("copy");
	Swal.fire("Thông báo", "Copy thành công!", "success");
}
