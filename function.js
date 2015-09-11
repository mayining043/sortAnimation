var S;
var Coordinate_y = 40;
var Coordinate_y1 = 120;
var Coordinate_y2 = 190;
var Rect = new Array();
var Rect1 = new Array();
var Rect2 = new Array();
var track_insert = new Array();
var track_bubble = new Array();
var track_cocktail = new Array();
var cons = 0;
var cons1 = 0;
var cons2 = 0;
var cnt;
var cnt1;
var cnt2;

function func() {

	S = document.getElementsByName("string")[0].value.split("");
	var str = document.getElementsByName("string")[0].value.split("");
	var str1 = document.getElementsByName("string")[0].value.split("");
	var tar = document.getElementsByName("target")[0].value.split("");
	document.getElementById("Result").innerHTML += "初始数据：" + S + "\n";
	for (var i = 0; i < S.length; i++) {
		var rect = {
			x: 30 * i,
			y: Coordinate_y,
			target_x: 30 * i,
			target_y: Coordinate_y,
			text: S[i]
		}
		Rect.push(rect);
		var rect1 = {
			x: 30 * i,
			y: Coordinate_y1,
			target_x: 30 * i,
			target_y: Coordinate_y1,
			text: S[i]
		}
		Rect1.push(rect1);
		var rect2 = {
			x: 30 * i,
			y: Coordinate_y2,
			target_x: 30 * i,
			target_y: Coordinate_y2,
			text: str1[i]
		}
		Rect2.push(rect2);
	}

	insertSort(str);
	bubbleSort(S);
	cocktailSort(str1);
	var loc = binarySearch(str, tar[0]) + 1;
	document.getElementById("Result").innerHTML = "顺序数组：" + str + "\n";
	if (loc <= 0) {
		document.getElementById("Result").innerHTML += "搜索错误：get nothing!";
	} else {
		document.getElementById("Result").innerHTML += "目标位置：" + loc;
	}
}


function binarySearch(arr, key) {
	var low = 0;
	var high = arr.length - 1
	var mid;
	while (low <= high) {
		mid = Math.floor(low + (high - low) / 2);
		if (arr[mid] < key)
			low = mid + 1;
		else if (arr[mid] > key)
			high = mid - 1;
		else
			return mid;
	}
	return -2;
}

function insertSort(arr) {
	var i = 1,
		j, key, temp;
	for (; i < arr.length; i++) {
		j = i;
		key = arr[i];
		while (--j >= 0) {
			if (arr[j] > key) {
				arr[j + 1] = arr[j];
				arr[j] = key;
				track_insert.push(j);
			} else {
				break;
			}
		}
	}
}

function update() {

	if (cons > track_insert.length) {
		return;
	}
	if (cons == 0) {
		cnt = track_insert[cons];
		Rect[cnt].target_x = Rect[cnt + 1].x;
		Rect[cnt + 1].target_x = Rect[cnt].x;
		cons += 1;
		console.log(cnt);
	}
	if (Rect[cnt].x == Rect[cnt].target_x) {
		if (cons == track_insert.length) {
			cons += 1;
			return;
		}
		var tem = Rect[cnt];
		Rect[cnt] = Rect[cnt + 1];
		Rect[cnt + 1] = tem;
		cnt = track_insert[cons];
		Rect[cnt].target_x = Rect[cnt + 1].x;
		Rect[cnt + 1].target_x = Rect[cnt].x;
		cons += 1;
		console.log(cnt);
	} else {
		Rect[cnt].x += 1;
		Rect[cnt + 1].x -= 1;
	}
}

function draw(context) {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);

	for (var i = 0; i < Rect.length; i++) {
		if ((Rect[i].x - Rect[i].target_x) >= 2 || (Rect[i].x - Rect[i].target_x) < -2) {
			context.fillStyle = "yellow";
			context.fillRect(Rect[i].x, Rect[i].y, 25, 25);
			context.fillStyle = "blue";
			context.fillText(Rect[i].text, Rect[i].x + 10, Rect[i].y + 15);
		} else {
			context.strokeStyle = "blue";
			context.strokeRect(Rect[i].x, Rect[i].y, 25, 25);
			context.fillStyle = "blue";
			context.fillText(Rect[i].text, Rect[i].x + 10, Rect[i].y + 15);
		}
	}
	context.fillText("插入排序", 40, 90);
}

function bubbleSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				track_bubble.push(j);
			}
		}
	}
}

