console.log("loaded vendor.js");
let INITIALIZE=true;
let PLAYER_INITIAL_HP=100;
let MONSTER_INITIAL_HP=100;
let HEAL_COUNTER=0;

const btnAttack=document.getElementById("attackBtn");
const btnStrongAttack=document.getElementById("strongAttackBtn");
const btnHeal=document.getElementById("healBtn");
const btnLog=document.getElementById("logBtn");

const progressPlayer=document.getElementById("playerHealth");
const progressMonster=document.getElementById("monsterHealth");

function init(){
    if(INITIALIZE){
        PLAYER_INITIAL_HP=prompt("set your initial hp");
        MONSTER_INITIAL_HP=prompt("set monster initial hp");
        HEAL_COUNTER=0;
        btnHeal.classList.remove("deactivateBtn");
        if(isNaN(PLAYER_INITIAL_HP)||PLAYER_INITIAL_HP<=0) PLAYER_INITIAL_HP=100;
        if(isNaN(MONSTER_INITIAL_HP)||MONSTER_INITIAL_HP<=0) MONSTER_INITIAL_HP=100;

        progressPlayer.value=PLAYER_INITIAL_HP;
        progressPlayer.max=PLAYER_INITIAL_HP;
        progressMonster.value=MONSTER_INITIAL_HP;
        progressMonster.max=MONSTER_INITIAL_HP;
    }
    INITIALIZE=false;
}
function handlePlayerAttack(attackValue){
    attackValue=Math.floor(Math.random()*attackValue)+1;
    progressMonster.value-=attackValue;
}
function handlePlayerHeal(healValue){
    if(HEAL_COUNTER<4){
        healValue=Math.floor(Math.random()*healValue)+1;
        progressPlayer.value+=healValue;
        HEAL_COUNTER++;
    }else{
        btnHeal.classList.add("deactivateBtn");
    }
}
function handleMonsterAttack(attackValue){
    attackValue=Math.floor(Math.random()*attackValue)+1;
    progressPlayer.value-=attackValue;
    checkHP(progressPlayer.value);
}
function checkHP(hp){
    if(hp<0.3*PLAYER_INITIAL_HP){
        progressPlayer.classList.add("redHP");
    }else{
        progressPlayer.classList.remove("redHP");
    }
}
function reset(){
    INITIALIZE=true;

    
    init();
}
