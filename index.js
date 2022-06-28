
//Game Active
let gameOn = false;
function startGame(){
    // detect user key press
    // then toggle our game state to True
    $(document).keydown( e => { 
        if(e){
            gameOn = true;
            console.log(gameOn);
        } 
    
    } );
    
}


//Tiles Choices
let tiles = ['green', 'red', 'yellow', 'blue'];
// Random pattern of tiles
let pattern = [];
// Generate tile pattern 
function GeneratePattern(size){

for(let i=0; i<size; i++){
//Chose random index
let choiceIndex = Math.floor(Math.random() * tiles.length);
//Get index tile 
switch (choiceIndex) {
    case 0:
        //Append item to array
        pattern.push('green');
        break;
    case 1:
        pattern.push('red');
        break;
    case 2:
        pattern.push('yellow');
        break;
    case 3:
        pattern.push('blue');
        break;
    default:
        break;
}
}
console.log('debug patten Array:', pattern);
}








function Main() {
    startGame()
    //Generate Sequence 
    GeneratePattern(5);

}


Main()