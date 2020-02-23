var all=[];
var final=[];

var a1 = {origin:"asian", type:"veg",time:10,link:"https://www.youtube.com/watch?v=xye54WGqcBM"};
var Noodles = {origin:"asian", type:"veg",time:10,link:"https://www.youtube.com/watch?v=dP7AYsqcT1k"};
var Egg_rolls = {origin:"asian", type:"veg",time:30,link:"https://www.youtube.com/watch?v=fEF0HaBP4as"};
var Miso_soup = {origin:"asian", type:"veg",time:30,link:"https://www.youtube.com/watch?v=lYDRX83-IRo"};
var Sesame_chicken = {origin:"asian", type:"nonveg",time:10,link:"https://www.youtube.com/watch?v=C2CVlvSSFO4"};
var Chinese_dumplings = {origin:"asian", type:"nonveg",time:10,link:"https://www.youtube.com/watch?v=J6xFRlG5Qxg"};
var Asian_chicken_wings = {origin:"asian", type:"nonveg",time:30,link:"https://www.youtube.com/watch?v=17F3zVsSuyU"};
var Chicken_manchurian = {origin:"asian", type:"nonveg",time:30,link:"https://www.youtube.com/watch?v=I_6aMZwf9CU"};
var Maqloubeh = {origin:"mideastern", type:"veg",time:10,link:"https://www.youtube.com/watch?v=lkzR-zcWV0Q"};
var Mujadara = {origin:"mideastern", type:"veg",time:10,link:"https://www.youtube.com/watch?v=I89iliR0RhU"};
var Musakhan = {origin:"mideastern", type:"nonveg",time:10,link:"https://www.youtube.com/watch?v=WMEjf74CF7E"};
var Falafel = {origin:"mideastern", type:"nonveg",time:30,link:"https://www.youtube.com/watch?v=foB6bxhZYF0"};
var Hummus = {origin:"mideastern", type:"nonveg",time:30,link:"https://www.youtube.com/watch?v=IRECUDMZteA"};
//document.write(final);


function asian(){
	for (const elem of all){
		if (origin=="asian"){
			final.push(elem);
		}
	}
}

function europian(){
	for (const elem of all){
		if (origin=="europian"){
			final.push(elem);
		}
	}
}

function mideastern(){
	for (const elem of all){
		if (origin=="mideastern"){
			final.push(elem);
		}
	}
}

function veg(){
	for (const elem of all){
		if (type=!"veg"){
			var index = all.indexof(elem)
			final.splice(index,1);
		}
	}
}

function nonveg(){
	for (const elem of all){
		if (type=!"nonveg"){
			var index = all.indexof(elem)
			final.splice(index,1);
		}
	}
}

function time10(){
	for (const elem of all){
		if (time=!10){
		var index = all.indexof(elem)
		final.splice(index,1);
		}
	}
}

function time30(){
	for (const elem of all){
		if (time=!30){
		var index = all.indexof(elem)
		final.splice(index,1);		}
	}
}

