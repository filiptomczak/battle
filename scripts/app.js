const PLAYER_ATTACK=10;
const PLAYER_STRONG_ATTACK=20;
const MONSTER_ATTACK=15;
const PLAYER_HEAL=10;

let logHistory=[];

init();
function onLog(){
    console.log(logHistory);
}
function writeToLog(text,value){
    log={
        text:text,
        value:value
    }
    logHistory.push(log);
}
function onHeal(){
    const healValue=handlePlayerHeal(PLAYER_HEAL);
    writeToLog("HEAL",healValue);
}
function onAttack(){
    const attackValue=handlePlayerAttack(PLAYER_ATTACK);
    writeToLog("ATTACK",attackValue);
    endRound();
}
function onStrong(){
    const attackValue=handlePlayerAttack(PLAYER_STRONG_ATTACK);
    writeToLog("STRONG_ATTACK",attackValue);
    endRound();
}
function endRound(){
    monsterAttack();    

    let currentMonsterHP=progressMonster.value;
    let currentPlayerHP=progressPlayer.value;

    if(currentMonsterHP<=0){
        alert("PLAYER WON!");
        writeToLog("PLAYER WON!");
        reset();
    }else if(currentPlayerHP<=0){
        alert("MONSTER WON!");
        writeToLog("MONSTER WON!");
        reset();
    }
}
function monsterAttack(){
    const attackValue=handleMonsterAttack(MONSTER_ATTACK);
    writeToLog("MONSTER_ATTACK",attackValue);
}
btnAttack.addEventListener('click',onAttack);
btnStrongAttack.addEventListener('click',onStrong);
btnHeal.addEventListener('click',onHeal);
btnLog.addEventListener('click',onLog);