import { useState,useEffect } from 'react'
import './App.css'
//import {StartPage} from './pages/StartPage.jsx'
//import {GameboardPage} from './pages/GameboardPage'
// import {Footer} from './components/Footer.jsx'
//import {LoadingPage} from './pages/LoadingPage.jsx'
import characters from './characters.js'
//import Sound from './components/Sound.jsx'
//import backgroundMusic from './assets/backgroundMusic.mp3'
import MatchGamePage from './pages/MatchGamePage.jsx'

function App() {
  const [isLoadingOver,setIsLoadingOver] = useState(false);
  const [difficultyLevel,setDifficultyLevel] = useState([]);
  const [charactersToPlayWith,setCharactersToPlayWith] = useState([]);
  const [charactersToDisplay,setCharactersToDisplay] = useState([])
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);
  const [isSoundPlaying,setIsSoundPlaying] = useState(true)
  const [isMusicPlaying,setIsMusicPlaying] = useState(true)
  const [pokedex,setPokedex] = useState([])

  /* useEffect(() => {
    // determines how long the loading screen is shown for
    // when timeout ends, setIsLoadingOver state is updated, and game menu is shown
    setTimeout(() => {
      setIsLoadingOver(true)
    }, 1500);
    playBackgroundMusic()
  }, []); */

  const goToStartPage = () => {
    playBackgroundMusic();
    setDifficultyLevel([]);
    charactersToPlayWith.forEach(character =>{
      character.clicked = false;
    })
  }
  const playClick = () => {
    if (isSoundPlaying) {
      const audio = new Audio()
    }
  }
  const playFlip = () => {
    console.log('playing pokemon capture sound')
  }
  const getCharactersToPlayWith = () => {
    // create array of characters to play with based on the difficulty selected
    let randomCharacters = [];
    while (randomCharacters.length < difficultyLevel[0]) {
      const randomNumber = Math.floor(Math.random()*10);
      if (!randomCharacters.includes(characters[randomNumber])) {
        randomCharacters.push(characters[randomNumber]);
      }
    }
    // randomize chosen characters
    setCharactersToPlayWith(randomCharacters);
    shuffle(randomCharacters)
  }
  const getPokedex = () => {
    // use random number to get pokemon info
    // use state to store object in array of pokemon
    // loop through repeating for difficulty level chosen

  }
  const shuffle = (array) => {
    // randomize the order of the character array
    let shuffledCharacters = [];
    let clicked = 0;

    while (shuffledCharacters.length <difficultyLevel[1]) {
      const randomNumber = Math.floor(Math.random()*array.length);
      const character = array[randomNumber];
      if (!shuffledCharacters.includes(character) && (clicked < difficultyLevel[1] - 1 || !character.clicked)) {
        shuffledCharacters.push(character);
        clicked += +character.clicked
      }
      setCharactersToDisplay(shuffledCharacters)
    }
  }
  const countScore = () => {
    // updates player score based on successful game
    setScore(score + 1)
    if (score >= bestScore) {
      setBestScore(bestScore + 1)
    }
  }
  const decideRoundResult = (character) => {
    // determine if card selection was valid for continued play
    if (character.clicked) {
      return 'lose'
    }
    if (score === difficultyLevel[0] - 1) {
      return 'win'
    } else {
      return ''
    }
  }
  const playBackgroundMusic = () => {
    let audio = new Audio(backgroundMusic)
    audio.play()
  }

  return (
    <>
      <MatchGamePage 
        difficultyLevel={10}
      />
    {/* {!isLoadingOver ? <LoadingPage />
    : (
      <>
      {!difficultyLevel[0]
        ? <StartPage
            setDifficultyLevel={setDifficultyLevel}
          />
        : <GameboardPage 
            goToStartPage={goToStartPage}
            getCharactersToPlayWith={getCharactersToPlayWith}
            setCharactersToPlayWith={setCharactersToPlayWith}
            setCharactersToDisplay={setCharactersToDisplay}
            charactersToDisplay={charactersToDisplay}
            charactersToPlayWith={charactersToPlayWith}
            shuffle={shuffle}
            score={score}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
            countScore={countScore}
            decideRoundResult={decideRoundResult}
            isSoundPlaying={isSoundPlaying}
            isMusicPlaying={isMusicPlaying}
            playClick={playClick}
            playFlip={playFlip}
          />}
          <Footer
            isMusicPlaying={isMusicPlaying}
            setIsMusicPlaying={setIsMusicPlaying}
            isSoundPlaying={isSoundPlaying}
            setIsSoundPlaying={setIsSoundPlaying}
            playClick={playClick} 
          />  
      </>
      )}
      <Sound /> */}
    </>
  )
  
}

export default App

/* const [showFace,setShowFace] = useState(false);
  const [guess1,setGuess1] = useState(null);
  const [guess2,setGuess2] = useState(null);

  const cardList = [
    {
      id:1,
      matchId:'a',
      img:'1',
    },
    {
      id:1,
      matchId:'a',
      img:'2',
    },
    {
      id:3,
      matchId:'b',
      img:'3',
    },
    {
      id:4,
      matchId:'b',
      img:'4',
    },
    {
      id:5,
      matchId:'c',
      img:'5',
    },
    {
      id:6,
      matchId:'c',
      img:'6',
    },
    {
      id:7,
      matchId:'d',
      img:'7',
    },
    {
      id:8,
      matchId:'d',
      img:'8',
    },
    {
      id:9,
      matchId:'e',
      img:'9',
    },
    {
      id:10,
      matchId:'e',
      img:'10',
    },
    {
      id:11,
      matchId:'f',
      img:'11',
    },
    {
      id:12,
      matchId:'f',
      img:'12',
    },
    {
      id:13,
      matchId:'g',
      img:'13',
    },
    {
      id:14,
      matchId:'g',
      img:'14',
    },
    {
      id:15,
      matchId:'h',
      img:'15',
    },
    {
      id:16,
      matchId:'h',
      img:'16',
    }
  ]
  function handleCardFlip(e) {
    console.log('logging card choice and detecting matches')
    if (guess1 !== null && guess2 === null) {
      let card = e.target.id;  // get props from clicked component
      console.log(card)
      setGuess2(card);
      handleCardMatch();
    } else if (guess1 === null && guess2 === null) {
      let card = e.target.id; // get props from clicked component
      console.log(card)
      setGuess1(card); 
    }
  }
  function handleCardMatch() {
    if (guess1 == guess2) {
      console.log('you made a match!')
    } else {
      console.log('no match, try again!')
    }
    setGuess1(null)
    setGuess2(null)
  }
  const listItems = cardList.map((card) => {
    return (
      <>
      <Card 
        showFace={showFace}
        cardInfo={card} // contains object with img link and id's
        onClick={handleCardFlip}
      />
      </>
    )
  }) */