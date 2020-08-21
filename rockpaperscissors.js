/*variavel global que guarda a escolha do usuario*/
var plassign;
document.querySelector('input#runbtn').disabled = true;
/*variavel global que guarda a escolha do oponente*/
var foeassign;

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
      document.querySelector('input#runbtn').disabled = true;
        let imgtags = document.getElementsByTagName('img');
          for (let i=0; i < imgtags.length; i++){
            imgtags[i].onclick = false;
            //imgtags[i].onclick = choiceVerif();
          }
        let foebattle = document.createElement('img');
        let foechoice = [rock, paper, scissor];
        let foeresult = foechoice[Math.floor(Math.random() * foechoice.length)];
        if (foeresult == rock){
          foeassign = 'Rock';
          foebattle.setAttribute('src', 'img/rock.png');
        } else if (foeresult == paper){
          foeassign = 'Paper';
          foebattle.setAttribute('src', 'img/paper.png');
        } else if (foeresult == scissor){
          foeassign = 'Scissor';
          foebattle.setAttribute('src', 'img/scissor.png');
        }
      document.getElementById('battlesection').appendChild(foebattle);
      foebattle.id += 'foebattle';
        let plbattle = document.createElement('img');
        if (plassign == 'Rock'){
          plbattle.setAttribute('src', 'img/rock.png');
        } else if (plassign == 'Paper'){
          plbattle.setAttribute('src', 'img/paper.png');
        } else if (plassign == 'Scissor'){
          plbattle.setAttribute('src', 'img/scissor.png');
        }
      document.getElementById('battlesection').appendChild(plbattle);
      plbattle.id += 'plbattle';
        let vsbattle = document.createElement('img');
        vsbattle.setAttribute('src', 'img/vs.png');
      document.getElementById('battlesection').appendChild(vsbattle);
      vsbattle.id += 'vsbattle';
      console.log(` ${plassign} vs ${foeassign} `);
      if (plassign == 'Rock' && foeassign == 'Rock'){
        console.log('Its a tie!');
      } else if (plassign == 'Rock' && foeassign == 'Paper'){
        console.log('You lost!');
      } else if (plassign == 'Rock' && foeassign == 'Scissor'){
        console.log('You won!');
      } else if (plassign == 'Paper' && foeassign == 'Rock'){
        console.log('You won!');
      } else if (plassign == 'Paper' && foeassign == 'Paper'){
        console.log('Its a tie!');
      } else if (plassign == 'Paper' && foeassign == 'Scissor'){
        console.log('You lost!');
      } else if (plassign == 'Scissor' && foeassign == 'Rock'){
        console.log('You lost!');
      } else if (plassign == 'Scissor' && foeassign == 'Paper'){
        console.log('You won!');
      } else if (plassign == 'Scissor' && foeassign == 'Scissor'){
        console.log('Its a tie!');
      }

    }

  }
}
