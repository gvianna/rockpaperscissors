var plassign;

function choiceVerif(){
  let plchoice = event.srcElement.id;
  let showresult = document.querySelector('p#result');
  if(plchoice == 'rock'){
    plassign = 'Rock';
  } else if (plchoice == 'paper'){
    plassign = 'Paper';
  } else if (plchoice == 'scissor'){
    plassign = 'Scissor';
  }
  showresult.innerHTML = ` You chose ${plassign}! `;
  return plassign;
}

function runButton(){
  alert(plassign);
}
