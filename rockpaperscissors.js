/*variavel global que guarda a escolha do usuario*/
var plassign;
document.querySelector('input#runbtn').disabled = true;
/*variavel global que guarda a escolha do oponente*/
var foeassign;
/*variavel global que guarda a pontuação*/
var plscore = 0;
var foescore = 0;
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
  } else if (!document.getElementById('battlesection')) {
      let battlesection = document.createElement('section');
      let battlediv = document.querySelector('body');
      battlesection.id = 'battlesection';
      battlediv.appendChild(battlesection);
      document.querySelector('input#runbtn').disabled = true;
        let imgtags = document.getElementsByTagName('img');
          for (let i=0; i < imgtags.length; i++){
            imgtags[i].onclick = false;
          }
          let pbattle = document.createElement('p');
          document.getElementById('battlesection').appendChild(pbattle);
          let inpbattle = document.createElement('p');
          document.getElementById('battlesection').appendChild(inpbattle)
            let resetbtn = document.createElement('input');
              resetbtn.type = 'button';
              resetbtn.value = 'Play again!';
              resetbtn.onclick = function resetButton(){
                plassign = undefined;
                battlediv.removeChild(battlesection);
                document.querySelector('p#result').innerHTML = '';
                  let imgs = document.getElementsByTagName('img')
                  for (let i=0; i < imgs.length; i++){
                    imgs[i].onclick = function choiceCheck(){
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
                    };
                  }
              }
            inpbattle.appendChild(resetbtn);
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
      if (plassign == 'Rock' && foeassign == 'Rock'){
        pbattle.innerHTML = 'Its a tie!';
      } else if (plassign == 'Rock' && foeassign == 'Paper'){
        pbattle.innerHTML = 'You lost!';
        foescore += 10;
      } else if (plassign == 'Rock' && foeassign == 'Scissor'){
        pbattle.innerHTML = 'You won!';
        plscore += 10;
      } else if (plassign == 'Paper' && foeassign == 'Rock'){
        pbattle.innerHTML = 'You won!';
        plscore += 10;
      } else if (plassign == 'Paper' && foeassign == 'Paper'){
        pbattle.innerHTML = 'Its a tie!';
      } else if (plassign == 'Paper' && foeassign == 'Scissor'){
        pbattle.innerHTML = 'You lost!';
        foescore += 10;
      } else if (plassign == 'Scissor' && foeassign == 'Rock'){
        pbattle.innerHTML = 'You lost!';
        foescore += 10;
      } else if (plassign == 'Scissor' && foeassign == 'Paper'){
        pbattle.innerHTML = 'You won!';
        plscore += 10;
      } else if (plassign == 'Scissor' && foeassign == 'Scissor'){
        pbattle.innerHTML = 'Its a tie!';
      }
      document.querySelector('p#playerp').innerHTML = `Player score: ${plscore}`;
      document.querySelector('p#foep').innerHTML = `Opponent score: ${foescore}`;
    }
  }
