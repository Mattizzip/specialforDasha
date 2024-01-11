
const footballer = {
   fullName: 'Cristiano Ronaldo',
   celebrate(sound) {
      console.log(sound);
   },
};

function attackBind() 
{
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
}
function scoreGoalCall(sound) 
{
    console.log(`${this.fullName} забил гол! Вот это да!`);
    this.celebrate(sound);
}
function goToSubstitution(newPlayer) 
{
      console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
}
const attack = attackBind.bind(footballer);
attack();
phrase = "СИИИИИ";
scoreGoalCall.call(footballer, phrase);
const substitute = goToSubstitution.apply(footballer, ["Paulo Dibala"]);



