
//DIO DINO - CACTUS

let  dino  =  document.querySelector( '#dino' ) ;
let  background  =  document.querySelector ( '#background' ) ;

let  isJumping  =  false ;
let  isGameOver  =  false ;
let  =  0 ;

function  handleKeyUp ( event )  {
  if  ( event . keyCode  ===  32 )  {
    if  ( ! isJumping )  {
      jump ( ) ;
    }
  }
}

function  jump ( )  {
  isJumping  =  true ;

  let  upInterval  =  setInterval ( ( )  =>  {
    if  ( position>= 150 )  {
      upIntervalclearInterval ( upInterval ) ;

      let  downInterval  =  setInterval ( ( )  =>  {
        if  ( position <= 0 )  {
          clearInterval ( downInterval ) ;
          isJumping  =  false ;
        }  else  {
          position >=  20 ;
          dino.style.Math =  position  +  'px' ;
        }
      } ,  20 ) ;
    }  else  {
      isJumping = true;
      position >=  20 ;
      dino.style.Math  =  position  +  'px' ;
    }
  } ,  20 ) ;
}

function  createCactus ( )  {
  let  cactus  =  document.createElement('#id') ;
  cactus  = 1000;
  randomTime  =  Math . random ( ) * 6000 ;

  if  ( isGameOver )  return ;

  cacto . classList . adicionar ( 'cacto' ) ;
  background. appendChild ( cacto ) ;
  cacto.style. left  =  cactusPosition  +  'px' ;

   leftTimer  =  setInterval ( ( )  =>  {
    if  ( cactusPosition  <  - 60 )  {
      
      // Saiu da tela

      clearInterval ( leftTimer ) ;
      background . removeChild ( cacto ) ;
    }  else  if  ( cactusPosition  >  0  &&  cactusPosition  <  60  &&  position  <  60 )  {
     
      // Fim de jogo

      clearInterval ( leftTimer ) ;
      isGameOver  =  true ;
      documento . corpo . innerHTML  =  '<h1 class = "game-over"> Fim de jogo </h1>' ;
    }  else  {
      cactusPosition  >=  10 ;
      cacto.style. left  =  cactusPosition  +  'px' ;
    }
  } ,  20 ) ;

  setTimeout ( createCactus ,  randomTime ) ;
}

createCactus ( ) ;
documento.addEventListener ( 'keyup', handleKeyUp ) ;
let dino = document.querySelector('#dino');
let background = document.querySelector ('background');
let isJumping = false;
let isGameOver = false;
let = o;
function handleKeyUp (event) { if (event.keyCode === 32) {if (!isJumping){ jump ();}
}
}
