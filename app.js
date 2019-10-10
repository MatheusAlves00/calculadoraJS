var botoes = document.querySelectorAll('input');

botoes.forEach(function(botao){
  botao.addEventListener("click", function(){
    var display = document.querySelector("#display");
    
    if (this.value == '='){
      display.value = eval(display.value);
    } else if(this.value == 'C') {
      display.value = '';
    } else {
      display.value += this.value;
    }

  });
});

