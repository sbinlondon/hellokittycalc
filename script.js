// Add some snazzy JS to make it an actual calculator!

// BUG NEEDING TO BE FIXED: you can enter more than one decimal point in the input. Will fix tomorrow :sleep-emoji:

// REQUEST: add keyboard support so calc can be used that way

var display = "0";

var input = "";

// if calculated number/entered number is larger than 10 digits, give error message and truncate

function error() {
  var length = 10; //length of window p
  if (display.length > length) {
    alert("Too many numbers! My display is so smol ¯\\_(ツ)_/¯");
  input = input.substring(0, input.length-1);
  display = input;
  updateDisplay();
  }
}

//evaluate stored input and return answer - truncate if longer than 10 digits

function evaluate() {
  return eval(input);
}

//clear the display after operators

function clearDisplay () {
  if ((display === "+") || (display === "-") || (display === "x") || (display === "÷") || (display === "0")) {
    display = "";
    console.log(display);
  }
}

//change calc window text

function updateDisplay() {
  document.getElementById('window').textContent = display;
}

// CE (CLEAR ALL) BUTTON

document.getElementById("CE").addEventListener("click",() => {
      display = "0";
      input = "";
      updateDisplay();
});

// C (BACKSPACE) BUTTON

document.getElementById("C").addEventListener("click",() => {
      input = input.substring(0, input.length-1);
      display = input;
      updateDisplay();
});

// PLUS BUTTON

document.getElementById("plus").addEventListener("click",() => {
      display = "+";
      input += "+";
      updateDisplay();
});

// MINUS BUTTON

document.getElementById("minus").addEventListener("click",() => {
      display = "-";
      input += "-";
      updateDisplay();
});

// DIVIDE BUTTON

document.getElementById("divide").addEventListener("click",() => {
      display = "÷";
      input += "/";
      updateDisplay();
});

// TIMES BUTTON

document.getElementById("times").addEventListener("click",() => {
      display = "x";
      input += "*";
      updateDisplay();
});

// PERIOD

document.getElementById("period").addEventListener("click",() => {
      display += ".";
      input += ".";
      updateDisplay();
      error();
});

// EQUALS

document.getElementById("equals").addEventListener("click",() => {
      var answer = evaluate(input);
      answer = answer.toString();
      if (answer.length > 10) {
        answer = answer.substring(0, 10);
      }
      display = answer;
      input = answer;
      updateDisplay();
});

// ONE

document.getElementById("one").addEventListener("click",() => {
      clearDisplay();
      display += "1";
      input += "1";
      updateDisplay();
      error();
});

// TWO

document.getElementById("two").addEventListener("click",() => {
      clearDisplay();
      display += "2";
      input += "2";
      clearDisplay();
      updateDisplay();
      error();
});

// THREE

document.getElementById("three").addEventListener("click",() => {
      clearDisplay();
      display += "3";
      input += "3";
      clearDisplay();
      updateDisplay();
      error();  
});

// FOUR

document.getElementById("four").addEventListener("click",() => {
      clearDisplay();
      display += "4";
      input += "4";
      updateDisplay();
      error();
});

// FIVE

document.getElementById("five").addEventListener("click",() => {
      clearDisplay();
      display += "5";
      input += "5";
      updateDisplay();
      error();  
});

// SIX

document.getElementById("six").addEventListener("click",() => {
      clearDisplay();
      display += "6";
      input += "6";
      updateDisplay();
      error();
});

// SEVEN

document.getElementById("seven").addEventListener("click",() => {
      clearDisplay();
      display += "7";
      input += "7";
      updateDisplay();
      error();
});

// EIGHT

document.getElementById("eight").addEventListener("click",() => {
      clearDisplay();
      display += "8";
      input += "8";
      updateDisplay();
      error();
});

// NINE

document.getElementById("nine").addEventListener("click",() => {
      clearDisplay();
      display += "9";
      input += "9";
      updateDisplay();
      error();
});

// ZERO

document.getElementById("zero").addEventListener("click",() => {
      clearDisplay();
      display += "0";
      input += "0";
      updateDisplay();
      error();
});

