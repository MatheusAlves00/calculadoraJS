let botoes = document.querySelectorAll('input');
let darkButton = document.querySelector('.dark-btn')
let historyPanel = document.querySelector('.history')

botoes.forEach(function(botao){
  botao.addEventListener("click", function(){
    var display = document.querySelector("#display");

    if (this.value == '='){
      historyPanel.appendChild(createHistoryItem(display.value))
      display.value = eval(display.value);
      historyPanel.appendChild(createHistoryItem(display.value, true))
      historyPanel.scrollTop = historyPanel.scrollHeight
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


function createHistoryItem(text, result = false){
  let node = document.createElement("p");
  if(result){
    textnode = document.createTextNode(`= ${text}`);
  }else{
    textnode = document.createTextNode(text);
  }
  node.appendChild(textnode);

  return node
}
