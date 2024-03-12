// Get UI
const getprogressbar = document.getElementById('progress-bar');


window.onscroll = function(){
	// console.log('hay');

	scrollpoint();
}



function scrollpoint(){
	let getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop); count top to bottom

	let getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight); //count UI height 

	let getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight); //constant height of document

	let calcheight = getscrollheight - getclientheight;
	console.log(calcheight);

	// let getfinal = Math.floor(getscrolltop*100 / calcheight);
	let getfinal = Math.floor((getscrolltop/calcheight)*100);
	// console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;

}


function printme(){

	// console.log("hay");

	window.print();
}