//var all=[];
var all=[

{origin:"asian", type:"veg",time:10,link:"https://www.youtube.com/watch?v=xye54WGqcBM"},
{origin:"asian", type:"veg",time:10,link:"https://www.youtube.com/watch?v=dP7AYsqcT1k"},
{origin:"asian", type:"veg",time:30,link:"https://www.youtube.com/watch?v=fEF0HaBP4as"},
{origin:"asian", type:"veg",time:30,link:"https://www.youtube.com/watch?v=lYDRX83-IRo"},
{origin:"asian", type:"nonveg",time:10,link:"https://www.youtube.com/watch?v=C2CVlvSSFO4"},
{origin:"asian", type:"nonveg",time:10,link:"https://www.youtube.com/watch?v=J6xFRlG5Qxg"},
{origin:"asian", type:"nonveg",time:30,link:"https://www.youtube.com/watch?v=17F3zVsSuyU"},
{origin:"asian", type:"nonveg",time:30,link:"https://www.youtube.com/watch?v=I_6aMZwf9CU"},
{origin:"mideastern", type:"veg",time:10,link:"https://www.youtube.com/watch?v=lkzR-zcWV0Q"},
{origin:"mideastern", type:"veg",time:10,link:"https://www.youtube.com/watch?v=I89iliR0RhU"},
{origin:"mideastern", type:"nonveg",time:10,link:"https://www.youtube.com/watch?v=WMEjf74CF7E"},
{origin:"mideastern", type:"nonveg",time:30,link:"https://www.youtube.com/watch?v=foB6bxhZYF0"},
{origin:"mideastern", type:"nonveg",time:30,link:"https://www.youtube.com/watch?v=IRECUDMZteA"}]
//document.write(final);


function asian(){
	for (const elem of all){
		if (origin=!"asian"){
			var index = all.indexof(elem)
			final.splice(index,1);


		}
	}
}

function europian(){
	for (const elem of all){
		if (origin=!"europian"){
			var index = all.indexof(elem)
			final.splice(index,1);

		}
	}
}

function mideastern(){
	for (const elem of all){
		if (origin=!"mideastern"){
			var index = all.indexof(elem)
			final.splice(index,1);

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

