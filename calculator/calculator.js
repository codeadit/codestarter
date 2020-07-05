  
  function number() {
    var clickedNumber = $(event.target).text(); //value of the number you clicked
    var currentResult = $("#result").text(); //value of current result

    trimmedClickedNumber = $.trim(clickedNumber);
    trimmedCurrentResult = $.trim(currentResult);

    $("#result").text(trimmedCurrentResult + trimmedClickedNumber);
  }

  function clear() {
    $("#result").text("0");
  }

  function calculate() {
    var expression = $("#result").text();
    var expressionValue = eval(expression);

    $("#result").text(expressionValue);
  }

  function plusMinus() {
    var resultValue = $("#result").text();

    newResultValue = eval(resultValue * (-1));
    $("#result").text(newResultValue);
  }

  $(".number").click(number);
  $(".clear").click(clear);
  $(".equals").click(calculate);
  $(".changeSign").click(plusMinus);
