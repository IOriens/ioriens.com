// function w3_open() {
// 	document.getElementsByClassName("w3-sidenav")[0].style.width = "100%";
// 	document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
// 	document.getElementById("footer1").style.display = "none";
// }
function w3_close() {
	document.getElementById("main").style.marginLeft = "0%";
	document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
	document.getElementsByClassName("w3-opennav")[0].style.display = "inline-block";
	document.getElementById("footer1").style.display = "block";
}

function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.width = "100%";
    // document.getElementsByClassName("w3-sidenav")[0].style.textAlign = "center";
    // document.getElementsByClassName("w3-sidenav")[0].style.fontSize = "50px";
    document.getElementsByClassName("w3-sidenav")[0].style.paddingTop = "5%";
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
    document.getElementsByClassName("w3-sidenav")[0].style.opacity = "1";
}
