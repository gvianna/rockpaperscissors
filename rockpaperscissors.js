/*variavel global que guarda a escolha do usuario*/
var plassign;

/*verifica a escolha do usuario e exibe na div result*/
function choiceVerif(){
  let plchoice = event.srcElement.id;
  let showresult = document.querySelector('p#result');
  if (plchoice == 'rock'){
    plassign = 'Rock';
  } else if (plchoice == 'paper'){
    plassign = 'Paper';
  } else if (plchoice == 'scissor'){
    plassign = 'Scissor';
  }
  document.querySelector('div#btnres').style.opacity = 1;
  showresult.innerHTML = ` You chose ${plassign}! `;
  return plassign;
}

function runButton(){
  if (plassign === undefined) {
    document.querySelector('div#btnres').disabled = true;
  } else {
    alert (plassign);
  }
}
