
document.getElementById('navbarButtons').addEventListener('mouseleave', function() {
	deanimateBorder();
});

function animateBorder(item) {
	var border = document.getElementById('navbarItemBorder');
	item.appendChild(border);
	border.style.width = '100%';
}

function deanimateBorder() {
	var border = document.getElementById('navbarItemBorder');
	document.getElementById('navbarButtons').appendChild(border);
	border.style.width = '0';
}