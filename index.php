<!doctype HTML>
<HTML>
	<HEAD>
		<script src="js/jquery-1-10.js"></script>
		<script src="js/infer_chord.js"></script>
		<script src="js/concertina.js"></script>
		<link rel="stylesheet" type="text/css" href="css/concertina_styles.css">
	</HEAD>
	<BODY>
		<div class="right" style="float:right">
			<input style="display:none" id="key" type="text" />
			<button style="display:none" id="show_button">Show</button>
			<br />
			<br />
			<label>Tonic</label>
			<select id="tonic">
				<option>a</option>
				<option>Bb</option>
				<option>b</option>
				<option>c</option>
				<option>c#</option>
				<option>d</option>
				<option>Eb</option>
				<option>e</option>
				<option>f</option>
				<option>f#</option>
				<option>g</option>
				<option>g#</option>
			</select>
			<label>Key</label>
			<select id="mode">
				<option>major</option>
				<option>minor</option>
				<option>dorian</option>
				<option>phrygian</option>
				<option>lydian</option>
				<option>mixolydian</option>
				<option>locrian</option>
				<option>hungarian_minor</option>
			</select>
			<br />
			<button id="generate">Generate chords and show</button>
			<div id="chords"></div>
			<div id="stats"></div>	
		</div>
		
		<div>
			<?php echo readfile("svg/concertina_guide.html"); ?>
		</div>
	</BODY>
</HTML>