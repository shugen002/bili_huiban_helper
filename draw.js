var request = require("request");
var url = require('url')
var IDS = require('./IDS.js').IDS;
var user = 0;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line',(input)=>{
	var line=input.split(" ");
	if (line.length==3) {
		draw(parseInt(line[0]),parseInt(line[1]),line[2])
	}else{
		"Error Command"
	}
})

function draw(x, y, color) {
	var using=user;
	var headers = {
		'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
		'referer': 'https://account.bilibili.com/site/record.html',
		'Cookie': IDS[using].cookie
	};
	user++;
	if (user >= IDS.length) {
		user = 0
	};
	var options = {};
	options.url = url.parse("https://api.live.bilibili.com/activity/v1/SummerDraw/draw");
	options.headers = headers;
	options.method = "POST";
	options.form = {
		"x_min": x,
		"y_min": y,
		"x_max": x,
		"y_max": y,
		"color": color
	}
	request(options, (e, r, b) => {
		if(!e){
			console.log("Drawing (",x,",",y,")",color,"with",IDS[using].id,"returned\n",b)
		}else{
			console.log("Drawing (",x,",",y,")",color,"with",IDS[using].id,"hapeen Error\n",e);
		}
	
	})
}