var request = require('request');
const fs = require('fs');
var IDS = require('./IDS.js').IDS


function check(id, cookie) {
	var options = {
		url: 'http://api.live.bilibili.com/activity/v1/SummerDraw/status',
		headers: {
			'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
			'referer': 'http://live.bilibili.com/pages/1702/pixel-drawing',
			'Origin': 'http://live.bilibili.com',
			'Cookie': cookie
		}
	};

	function callback(error, response, body) {
		var b = JSON.parse(body);
		if (b.code == 0) {
			console.info("ID:", id, "剩余时间:", b.data.time)
		} else {
			console.error("ID:", id, " ERROR!\n", body);
		}
	}
	request(options, callback)
}

function checkip(id, cookie) {
	var options = {
		url: 'https://account.bilibili.com/log/GetLoginLog?page=1',
		headers: {
			'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
			'referer': 'https://account.bilibili.com/site/record.html',
			'Cookie': cookie
		}
	};

	function callback(error, response, body) {
		var b = JSON.parse(body);
		if (b.code == 0) {
			var output = "ID：" + id + " 最近登陆记录:"
			if (b.data.result.length >= 5) {
				for(var i = 0; i < 5; i++) {
					output = output + "\nIP: "+b.data.result[i].ip + " 时间：" + b.data.result[i].time_at + " 位置：" + b.data.result[i].geo
				}
			} else {
				for(var i = 0; i < b.data.result.length; i++) {
					output = output + "\nIP: "+b.data.result[i].ip + " 时间：" + b.data.result[i].time_at + " 位置：" + b.data.result[i].geo
				}
			}
			console.info(output)
		} else {
			console.error("ID: " + id + " ERROR!\n", body);
		}
	}
	request(options, callback)
}


function ticka() {
	console.log("\n")
	IDS.forEach((e) => {
		check(e.id, e.cookie)
	})
};

function tickb() {
	IDS.forEach((e) => {
		checkip(e.id, e.cookie)
	})
};
setInterval(ticka, 30000);
//setInterval(tickb, 503000);
ticka();
process.title="Bili Fucker"