function drawBubble(context) {

	for (var i = 0; i < Rect1.length; i++) {
		if ((Rect1[i].x - Rect1[i].target_x) >= 2 || (Rect1[i].x - Rect1[i].target_x) < -2) {
			context.fillStyle = "yellow";
			context.fillRect(Rect1[i].x, Rect1[i].y, 25, 25);
			context.fillStyle = "blue";
			context.fillText(Rect1[i].text, Rect1[i].x + 10, Rect1[i].y + 15);
		} else {
			context.strokeStyle = "blue";
			context.strokeRect(Rect1[i].x, Rect1[i].y, 25, 25);
			context.fillStyle = "blue";
			context.fillText(Rect1[i].text, Rect1[i].x + 10, Rect1[i].y + 15);
		}
	}
	context.fillText("冒泡排序", 40, 170);
}

function updataBubble() {

	if (cons1 > track_bubble.length) {
		return;
	}
	if (cons1 == 0) {
		cnt1 = track_bubble[cons1];
		Rect1[cnt1].target_x = Rect1[cnt1 + 1].x;
		Rect1[cnt1 + 1].target_x = Rect1[cnt1].x;
		cons1 += 1;
		console.log(cnt1);
	}
	if (Rect1[cnt1].x == Rect1[cnt1].target_x) {
		if (cons1 == track_bubble.length) {
			cons1 += 1;
			return;
		}
		var tem = Rect1[cnt1];
		Rect1[cnt1] = Rect1[cnt1 + 1];
		Rect1[cnt1 + 1] = tem;
		cnt1 = track_bubble[cons1];
		Rect1[cnt1].target_x = Rect1[cnt1 + 1].x;
		Rect1[cnt1 + 1].target_x = Rect1[cnt1].x;
		cons1 += 1;
		console.log(cnt1);
	} else {
		Rect1[cnt1].x += 1;
		Rect1[cnt1 + 1].x -= 1;
	}

}

function cocktailSort(arr) {
	var i, left = 0,
		right = arr.length - 1;
	var temp;
	while(left < right) {
		for (i = left; i < right; i++) {
			if (arr[i] > arr[i + 1]) {
				temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				track_cocktail.push(i);
			}
		}
		right--;
		for (i = right; i > left; i--) {
			if (arr[i - 1] > arr[i]) {
				temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
				track_cocktail.push(i - 1);
			}
		}
		left++;
	}
}


function cocktaiUpdate() {

	if (cons2 > track_cocktail.length) {
		return;
	}
	if (cons2 == 0) {
		cnt2 = track_cocktail[cons2];
		Rect2[cnt2].target_x = Rect2[cnt2 + 1].x;
		Rect2[cnt2 + 1].target_x = Rect2[cnt2].x;
		cons2 += 1;
		console.log(cnt2);
	}
	if (Rect2[cnt2].x == Rect2[cnt2].target_x) {
		if (cons2 == track_cocktail.length) {
			cons2 += 1;
			return;
		}
		var tem = Rect2[cnt2];
		Rect2[cnt2] = Rect2[cnt2 + 1];
		Rect2[cnt2 + 1] = tem;
		cnt2 = track_cocktail[cons2];
		Rect2[cnt2].target_x = Rect2[cnt2 + 1].x;
		Rect2[cnt2 + 1].target_x = Rect2[cnt2].x;
		cons2 += 1;
		console.log(cnt2);
	} else {
		Rect2[cnt2].x += 1;
		Rect2[cnt2 + 1].x -= 1;
	}
}

function cocktailDraw(context) {
	//context.clearRect(0, 0, context.canvas.width, context.canvas.height);

	for (var i = 0; i < Rect2.length; i++) {
		if ((Rect2[i].x - Rect2[i].target_x) >= 2 || (Rect2[i].x - Rect2[i].target_x) < -2) {
			context.fillStyle = "yellow";
			context.fillRect(Rect2[i].x, Rect2[i].y, 25, 25);
			context.fillStyle = "blue";
			context.fillText(Rect2[i].text, Rect2[i].x + 10, Rect2[i].y + 15);
		} else {
			context.strokeStyle = "blue";
			context.strokeRect(Rect2[i].x, Rect2[i].y, 25, 25);
			context.fillStyle = "blue";
			context.fillText(Rect2[i].text, Rect2[i].x + 10, Rect2[i].y + 15);
		}
	}
	context.fillText("鸡尾酒排序", 40, 235);
}

function showDemo() {
	var c = document.getElementById("mycanvas");
	c.width = 1000;
	c.height = 250;

	var context = c.getContext("2d");

	setInterval(function() {
		draw(context);
		update();
		drawBubble(context);
		updataBubble();
		cocktailDraw(context);
		cocktaiUpdate()
	}, 35);
}