
///////////////////////////////////////////////// WHILE LOOP

// let num = 1;
// while(num <= 10){

// 	console.log(num);
// 	num += 2;

// }


// between -10 and 19

// let num = -10;
// while(num <= 19){

// 	console.log(num);
// 	num += 1;

// }

// all even numbers between 10 and 40

// let num = 10;
// while(num <= 40){

// 	console.log(num);
// 	num += 2;

// }

// let num = 10;
// while(num <= 40){

// 	if (num%2==0) {
// 		console.log(num);
// 	}

// 	num +=1;

// }


// all odd between 300 and 333

// let num = 301;
// while(num <= 333){

// 	console.log(num);
// 	num += 2;

// }

// let num = 300;
// while(num <= 333){

// 	if (num%2==1) {
// 		console.log(num);
// 	}

// 	num +=1;

// }


///////////////////////////////////////////////// DO-WHILE LOOP

// let i = 0;

// do {

// 	console.log(i);
// 	i++

// }while(i < 10)


///////////////////////////////////////////////// FOR LOOP

// for(let count = 0; count < 6; count++){

// 	console.log(count);

// }



// for(let count = -10; count <= 19; count++){

// 	console.log(count);
	
// }


// for(let count = 10; count <= 40; count++){

// 	if (count%2==0) {
// 		console.log(count);
// 	}
	
// }

// for(let count = 300; count <= 333; count++){

// 	if (count%2==1) {
// 		console.log(count);
// 	}
	
// }

////////////////////////////////////////////////////////////////// ACTIVITY

document.getElementById('go').onclick = () => {

	document.getElementById('while').innerHTML = " ";
	document.getElementById('doWhile').innerHTML = " ";
	document.getElementById('for').innerHTML = " ";

	let num1 = parseInt(document.getElementById('num1').value);
	let num2 = parseInt(document.getElementById('num2').value);


	if (parseInt(num1) > parseInt(num2)) {

		alert('Invalid Input!');

	}

//////////////////////////////////////////////////////////////////////////////////

	let w1 = num1;
	let w2 = num2;

	while(w1 <= w2){

		document.getElementById('while').innerHTML += w1 + "<br>";
		w1 ++;
	}

//////////////////////////////////////////////////////////////////////////////////

	let dw1 = num1;
	let	dw2 = num2;

	do {

		document.getElementById('doWhile').innerHTML += dw1 + "<br>";
		dw1++;

	}while(dw1 <= dw2)

//////////////////////////////////////////////////////////////////////////////////

	let f1 = num1;
	let f2 = num2;

	for(f1 ; f1 <= f2; f1++){

		document.getElementById('for').innerHTML += f1 + "<br>";		
	}


}
