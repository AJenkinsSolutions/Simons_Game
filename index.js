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
            $('#level-title').text('level:' + level);
            
            //playsound
            let currentTile = pattern[level];
            console.log(currentTile);
            let currentSound = new Audio('sounds/'+ currentTile+'.mp3');
            currentSound.play();
            //Animate
            $('#' + currentTile).addClass('pressed');
            setTimeout( ()=> {
                $('#' + currentTile).removeClass('pressed');
                
            }, 100);
            

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



GeneratePattern(5);
startGame();
