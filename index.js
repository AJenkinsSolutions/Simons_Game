
//Tiles Choices
const tiles = ['green', 'red', 'yellow', 'blue'];
//Game Active
let gameOn = false;
// Random pattern of tiles
let gamePattern = [];
// list of tiles users has clicked
let playerPattern = [];

let level = 0;

    
// ==========================MainLoop=======================================

    // Event Listeners 
    // Inital KeyDown detection

    $(document).keydown(() => {
        //we only want this option avaible if the game hasnt started yet therefore
        //Change title to current level
        // Invoke next sequence 
        //Change Game state to ON
        if(!gameOn){
            $('#level-title').text('level:' + (level));
            nextSequence();
            gameOn = true; 
        }
    });

    $('.btn').click(function() {
        //Get users chossen click
        //Using 'this' rather than e.id 
        let userColorChoice = $(this).attr("id");
        // console.log('(Debug): userColorChoice:',userColorChoice);
        //push users chossen color to array
        playerPattern.push(userColorChoice);
        console.log('(Debug): PlayerPattern:',playerPattern);

        //play sounds and animate
        playSound(userColorChoice);
        animateButton(userColorChoice);
        //Check out answer 
        checkAnswer(playerPattern.length-1)

    })

function checkAnswer(currentLevel){
    //? title match ??
    if(playerPattern[currentLevel] == gamePattern[currentLevel]){
        //?? both arrays equal length??
        if(playerPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000)
        }

    }else{
        //Play Sound
        //Change background
        //Change Title
        //Remnove Class after Interval
        //Invoke Restart
        playSound('wrong');
        
        $('body').addClass('game-over');
        
        $('#level-title').text('Game Over: Press Any Key to Play Again');
        
        setTimeout(function(){
            $('body').removeClass('game-over');
        }, 500)
        
        restartGame();
    }
}

function nextSequence(){
        //Reassign player Pattern to Empty
        //increment the level
        //Display level
        //Get random index
        //Add tile to game pattern
        //Add Custom Animation
        //Play Sound

        playerPattern = [];
        level ++;
        $('#level-title').text('level:' + (level));
        
        let choiceIndex = Math.floor(Math.random() * tiles.length);
        // console.log('(Debug): choiceIndex: ', choiceIndex);
        let randomTileChoice = tiles[choiceIndex];
        // console.log('(Debug): randomTileChoice:', randomTileChoice);
        gamePattern.push(randomTileChoice);
        // console.log('(Debug): gamepattern:', gamePattern);

        //Vfx, Sfx
        $('#'+randomTileChoice).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomTileChoice);
    }
function animateButton(tile){
        $('#' + tile).addClass('pressed');
        setTimeout(()=> {
            $('#' + tile).removeClass('pressed');
        }, 100);
        }
function playSound(tile){
        let currentSound = new Audio('sounds/'+ tile+'.mp3');
        currentSound.play();
    }
function restartGame(){
    gamePattern = [];
    level = 0; 
    gameOn = false; 
    //We are not actually resetting the game 
    //We resetting all the game variables
    //Therefore our first event listerner will invoke the start of the game now our gameOn varaibles is now false
}