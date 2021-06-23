const PLAYER_ATTACK=10;
const PLAYER_STRONG_ATTACK=20;
const MONSTER_ATTACK=15;

const PLAYER_INITIAL_HP=prompt("set your initial hp");
const MONSTER_INITIAL_HP=prompt("set monster initial hp");

init(PLAYER_INITIAL_HP,MONSTER_INITIAL_HP);

function onAttack(){
    handlePlayerAttack(PLAYER_ATTACK);
}
function onStrong(){
    handlePlayerAttack(PLAYER_STRONG_ATTACK);
}
function endRound(){
    monsterAttack();
    let currentMonsterHP=monsterHealthBar.value;
    let currentPlayerHP=playerHealthBar.value;

    if(currentMonsterHP<=0){
        alert("PLAYER WON!");
    }else if(currentPlayerHP<=0){
        alert("MONSTER WON!");
    }else{
        return;
    }
}
function monsterAttack(){
    handleMonsterAttack(monsterAttack);
}
btnAttack.addEventListener('click',onAttack);
btnStrongAttack.addEventListener('click',onStrong);