var botoes = document.querySelectorAll('input');
var operacao = ''

botoes.forEach(function(botao){
  botao.addEventListener("click", function(){
    var display = document.querySelector("#display");

    if (this.classList.contains('operacao')){
      operacao = this.value;
    }
    
    if (this.value == '='){
      display.value = eval(display.value);
    } else if(this.value == 'C') {
      limpar();
    } else {
      display.value += this.value;
    }

  });
});


function limpar() {
  display.value = "";
}