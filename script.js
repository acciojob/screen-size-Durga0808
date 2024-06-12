//your JS code here. If required.
function updateWindowSize() {
	const width=window.innerWidth;
	const height=window.innerHeight;
	const div=document.getElementById('sizeInfo');
	div.innerHTML=`<h1>Width: ${width}, Height: ${height}</h1>`;
}

updateWindowSize();
window.addEventListener('resize',updateWindowSize);