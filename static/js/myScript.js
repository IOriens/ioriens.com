function w3_open() {
	document.getElementsByClassName("w3-sidenav")[0].style.width = "100%";
	document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
	document.getElementById("footer1").style.display = "none";
}
function w3_close() {
	document.getElementById("main").style.marginLeft = "0%";
	document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
	document.getElementsByClassName("w3-opennav")[0].style.display = "inline-block";
	document.getElementById("footer1").style.display = "block";
}