var notes = ["a","Bb","b","c","c#","d","Eb","e","f","f#","g","g#"];
var patterns = {major:[2,2,1,2,2,2,1],
				minor:[2,1,2,2,1,2,2],
				dorian:[2,1,2,2,2,1,2],
				phrygian:[1,2,2,2,1,2,2],
				lydian:[2,2,2,1,2,2,1],
				mixolydian:[2,2,1,2,2,1,2],
				locrian:[2,1,2,2,1,2,2],
				hungarian_minor:[2,1,3,1,1,3,1]};
$(document).ready(function(){
	$('#show_button').on('click',function(e){
		e.preventDefault();
		click_event('str');
	});
	$("#key").keyup(function(event){
    	if(event.keyCode == 13){
        	$("#show_button").click();
    	}
	});
	$("#generate").on('click',function(){
		click_event('gen');
	});
});

function update_from_string(input_string){
	var notes = input_string.split(' ');
	var len = notes.length;
	var color,
		$el;
	var statistics = {};
	var stat;
	var type = 'major';
	var colors = ["rgb(255,0,0)","rgb(255,127,0)","rgb(255,255,0)",
							  "rgb(127,255,0)","rgb(0,255,255)","rgb(0,127,255)",
							  "rgb(255,0,255)","rgb(255,50,127)","rgb(120,0,100)",
							  "rgb(255,0,0)","rgb(255,127,0)","rgb(255,255,0)",
							  "rgb(127,255,0)","rgb(0,255,255)","rgb(0,127,255)",
							  "rgb(255,0,255)","rgb(255,50,127)","rgb(120,0,100)"];

	type = $("#mode option:selected" ).text();
	get_chords(notes,len,type,colors);
	for (var i = 0 ; i< len ; i ++){
		$('text').each(function( index, value){
			if ($(this).html().toLowerCase() == notes[i].toLowerCase()) {
				stat = $(this).html().toLowerCase();
				if (!(stat in statistics)) {
					statistics[stat] = 1;
				} else {
					statistics[stat]++;
				}
				$el = $(this).prev().prev();

				try{
					color = colors[i];
					$el.attr('fill',color);
				}catch(e) {
					console.log(e);
				}
				
			}
		});
	}
}
function get_dropdown_string(){
	var t = $("#tonic option:selected" ).text();
	var result =t+" ";
	t = notes.indexOf(t);
	var k = $("#mode option:selected" ).text();
	var pattern_parts = patterns[k];
	var pattern_len = pattern_parts.length;
	var start;
	for (var i = 0; i < pattern_len -1; i++){
		t += pattern_parts[i];
		if (t>=12) {
			t -= 12 ;
		}

		result += notes[t] + " ";
	}

	$("#key").val(result);
	return result;
}
function click_event(type){
	clear_fill();
	if (!type=='str') {
		get_dropdown_string();
	}
	var input_string = (type=='str')?$('#key').val():get_dropdown_string();
	update_from_string(input_string);
}

function clear_fill() {
	$('path').each(function(){
		$(this).attr('fill','#fff');
	});
}

