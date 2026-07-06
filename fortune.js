var fortunes = [
  "Believe in yourself and all that you are.",
  "Your potential is endless and your future is bright.",
  "Every moment is a fresh beginning waiting to be seized.",
  "Dream big, work hard, and dare to fail.",
  "Opportunities don't just happen, you create them.",
  "Do what you can, with what you have, where you are.",
  "The best way to predict the future is to create it.",
  "You are stronger than you seem, and braver than you believe.",
  "Great things never come from comfort zones.",
  "Success is the courage to continue that counts."
];

var box = document.getElementById("fortune-box");
var text = document.getElementById("fortune-text");

// Pick a random fortune when the page loads
var randomNum = Math.floor(Math.random() * fortunes.length);
text.innerHTML = fortunes[randomNum];

// Button 1 Click
document.getElementById("btn1").onclick = function() {
  box.style.backgroundColor = "#83c650";
  box.style.borderColor = "#2d5a1e";
  text.style.color = "#ffffff";
  text.style.fontSize = "26px";
  text.style.fontFamily = "Georgia, serif";
};

// Button 2 Click
document.getElementById("btn2").onclick = function() {
  box.style.backgroundColor = "#e9e153";
  box.style.borderColor = "#b08a00";
  text.style.color = "#000000";
  text.style.fontSize = "22px";
  text.style.fontFamily = "Arial, sans-serif";
};

// Button 3 Click
document.getElementById("btn3").onclick = function() {
  box.style.backgroundColor = "#5fa8d3";
  box.style.borderColor = "#1f4e79";
  text.style.color = "#ffffff";
  text.style.fontSize = "24px";
  text.style.fontFamily = "'Courier New', Courier, monospace";
};

// Button 4 Click
document.getElementById("btn4").onclick = function() {
  box.style.backgroundColor = "#e76f51";
  box.style.borderColor = "#800000";
  text.style.color = "#ffffff";
  text.style.fontSize = "28px";
  text.style.fontFamily = "'Times New Roman', Times, serif";
};
