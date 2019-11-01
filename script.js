var btnN = [];

$("#n0").click(function () {
   let n0 = $(this).val();
   $("#show").val(n0);
   $("#show").append(n0);
   btnN += n0;
});

$("#n1").click(function () {
   let n1 = $(this).val();
   $("#show").val(n1);
   $("#show").append(n1);
   btnN += n1;
});
$("#n2").click(function () {
   let n2 = $(this).val();
   $("#show").val(n2);
   $("#show").append(n2);
   btnN += n2;
});

$("#n3").click(function () {
   let n3 = $(this).val();
   $("#show").val(n3);
   $("#show").append(n3);
   btnN += n3;
});

$("#n4").click(function () {
   let n4 = $(this).val();
   $("#show").val(n4);
   $("#show").append(n4);
   btnN += n4;
});

$("#n5").click(function () {
   let n5 = $(this).val();
   $("#show").val(n5);
   $("#show").append(n5);
   btnN += n5;
});

$("#n6").click(function () {
   let n6 = $(this).val();
   $("#show").val(n6);
   $("#show").append(n6);
   btnN += n6;
});
$("#n7").click(function () {
   let n7 = $(this).val();
   $("#show").val(n7);
   $("#show").append(n7);
   btnN += n7;
});

$("#n8").click(function () {
   let n8 = $(this).val();
   $("#show").val(n8);
   $("#show").append(n8);
   btnN += n8;
});
$("#n9").click(function () {
   let n9 = $(this).val();
   $("#show").val(n9);
   $("#show").append(n9);
   btnN += n9;
});

//operations
$("#division").click(function () {
   let div = $(this).val();
   $("#show").val(div);
   $("#show").append(div);
   btnN += div;
});
$("#mult").click(function () {
   let x = $(this).val();
   $("#show").val(x);
   $("#show").append(x);
   btnN += x;
});
$("#plus").click(function () {
   let plus = $(this).val();
   $("#show").val(plus);
   $("#show").append(plus);
   btnN += plus;

});
$("#power").click(function () {
   let n1 = Number(prompt("Digite o primeiro valor"));
   let n2 = Number(prompt("Digite o segundo valor"));
   let resultpow = Math.pow(n1, n2);
   $("#show").append(resultpow);
});

$("#square").click(function () {
   let sqrt = prompt("Digite o valor que deseja saber a raiz quadrada")
   let resultsq = sqrt ** (1 / 2)
   $("#show").append(resultsq);
});
$("#arredon").click(function () {
   if (btnN.length > 0) {
      btnN = Math.round(btnN);
      $("#show").text("");
      //make more sense when you click to round and the exctaly time show the result
      $("#show").append(btnN);
   }
   console.log(arr)
   btnN += arr;
});
$("#mines").click(function () {
   let min = $(this).val();
   $("#show").val(min);
   $("#show").append(min);
   btnN += min;
});
$("#comma").click(function () {
   let comma = $(this).val();
   $("#show").val(comma);
   $("#show").append(comma);
   btnN += comma;
});
//clear the array and the results
$('#clear').focus().click(function () {
   $("#show").text("");
   btnN = [];
});
//show the results
$('#result').click(function () {
   var result = eval(btnN)
   $("#show").val(result)
   $("#show").html(result)
   console.log(result)
});