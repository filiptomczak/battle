console.log("loaded vendor.js");
let INITIALIZE=true;


const btnAttack=document.getElementById("attackBtn");
const btnStrongAttack=document.getElementById("strongAttackBtn");
const btnHeal=document.getElementById("healkBtn");
const btnLog=document.getElementById("logkBtn");

const progressPlayer=document.getElementById("playerHealth");
const progressMonster=document.getElementById("monsterHealth");

function init(playerHP,monsterHP){
    if(INITIALIZE){
        const PLAYER_INITIAL_HP=prompt("set your initial hp");
        const MONSTER_INITIAL_HP=prompt("set monster initial hp");

        if(isNaN(playerHP)||playerHP<=0) playerHP=100;
        if(isNaN(monsterHP)||monsterHP<=0) monsterHP=100;

        progressPlayer.value=playerHP;
        progressPlayer.max=playerHP;
        progressMonster.value=monsterHP;
        progressMonster.max=monsterHP;
    }
    INITIALIZE=false;
}
function handlePlayerAttack(attackValue){
    attackValue=(Math.floor(Math.random()*attackValue)+1);
    progressMonster.value-=attackValue;
    if(progressMonster.value<=0.3*MONSTER_INITIAL_HP)
    console.log(progressMonster.value);
}
function handleMonsterAttack(attackValue){
    attackValue=(Math.floor(Math.random()*attackValue)+1);
    progressPlayer.value-=attackValue;
    console.log(progressPlayer.value);
}
function reset(){
    INITIALIZE=true;
    init
}
