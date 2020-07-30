function choiceVerif(){
  let plchoice = event.srcElement.id;
  //alert(plchoice);
  let plassign;
  let showresult = document.querySelector('p#result');
  if(plchoice == 'rock'){
    plassign = 'Rock';
  } else if (plchoice == 'paper'){
    plassign = 'Paper';
  } else if (plchoice == 'scissor'){
    plassign = 'Scissor';
  }
  showresult.innerHTML = ` You chose ${plassign}! `;
}
