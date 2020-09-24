	var canvas = document.getElementById('javaCircle');
	var context = canvas.getContext('2d');
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var radius = 70;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.lineWidth = 5;
	context.strokeStyle = '#3f3f3f';
	context.stroke();

	var can = document.getElementById('javaCircle2');
	var context = can.getContext('2d');

	var percentage = 0.781743; 
	var degrees = percentage * 450.0;
	var radians = degrees * (Math.PI / 180);

	var x = canvas.width / 2;
	var y = canvas.height / 2;
	var r = 70;
	var s = 1.4* Math.PI;

	context.beginPath();
	context.lineWidth = 8;
	context.strokeStyle = '#07c2a3';
	context.arc(x, y, r, s, radians+s, false);

	context.stroke();