var botoes = document.querySelectorAll('input');
var operacao = ''

botoes.forEach(function(botao){
  botao.addEventListener("click", function(){
    var display = document.querySelector("#display");

    if (this.classList.contains('operacao') && this.value != '='){
      operacao = this.value;
    }
    
    if (this.value == '='){
      var valores = display.value.split(operacao);
      calcular(valores);
    } else {
      display.value += this.value;
    }

  });
});

function calcular(valores) {
  var num1 = parseFloat(valores[0]);
  var num2 = parseFloat(valores[1]);
  switch (operacao) {
    case '+':
      display.value = num1 + num2;
      break;
    case '-':
      display.value = num1 - num2;
      break;
    case '*':
      display.value = num1 * num2;
      break;
    case '/':
      display.value = num1 / num2;
      break;
    default:
      break;
  }
}