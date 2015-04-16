function get_chords(notes,len,type,colors) {
	var root,
		second,
		third,
		chord;
	var	left_chords='<div class="left_chords float-left">';
	var right_chords ='<div class="right_chords float-right">';
	var cc = [];//chord colors
	var symbols_start = ['I','ii','iii','IV','V','vi','vii'];
	var type_to_degree = {major:'I',dorian:'ii',phrygian:'iii',lydian:'IV',mixolydian:'V',minor:'vi',locrian:'vii'};
	var symbols = [];
	var max = 7;
	var temp;
	for (var i =0 ; i < max; i++){
		if (type_to_degree[type]== symbols_start[i]) {
			var offset = i;
			break;
		}
	}
	for (var k = offset; k< (max + offset);k++){
		temp = k;
		if (temp >6){
			temp = temp - 7;
		}
		symbols.push(symbols_start[temp]);
	}
	for (var i = 0; i < 7;i++){
		cc = [];
		bg = 'style="background-color:';
		root = check_number(i);
		cc[root] = bg+colors[root]+'"';

		second = check_number(root+2);
		cc[second] = bg+colors[second]+'"';

		third = check_number(root+4);
		cc[third] = bg+colors[third]+'"';

		//console.log(symbols[i]+" "+notes[root]+"-"+notes[second]+"-"+notes[third]);
		chord ='<div class="chord">'+
					'<div class="float-left side">'+
						'<div class="scale_degree">'+symbols[root]+'</div>'+
						'<div class="chord_name">'+get_name(symbols[root],notes[root])+'</div>'+
					'</div>'+
					'<div class="float-right side">'+
						'<div class="root" '+cc[root]+'">'+notes[root]+'</div>'+
						'<div class="second" '+cc[second]+'">'+notes[second]+'</div>'+
						'<div class="third" '+cc[third]+'">'+notes[third]+'</div>'+
					'</div>'+
				'</div><br />';

		if (typeof chord !=='undefined') {
			if (i < 4) {
				left_chords+= chord;
			} else {
				right_chords+= chord;
			}
		}
	}
	right_chords += "</div>";
	left_chords +="</div>";
	$('#chords').html(left_chords + right_chords);
	function check_number(i) {
		return (i<7)?i:i-7;
	}
	function get_color_from_note_name(symbol,note){

	}
	function get_name(symbol,note) {
		note = note.charAt(0).toUpperCase() + note.slice(1);
		if (symbol == 'vii') {
			return note + ' Dim'
		} else if ('IV'.indexOf(symbol.charAt(0)) > -1){
			return note + ' Maj';
		} else {
			return note + ' min'
		}
	}
}
