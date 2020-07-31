function choiceVerif(){
  let plchoice = event.srcElement.id;
  //alert(plchoice);
  let plassign;
  let showresult = document.querySelector('p#result');
  let btnobj = document.querySelector('div#btnres')
  if(plchoice == 'rock'){
    plassign = 'Rock';
  } else if (plchoice == 'paper'){
    plassign = 'Paper';
  } else if (plchoice == 'scissor'){
    plassign = 'Scissor';
  }
  showresult.innerHTML = ` You chose ${plassign}! `;
  let btn = document.createElement('button');
  btn.innerHTML = 'Bring it on!';
  btnobj.appendChild(btn);
}
