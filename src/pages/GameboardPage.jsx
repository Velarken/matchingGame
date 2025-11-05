import {useState,useEffect} from 'react'
import {Header} from '../components/Header.jsx'
import {Card} from '../components/Card.jsx'
import {GameOver} from '../components/GameOver.jsx'
import {motion, AnimatePresence} from 'motion/react'
import '../GameboardPage.css'

export function GameboardPage({
    goToStartPage,
    playClick,
    playFlip,
    getCharactersToPlayWith,
    setCharactersToPlayWith,
    charactersToPlayWith,
    charactersToDisplay,
    shuffle,
    score,
    setScore,
    bestScore,
    setBestScore,
    countScore,
    decideRoundResult
}) {
    const [isFlipped,setIsFlipped] = useState(false);
    const [isClicked,setIsClicked] = useState(false);
    const [result,setResult] = useState('');

    useEffect(() => {
        getCharactersToPlayWith();
        return () => {
            setCharactersToPlayWith([]);
            setScore(0);
            setBestScore(0);
            charactersToPlayWith.forEach(character => {
                character.clicked = false;
            })
        }
    }, []);
    const handleCardClick = (character) => {
        setIsClicked(true);
        if (isClicked) return

        let turnResult = decideRoundResult(character);
        setResult(turnResult);
        character.clicked = true;

        if(turnResult !== '') {
            if (turnResult === 'win') countScore;
            setIsClicked(false);
            return
        };
        countScore();

        setIsFlipped(true);
        playFlip();
        setTimeout(() => {
            shuffle(charactersToPlayWith)
        }, 800);
        setTimeout(() => {
            setIsFlipped(false);
            setIsClicked(false);
            turnResult = '';
        }, 1300)
    }
    const restartGame = () => {
        setScore(0);
        setResult('');
        charactersToPlayWith.forEach(character => {
            character.clicked = false;
        });
        getCharactersToPlayWith();
    }
    return (
        <>
            <Header
                goToStartPage={goToStartPage}
                playClick={playClick}
                score={score}
                bestScore={bestScore}
            />
            <motion.div
                className='playSpace'
                initial={{Scale:0}}
                animate={{scale:1}}
                transition={{duration:0.5}}
            >
                <div className="cardSection">
                    {charactersToDisplay.map(character => {
                        return (
                            <Card
                                key={character.id}
                                playClick={playClick}
                                character={character}
                                img={character.src}
                                isFlipped={isFlipped}
                                handleCardClick={handleCardClick}/>
                        );
                    })}
                </div>
                <div className="remainIndicator">{`${score} / ${charactersToPlayWith.length}`}</div>
            </motion.div>
            <AnimatePresence>
                {result !== '' &&
                    <GameOver
                        restartGame={restartGame}
                        playClick={playClick}
                        result={result}/>
                }
            </AnimatePresence>
        </>
    )
}
export default GameboardPage;