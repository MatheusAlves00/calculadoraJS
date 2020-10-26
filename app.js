let botoes = document.querySelectorAll('input');
let darkButton = document.querySelector('.dark-btn')

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

darkButton.addEventListener('click', (e) => {
  document.documentElement.classList.toggle('dark-mode')
  e.target.classList.toggle('dark-mode')
})
