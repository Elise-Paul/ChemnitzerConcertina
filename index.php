<!doctype HTML>
<HTML>
	<HEAD>
		<script src="jquery-1-10.js"></script>
		<script src="infer_chord.js"></script>
		<script src="concertina.js"></script>
		<style type="text/css">
			.right {
				float:right;
				margin-top:10%;
				margin-right:20%;
			}
			#generate {  	
			  	height: 30px;
  				margin-top: 10%;
			}
			.chord {
				width:90px;
				height:60px;
			}
			.chord .right div {
				width:20px;
			}
			.chord .left div {
				width: 80px;
			}
			.float-left {
				float:left;
			}
			.float-right {
				
				float:right;
			}
			.scale_degree {
				margin-top:10px;
			}
			.left_chords {
				margin-right:50px;
			}
			.chord div {
				font-size:20px;
			}
			.root,.second,.third {
				width:24px;
			}
			#chords {
				margin-top:40px;
			}
		</style>
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
			</select>
			<br />
			<button id="generate">Generate chords and show</button>
			<div id="chords"></div>
			<div id="stats"></div>	
		</div>
		
		<div>
			<?php echo readfile("concertina_guide.html"); ?>
		</div>
	</BODY>
</HTML>