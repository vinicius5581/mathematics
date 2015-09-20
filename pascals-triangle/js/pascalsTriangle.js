function isEven(n) {
   return (n % 2 == 0);
}

function printPascal(n){
  var value,
      classLine,
      classValue,
      line;
    
  $("body").append("<div class='pascals-triangle'></div>");
  for (line = 1; line <= n; line++)
  {
    value = 1; 
    classLine = "line" + line;
    
    $(".pascals-triangle").append("<div class='" + classLine + "'></div>");
    classLine = "." + classLine;
    $(classLine).mouseover(alert(line));
    for (var i = 1; i <= line; i++){
      if(isEven(value)){
        classValue = "even";
      }else{
        classValue = "odd";
      }    
      $(classLine).append("<a class='" + classValue + "'>" + value + "</a>"); 
      value = value * (line - i) / i;
    }
  }
}



// 

/*var x =1, y=1;
alert(Math.pow((x+y), 2));*/

//http://rosettacode.org/wiki/Pascal's_triangle
//http://www.geeksforgeeks.org/pascal-triangle/