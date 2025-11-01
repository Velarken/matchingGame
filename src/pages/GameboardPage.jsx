import {useState,useEffect} from 'react'
export function GameboardPage({
    goToStartPage,
    getCharactersToPlayWith,
    setCharactersToPlayWith,
    getCharactersToDisplay,
    setCharactersToDisplay,
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
        
        </>
    )
}
export default GameboardPage;