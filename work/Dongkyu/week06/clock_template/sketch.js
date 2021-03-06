var hours;
var minutes;
var seconds = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230);
  updateTime();

  textSize(30);
  textFont("Helvetica");

  drawTextClock();

  noStroke();

  drawBarClock();
}

function updateTime() {
  hours = hour();
  if (hours > 12) {
    hours = hours - 12;
  }
  minutes = minute();
  //var sDiff = seconds - second();
  //seconds = seconds - sDiff * 0.1;
  seconds = second();
}

function drawTextClock() {
  fill(0);
  var textX = 30;
  var textY = 60;
  text("Hour: " + hours,       textX, textY );
  fill(0, 102, 153);
  textY = textY + 35;
  text("Minutes: " + minutes,  textX, textY );
  fill(0, 102, 153, 150);
  textY = textY + 35;
  text("Secondes: " + seconds, textX, textY );

}

function drawBarClock() {

  var hourBarWidth   = map(hours, 0, 12, 0, width);
  var minuteBarWidth = map(minutes, 0, 59, 0, width);
  var secondBarWidth = map(seconds, 0, 59, 0, width);

  var barX = 0;
  var barY = 170;
  var barHeight = 230/3;
  fill(40);
  rect(0, barY, hourBarWidth, barHeight);
  fill(80);
  barY = barY + barHeight;
  rect(0, barY, minuteBarWidth, barHeight);
  fill(120)
  barY = barY + barHeight;
  rect(0, barY, secondBarWidth, barHeight);
}
