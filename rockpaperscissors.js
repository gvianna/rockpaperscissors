/*variavel global que guarda a escolha do usuario*/
var plassign;
document.querySelector('input#runbtn').disabled = true;

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
  document.querySelector('input#runbtn').disabled = false;
  document.querySelector('div#btnres').style.opacity = 1;
  showresult.innerHTML = ` You chose ${plassign}! `;
  return plassign;
}

function runButton(){
  if (plassign === undefined) {
    alert ('Pick either Rock, Paper or Scissor first!');
  } else {
    alert (plassign);
    if (!document.getElementById('battlesection')) {
      let battlesection = document.createElement('section');
      let battlediv = document.querySelector('body');
      battlesection.id = 'battlesection';
      battlediv.appendChild(battlesection);
      battlesection.innerHTML = ` ${plassign} `;

      document.querySelector('input#runbtn').disabled = true;
      var imgtags = document.getElementsByTagName('img');
        for (var i=0; i < imgtags.length; i++){
          imgtags[i].onclick = false;
          //imgtags[i].onclick = choiceVerif();
        }
    }
  }
}
