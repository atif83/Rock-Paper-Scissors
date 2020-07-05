
const choices = document.querySelectorAll('.choice');
 const score = document.getElementById('score');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');
const modal1 = document.getElementById('modal1');
const rules = document.getElementById('btn-rules');
const close = document.getElementById('close');
const modal3 = document.getElementById('modal3');

const scoreboard = {
  player:12,
  computer: 0
};
 const left = document.getElementById('left');

 const userchoice =document.getElementById('choices');
 choices.forEach(button =>{
button.addEventListener('click',()=>{

console.log(button.id);
 userchoice.style.display = 'none';
modal.style.display = 'inline-block';
  const computerChoice = getComputerChoice();
 console.log(computerChoice);
left.innerHTML = `
 <div  id="${button.id}" class="choice">
 
 <h1>You Picked</h1>
 <br>
     
        <span class="circle "> <img src="images/icon-${button.id}.svg"> </span>
   </div>
   <div  id="${computerChoice}" class="choice">
 
   <h1>Computer Picked</h1>
      <br> 
   <span class="circle "> <img  src="images/icon-${computerChoice}.svg"> </span></div>`;
   const winner = getWinner(button.id, computerChoice);
   console.log(winner);
    showWinner(winner, computerChoice,button.id);

 
});

 });
 
// Get computers choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get game winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice,buttonid) {

modal.style.display='none';
modal1.style.display = 'inline-block';

  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = `
    <div class="mid">
 <h3>You Picked</h3>

 <div  id="${buttonid}" class="choice">
 
      <span    class="circle "> <img  src="images/icon-${buttonid}.svg"> </span>
     </div>
     </div>
    <div class="mid">  <h1 class="text-win">You<br> Win</h1>
      <button id="restart" class="restart-btn">Play Again</button>
      </div>
       <div class="mid">
<h3>House Picked</h3>
      <div  id="${computerChoice}" class="choice">
 
     
       <span class="circle"> <img src="images/icon-${computerChoice}.svg"> </span>
       </div></div>  `;
  } else if (winner === 'computer') {
    // Inc computer score
    scoreboard.player--;
    // Show modal result
    result.innerHTML = `
    <div class="mid">
 <h3>You Picked</h3>

     <div  id="${buttonid}" class="choice">
   

    <span     class="circle "> <img  src="images/icon-${buttonid}.svg"> </span></div>
</div>      <div class="mid">  <h1 class="text-lose">You <br>Lose</h1>
         <button id="restart" class="restart-btn">Restart Game</button>
     </div> 
 <div class="mid">
<h3>House Picked</h3>
     <div  id="${computerChoice}" class="choice">
       

       <span class="circle"> <img src="images/icon-${computerChoice}.svg"> </span>
       </div>
       </div>
    `;
  } else {
    result.innerHTML = `
 
<div class="mid">
 <h3>You Picked</h3>

    <div  id="${buttonid}" class="choice">
 

    <span class="circle "> <img  src="images/icon-${buttonid}.svg"> </span></div>
    </div>
     <div class="mid"> <h1>It's A <br>Draw</h1>
      <button id="restart" class="restart-btn">Play Again</button>
      </div>
      <div class="mid">
<h3>House Picked</h3>
 
      <div  id="${computerChoice}" class="choice">
   
       <span class="circle"> <img src="images/icon-${computerChoice}.svg"> </span>
       </div>  </div>  `;
  }
  // Show score
  score.innerHTML = `
    <h1  >Score</h1>

    <p> ${scoreboard.player}</p>
        `;

  modal1.style.display = 'block';
  const restart = document.getElementById('restart');
restart.addEventListener('click',()=>{
    modal1.style.display='none';
       modal.style.display = 'none';
userchoice.style.display='inline-flex';

});
}

// Restart game
 
   
//choices.forEach(choice => choice.addEventListener('click', play));
//window.addEventListener('click', clearModal);
rules.addEventListener('click',()=>{
    modal3.style.display='flex';
});
close.addEventListener('click',()=>{
    modal3.style.display='none';
});

