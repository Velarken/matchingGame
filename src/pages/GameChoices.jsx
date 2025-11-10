import {useState} from 'react'
import StartPage from './StartPage';
export function GameChoices({
    
}) {
    const [mode,setMode] = useState('match');

    return (
        <>
            {mode === 'match' ? (
                <>
                    <StartPage setDifficultyLevel={setDifficultyLevel} />
                    
                </>
            ) : (
                <>

                </>
            )}
        
        </>
    )
}
export default GameChoices;