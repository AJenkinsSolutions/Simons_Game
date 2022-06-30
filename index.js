//Game Active
let gameOn = false;
//Tiles Choices
const tiles = ['green', 'red', 'yellow', 'blue'];
// Random pattern of tiles
let pattern = [];
// list of tiles users has clicked
let playerPattern = [];
// number of clicks
let clicks = 0;
let level = 0;


function startGame(){
    gameOn = true;
    // then toggle our game state to True
    $(document).keydown(function(e){game()});
}
function game(){
        console.log('game start')
        playerPattern = [];
        console.log('player pattern', playerPattern)
        changeLevel();
        let currentTile = pattern[level];
        //playsound
        setTimeout(() =>{playSound(currentTile)},1000)
        console.log('current tile', currentTile)
        console.log('current level', level +1);
        playClickSound();
}

function changeLevel(){
    //Change title
    $('#level-title').text('level:' + (level + 1));

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
            animateButton(tile);
}
function animateButton(tile){
    $('#' + tile).addClass('pressed');
            setTimeout( ()=> {
                $('#' + tile).removeClass('pressed');
            }, 100);

}
function playClickSound(){

    $('.btn').click(e => {
        
        let target = e.target.id;
        if(target){
            animateButton(target);
            playSound(target);
            console.log(target);
            playerPattern.push(target);

        }
        
        
        
        // Add click target to player array
        console.log('post clickpattern:', playerPattern)


        if(playerPattern.length == (level+1)){
            console.log('player patten and game pattern are the same length')
            console.log('player pattern:', playerPattern.length);
            //if player patten length and level are equal we can compare our arrays 

            if(checkPattern){
                console.log('next round empty players arrays change level ')
                //Empty player patten
                
                level ++
                playerPattern = [];
                console.log('player array:', playerPattern)
                console.log('level increased', level)
                // now we need to loop again doing all the same thing but the next iteration in our pattern 
                
            }

        }

    })
    return true

}
function checkPattern(){

    for(let i=0; i<=level; i++){
        console.log('start');
        if(playerPattern[i] == pattern[i]){
            console.log('iteration '+ i +  'good' )
    
        }else{
            console.log('iteration '+ i +  'Notgood' )
            gameOn = false;
            // this where we want to end our game
            // add our endgame functionsality
            console.log('Game oveer');
            return false
           
        }
        console.log('end');
    }
    // wont run loop is successful
    console.log('loop ended without failure meaning player completed level');
    // if successful we need to empty the players patten for
    playerPattern = [];
    return true

}

GeneratePattern(5);
startGame();
