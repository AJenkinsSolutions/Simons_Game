//Game Active
let gameOn = false;
//Tiles Choices
let tiles = ['green', 'red', 'yellow', 'blue'];
// Random pattern of tiles
let pattern = [];

let level = 0;


function startGame(){
    // then toggle our game state to True
    $(document).keydown( e => { 
        if(!gameOn && e){
            gameOn = true;
            console.log(gameOn);
            //Change title
            $('#level-title').text('level:' + (level + 1));
            //current tile string
            let currentTile = pattern[level];
            //playsound
            playSound(currentTile);
            
            //Animate
            animateButton(currentTile);
            
            // did you click the correct tile or any other tile ?   
            playClickSound();
        }   
        
    });
}
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

function playSound(tile){
    //takes input of current tile 
            let currentSound = new Audio('sounds/'+ tile+'.mp3');
            currentSound.play();
}
function animateButton(tile){
    $('#' + tile).addClass('pressed');
            setTimeout( ()=> {
                $('#' + tile).removeClass('pressed');
            }, 100);

}
function playClickSound(){

    $(document).click( e => {
        let target = e.target.id;
        let targetSound = new Audio('sounds/'+target+'.mp3')
        targetSound.play();
        animateButton(target);
    })
    
}


GeneratePattern(5);
startGame();
