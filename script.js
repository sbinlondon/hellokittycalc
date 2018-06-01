// Add some snazzy JS to make it an actual calculator!

var display = "";

// if calculated number/entered number is larger than 10 digits, give error message

function error() {
  var length = 10; //length of window p
  if (display.length > length) {
    display = "¯\\_(ツ)_/¯"
    print();
    document.getElementById('window').style.fontSize = "30px";
    alert("Too many numbers!")
  }
}

//change calc window text

function print() {
  document.getElementById('window').textContent = display;
}

// PLUS BUTTON

document.getElementById("plus").addEventListener("click",() => {
      display = "+";
      print();
});

// MINUS BUTTON

document.getElementById("minus").addEventListener("click",() => {
      display = "-";
      print();
});

// DIVIDE BUTTON

document.getElementById("divide").addEventListener("click",() => {
      display = "÷";
      print();
});

// TIMES BUTTON

document.getElementById("times").addEventListener("click",() => {
      display = "x";
      print();
});

// PERIOD

document.getElementById("period").addEventListener("click",() => {
      display += ".";
      print();
      error();
});

// PERIOD

document.getElementById("equals").addEventListener("click",() => {
      print();
      error();
});

// ONE

document.getElementById("one").addEventListener("click",() => {
      display += "1";
      print();
      error();
});

// TWO

document.getElementById("two").addEventListener("click",() => {
      display += "2";
      print();
      error();
});

// THREE

document.getElementById("three").addEventListener("click",() => {
      display += "3";
      print();
      error();
});

// FOUR

document.getElementById("four").addEventListener("click",() => {
      display += "4";
      print();
      error();
});

// FIVE

document.getElementById("five").addEventListener("click",() => {
      display += "5";
      print();
      error();
});

// SIX

document.getElementById("six").addEventListener("click",() => {
      display += "6";
      print();
      error();
});

// SEVEN

document.getElementById("seven").addEventListener("click",() => {
      display += "7";
      print();
      error();
});

// EIGHT

document.getElementById("eight").addEventListener("click",() => {
      display += "8";
      print();
      error();
});

// NINE

document.getElementById("nine").addEventListener("click",() => {
      display += "9";
      print();
      error();
});

// ZERO

document.getElementById("zero").addEventListener("click",() => {
      display += "0";
      print();
      error();
});
